import { Component } from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {
  Modal,
    ModalHeader,
    ModalBody,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from "../actions/userActions";
import { clearErrors } from '../actions/errorActions';

class CreateUser extends Component {

    state = {
      modal: false,
        name: '',
        surname: '',
        email: '',
        password: '',
        avatar: '',
        msg: null
    }

    static propTypes = {
      isAuthenticated: PropTypes.bool,
      error: PropTypes.object.isRequired,
      addUser: PropTypes.func.isRequired,
      clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
      const { error, isAuthenticated } = this.props;
      if(error !== prevProps.error){
          // Check for register error
          if(error.id === 'REGISTER_FAIL'){
              this.setState({msg: error.msg.msg});
          }
          else{
              this.setState({msg:null});
          }
      }

      // If authenticated, close modal
      if(this.state.modal){
          if(isAuthenticated){
              this.toggle();
          }
      }
  }

  toggle = () => {
      // Clear errors
      this.props.clearErrors();
      this.setState({
          modal: !this.state.modal
      });
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

        // Attempt to register
        this.props.addUser(newUser);

        alert('User created successfully');
    }


    render(){

        return (
          <div>
            <AppNavbar/>
              <div class=" row-content">
             
                {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}
                <Container maxWidth="xs">
                  <Typography component="h1" variant="h5">
                    Create User
                  </Typography>
                  <form onSubmit={this.onSubmit}>
                    <Grid container spacing={2} style={{'margin': '20px -8px'}}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="name"
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          id="name"
                          label="First Name"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="surname"
                          name="surname"
                          label="Last Name"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          name="email"
                          label="Email"
                          onChange={this.onChange}
                        />
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
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="avatar"
                          name="avatar"
                          label="Avatar"
                          onChange={this.onChange}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Create
                    </Button>
                  </form>
              </Container>   
            </div>
          <Footer/>
        </div>
          
        );
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, {addUser, clearErrors})(CreateUser);