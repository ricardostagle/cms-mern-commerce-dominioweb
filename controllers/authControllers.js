const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

module.exports.signup = (req,res) => {
    const { name, role, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'});

        const newUser = new User({ name, email, password });

        // Create salt and hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        jwt.sign(
                            { id: user._id },
                            config.get('jwtsecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        role: user.role,
                                        email: user.email
                                    }
                                });
                            }
                        )
                    });
            })
        })
    })
}

module.exports.login = async (req,res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User does not exist'});

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

                    jwt.sign(
                        { id: user._id },
                        config.get('jwtsecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    role: user.role,
                                    email: user.email
                                }
                            });
                        }
                    )
                })
        })
}

module.exports.get_user = (req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
}

module.exports.get_users = (req,res) => {
    User.find().sort({date:-1}).then(users => res.json(items));
}

module.exports.delete_user = (req,res) => {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.json({success: true});
    });
}

module.exports.update_user = (req,res) => {
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.json(user);
        });
    });
}
