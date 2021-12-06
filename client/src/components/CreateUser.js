import { Component } from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import { Link } from "react-router-dom"

class CreateUser extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        avatar: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            avater: this.state.avatar
        }

        await this.props.addUser(newUser);

        alert('Item added successfully');
    }


    render(){

        const handleSubmit = event => {
          event.preventDefault();
          var data = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            avater: this.state.avatar
          }
          fetch('/users/create', {
            method: 'POST',
            headers: {
              Accept: 'application/form-data',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(res => res.json())
          .then(
            (result) => {
              alert(result['message'])
              if (result['status'] === 'ok') {
                window.location.href = '/';
              }
            }
          )
        }

        return (
          <div>
            <AppNavbar/>
              <div class=" row-content">
                <Container maxWidth="xs">
                  <Typography component="h1" variant="h5">
                    Create User
                  </Typography>
                  <form onSubmit={this.onSubmit}>
                    <Grid container spacing={2} style={{'margin': '20px -8px'}}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="name"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          onChange={this.onChange}
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="password"
                          label="Password"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="avatar"
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
    user: state.user,
    isAuthenticated: state.auth.isAuthenticated,
    userAuth: state.auth.user
})

export default connect(mapStateToProps, {addUser})(CreateUser);