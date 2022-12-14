import { Component } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
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
import { getItems, deleteItem, updateItem } from "../../actions/itemActions";
import { Link } from "react-router-dom"

class Items extends Component {
    state = {
        error: null,
        isLoaded:false,
        items: [],
        totalRows: 0,
        perPage: 5,
        page:0,
    }

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
                <h1>ITEMS</h1>
              : ''
            } 
            { this.props.isAuthenticated ? 
              <Paper >
                <Box display="flex">
                  <Box flexGrow={1}>
                    <Typography component="h1" variant="h6" color="primary" gutterBottom>ITEMS</Typography>
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
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {(
                      this.state.perPage > 0 
                        ? items.slice(this.state.page * this.state.perPage, this.state.page * this.state.perPage + this.state.perPage)
                        : items
                    ).map((item) => (
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
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        count={items.length}
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