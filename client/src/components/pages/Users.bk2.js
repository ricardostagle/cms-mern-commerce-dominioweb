import React, { useEffect, useState, Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { getUsers, addUser, deleteUser, updateUser } from "../../actions/userActions";


class UsersTable extends Component {

    componentDidMount(){
        this.props.getUsers();

        console.log(this);
    }

    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired
    }




  /*
  API rest
  const UsersGet = () => {
    fetch("https://www.mecallapi.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
        }
      )
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
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
          UsersGet();
        }
      }
    )
  }*/
  render(){

        console.log(this.props);

        const { users } = this.props.getUsers;

        const CreateUser = id => {
          window.location = '/create_user/'+id
        }

        const UpdateUser = id => {
          window.location = '/update_user/'+id
        }

        const DeleteUser = id => {
          window.location = '/delete_user/'+id
        }

        const UsersGet = () => {
          console.log(getUsers())
        }

  return (
    <div>
    <AppNavbar/>

    <div className="row-content">
      <Container maxWidth="lg">    
        <Paper >
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="left">First</TableCell>
                <TableCell align="left">Last</TableCell>
                <TableCell align="left">Username</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>

    <Footer/>
    </div>
    
  );

  }

}

/*

      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        container: {
          marginTop: theme.spacing(2),
        },
        paper: {
          padding: theme.spacing(2),
          color: theme.palette.text.secondary,
        },
      }));


export default function UserList() {

      const classes = useStyles();

      const [users, setUsers] = useState([]);
      useEffect(() => {
        UsersGet()
      }, [])

      const CreateUser = id => {
        window.location = '/create_user/'+id
      }

      const UpdateUser = id => {
        window.location = '/update_user/'+id
      }

      const DeleteUser = id => {
        window.location = '/delete_user/'+id
      }

      const UsersGet = () => {
        console.log(getUsers())
        setUsers(getUsers())
      }
 return (
    <div>
    <AppNavbar/>

    <div className={classes.root+" row-content"}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="left">First</TableCell>
                <TableCell align="left">Last</TableCell>
                <TableCell align="left">Username</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.ID}>
                  <TableCell align="right">{user.id}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={user.avatar} />
                    </Box>
                  </TableCell>
                  <TableCell align="left">{user.fname}</TableCell>
                  <TableCell align="left">{user.lname}</TableCell>
                  <TableCell align="left">{user.username}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                      <Button onClick={() => DeleteUser(user.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>

    <Footer/>
    </div>
    
  );

}
*/

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {getUsers, addUser, deleteUser, updateUser })(UsersTable);