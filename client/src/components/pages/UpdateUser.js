import React, { Component, useState, useEffect } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/userActions";
import { useParams } from 'react-router-dom';
import axios from 'axios';

class UpdateUser extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        avatar: '',
        id: this.props.match.params.id,
        isFetching: true  
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        UpdatedUser: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidMount() { 

      //console.log(this)

  }

   onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const user_id = this.props.match.params.id;

        const updateUser = {
            id: user_id,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar
        }

        await this.props.updateUser(user_id, updateUser);

        window.location.href = '/myusers';
    }

    render(){
        const id = this.props.match.params.id;
        const req = fetch('/api/users/'+id, {
            method: 'PUT',
          })
          .then(res => res.json())
          .then(
            (result) => {
              if (result && this.state.isFetching === true) {
                this.setState({
                  id: result._id,
                  name: result.name,
                  surname: result.surname,
                  email: result.email,
                  password: result.password,
                  confirm_password: result.password,
                  avatar: result.avatar,
                  isFetching: false
                });
                
              }
            }
          )

        return (
          <div>
            <AppNavbar/>
              <div class=" row-content">
                <Container maxWidth="xs">
                  <div class="makeStyles-paper-1">
                  <Typography component="h1" variant="h5">
                    Update User
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
                          name="name"
                          id="Name"
                          value={this.state.name}
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
                          name="surname"
                          id="surname"
                          value={this.state.surname}
                          label="Last Name"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          value={this.state.email}
                          label="Email"
                          onChange={this.onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          type="password"
                          value={this.state.password}
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
                          type="password"
                          value={this.state.password}
                          id="confirm_password"
                          name="confirm_password"
                          label="Confirm Password"
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
                          name="avatar"
                          value={this.state.avatar}
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
                      Update
                    </Button>
                  </form>
                  </div>
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

export default connect(mapStateToProps, {updateUser})(UpdateUser);