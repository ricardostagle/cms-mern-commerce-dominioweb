import { Component } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
import RegisterUserModal from './CreateUser';
import UpdateUserModal from './UpdateUserModal';
import {
    Alert
} from 'reactstrap';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers, deleteUser, updateUser } from "../../actions/userActions";
import { Link } from "react-router-dom"

class Users extends Component {
    state = {
        error: null,
        isLoaded:false,
        items: [],
        totalRows: 0,
        perPage: 12,
        page:0,
    }

    componentDidMount(){
        this.props.getUsers();
    }

    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        UpdatedUser: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        userAuth: PropTypes.object.isRequired, 
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

        const handlePageChange = (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null , 
          newPage: number,
        ) => {
          this.setState({page:newPage});
        }

        const handlePerRowsChange = (
          event: React.ChangeEvent<HTMLInputElement>
          ) => {
          this.setState({perPage:parseInt(event.target.value, 10)});
          this.setState({page:0});
        };

        return (
          <div>

          <AppNavbar/>

          <div className="row-content">
            <Container maxWidth="lg"> 
              { this.props.isAuthenticated ? 
               this.state.error ? 
                  <div>Error: {this.props.error.message}</div>
                :  
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
                    {(
                      this.state.perPage > 0 
                        ? users.slice(this.state.page * this.state.perPage, this.state.page * this.state.perPage + this.state.perPage)
                        : users
                    ).map((user) => (
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
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        count={users.length}
                        rowsPerPage={this.state.perPage}
                        page={this.state.page}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handlePerRowsChange}
                        rowsPerPageOptions={[5, 10, 25]}
                        labelRowsPerPage={<span>Rows:</span>}
                        backIconButtonProps={{
                          color: "secondary"
                        }}
                        nextIconButtonProps={{ color: "secondary" }}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "page number"
                          }
                        }}
                        showFirstButton={true}
                        showLastButton={true}
                        //ActionsComponent={TablePaginationActions}
                        //component={Box}
                        //sx and classes prop discussed in styling section
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
              </Paper>
              : <Alert className="text-center" color="danger">Login to watch users!</Alert>
            }
            </Container>
          </div>

          /*
          { !this.state.isLoaded ?
            <div>Loading...</div>
          : ''
          }
          */

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