import { Component } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
import RegisterUserModal from './CreateUser';
import UpdateUserModal from './UpdateUserModal';
import {
    Alert
} from 'reactstrap';

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
import { getUsers, deleteUser, updateUser } from "../../actions/userActions";
import { Link } from "react-router-dom"

class Users extends Component {

    componentDidMount(){
        this.props.getUsers();
    }

    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        UpdatedUser: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        userAuth: PropTypes.object.isRequired
    }

    render(){
        const CreateUser = id => {
          window.location = '/create-user'
        }
        const UpdateUser = (user) => {
          window.location = '/update-user/'+user._id
        }

        const DeleteUser = id => {
          // Attempt to register
          this.props.deleteUser(id);
        }

        const { users } = this.props.user;

        return (
          <div>

          <AppNavbar/>

          <div className="row-content">
            <Container maxWidth="lg"> 
              { this.props.isAuthenticated ?   
              <Paper >
                <Box display="flex">
                  <Box flexGrow={1}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                      USERS
                    </Typography>
                  </Box>
                  <Box>
                    <Link to="/create">
                      <RegisterUserModal/>
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

                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.ID}>
                        <TableCell align="right">{user._id}</TableCell>
                        <TableCell align="center">
                          <Box display="flex" justifyContent="center">
                            <Avatar src={user.avatar} />
                          </Box>
                        </TableCell>
                        <TableCell align="left">{user.name}</TableCell>
                        <TableCell align="left">{user.surname}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => UpdateUser(user)}>Edit</Button>
                            <Button onClick={() => DeleteUser(user._id)}>Del</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  
                </Table>
              </TableContainer>
              </Paper>: 
                    <Alert className="text-center" color="danger">Login to watch users!</Alert>
                    }
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

export default connect(mapStateToProps, { getUsers, deleteUser, updateUser })(Users);