import { Component } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
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
import { getItems, deleteItem, updateItem } from "../../actions/itemActions";
import { Link } from "react-router-dom"

class Items extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        UpdatedItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        userAuth: PropTypes.object.isRequired
    }

    render(){
        const CreateItem = id => {
          window.location = '/add-item'
        }
        const UpdateItem = (item) => {
          window.location = '/update-item/'+item._id
        }

        const DeleteItem = id => {
          // Attempt to register
          this.props.deleteItem(id);
        }

        const { items } = this.props.item;

        return (
          <div>

          <AppNavbar/>

          <div className="row-content">
            <Container maxWidth="lg">  
            { this.props.isAuthenticated ?    
              <Paper >
                <Box display="flex">
                  <Box flexGrow={1}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>ITEMS</Typography>
                  </Box>
                  <Box>
                    <Link to="/create">
                      <Button onClick={() => CreateItem()}>Create Item</Button>
                    </Link>
                  </Box>
                </Box>
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Title</TableCell>
                      <TableCell align="left">Description</TableCell>
                      <TableCell align="left">Date</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.ID}>
                        <TableCell align="left">{item.title}</TableCell>
                        <TableCell align="left">{item.description}</TableCell>
                        <TableCell align="left">{item.price}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => UpdateItem(item)}>Edit</Button>
                            <Button onClick={() => DeleteItem(item._id)}>Del</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  
                </Table>
              </TableContainer>
              </Paper>: 
                    <Alert className="text-center" color="danger">Login to watch items!</Alert>
                    }
            </Container>
          </div>

          <Footer/>
          </div>
          
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    userAuth: state.auth.user
})

export default connect(mapStateToProps, { getItems, deleteItem, updateItem })(Items);