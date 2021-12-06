const User = require('../models/User');

module.exports.get_users = (req,res) => {
    User.find().sort({date:-1}).then(users => res.json(users));
}

module.exports.post_user = (req,res) => {
    const newUser = new User(req.body);
    newUser.save().then(user => res.json(user));
}

module.exports.update_user = (req,res) => {
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.json(user);
        });
    });
}

module.exports.delete_user = (req,res) => {
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
        res.json({success: true});
    });
}

