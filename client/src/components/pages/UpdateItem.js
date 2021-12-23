import React, { Component, useState, useEffect } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
    Input,
    Alert
} from 'reactstrap';


import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateItem } from "../../actions/itemActions";
import { useParams } from 'react-router-dom';
import axios from 'axios';

class UpdateItem extends Component {

    state = {
        item: [],
        id: this.props.match.params.id,
        isFetching: true  
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() { 

      //console.log(this)
      const id = this.props.match.params.id;
        
        if(this.state.isFetching){
          const req = fetch('/api/items/'+id, {
            method: 'PUT',
          })
          .then(res => res.json())
          .then(
            (result) => {
              if (result && this.state.isFetching === true) {
                this.setState({
                  item: result,
                  isFetching: false
                });
                
              }
            }
          )
        }

    }

    onSubmit = async (e) => {
        e.preventDefault();
        let item_id = this.props.match.params.id;
        let updatedItem = this.state.item
        console.log(item_id)
        console.log(updatedItem)
        await this.props.updateItem(item_id, updatedItem);
        window.location.href = '/my-items';
    }

    onChange = (e) => {
        let updatedItem = this.state.item
        let field = e.target.name
        updatedItem[field]= e.target.value
        this.setState({
            item:updatedItem
        });
    }

    render(){
        let items =  this.state.item

        return (
          <div>
            <AppNavbar/>
              <div className="row-content">
                <Container maxWidth="xs">
   
                  { this.props.isAuthenticated ? 
                  <div className="makeStyles-paper-1">
                  <Typography component="h1" variant="h5">
                    Update Item
                  </Typography>
                 
                  <form onSubmit={this.onSubmit}>
                    <Grid container spacing={2} style={{'margin': '20px -8px'}}>
                    { items ? Object.keys(items).map((item) => (
                        <Grid item xs={12}  key={item.toString()}>
                        <TextField
                          autoComplete={item}
                          variant="outlined"
                          fullWidth
                          name={item}
                          id={item}
                          value={this.state.item[item]}
                          label={item}
                          onChange={this.onChange}
                          autoFocus
                        />
                      </Grid>
                    ))
                    : null
                    }

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
                  </div>: 
                    <Alert className="text-center" color="danger">Please, login to watch this item.</Alert>
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

export default connect(mapStateToProps, {updateItem})(UpdateItem);