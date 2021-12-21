import { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';

class Profile extends Component {
    state = {
        title: '',
        description: '',
        category: '',
        price: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price
        }

        await this.props.addItem(newItem);

        alert('Item added successfully');
    }

    render(){
        return(
            <div>
                <AppNavbar/>
                <Container>
                    <div className="row-content">
                    <h2 className="text-center mb-3">Profile</h2>
                    {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>):null}

                    { this.props.isAuthenticated ?

                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Register</Button>
                            </FormGroup>
                        </Form>
                        : 
                    <Alert className="text-center" color="danger">Login to add items!</Alert>
                    }
                    </div>
                </Container>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,{addItem})(Profile);