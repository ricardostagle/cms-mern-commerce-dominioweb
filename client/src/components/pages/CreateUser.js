import { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../../actions/userActions';
import { clearErrors } from '../../actions/errorActions';

class CreateUser extends Component {
    state = {
        modal: false,
        name: '',
        surname: '',
        email: '',
        avatar: '',
        password: '',
        msg: null,
        errors: {}
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        addUser: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    /*
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for register error
            if(error.id === 'REGISTER_FAIL'){
                //this.setState({msg: error.msg.msg});
            }
            else{
                //this.setState({msg:null});
            }
        }

        // If authenticated, close modal
        if(this.state.modal){
            if(isAuthenticated){
                //this.toggle();
            }
        }
    }*/

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    validate(){
      let input = this.state;
      let errors = {};
      let isValid = true;
  
      if (!input.name) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input.email) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input.email !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input.password) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input.confirm_password) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input.password !== "undefined" && typeof input.confirm_password !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const { name, surname, email, password, avatar } = this.state;

        // Crete user object
        const newUser = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            avater: this.state.avatar
        }

        if(this.state.name 
          && this.state.surname 
          && this.state.email
          && this.state.password
          && this.state.avatar
          && this.validate()){

            // Attempt to register
            this.props.addUser(newUser);

            this.setState({
                modal: !this.state.modal
            });


            alert('Demo Form is submited');
            //alert('User created successfully');

        }else{
          this.setState({
                msg: 'Please fill out all the fields'
            });
        }
    }

    render(){
        return(
            <div className="container">
                <Button color="info" className="btn btn-sm"><NavLink onClick={this.toggle} href="#"><span className="text-dark"><b>Create User</b></span></NavLink></Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> Create User</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <Grid container spacing={2} style={{'margin': '20px -8px'}}>
                              <Grid item xs={12} sm={6}>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <div className="text-danger">{this.state.errors.name}</div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder="Last Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <div className="text-danger">{this.state.errors.surname}</div>
                                </Grid>
                                <Grid item xs={12}>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <div className="text-danger">{this.state.errors.email}</div>
                                </Grid>
                                <Grid item xs={12}>
                                <Input
                                    type="avatar"
                                    name="avatar"
                                    id="avatar"
                                    placeholder="Avatar"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <div className="text-danger">{this.state.errors.avatar}</div>
                                </Grid>
                                <Grid item xs={12}>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <div className="text-danger">{this.state.errors.password}</div>
                                </Grid>
                                 <Grid item xs={12}>
                                <Input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    placeholder="Confirm Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <div className="text-danger">{this.state.errors.password}</div>

                                </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >New User</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{addUser, clearErrors})(CreateUser);