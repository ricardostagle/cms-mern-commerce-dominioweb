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
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/font-awesome.min.css';
import '../../css/pe-icon-7-stroke.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { random: 1 };
    }

    min = 1;
    max = 3;

    randomNumber = () => {
        this.setState({random: Math.round(this.min + (Math.random() * (this.max - this.min)))});
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired
    }

    render(){

        return (
            <div>
                <AppNavbar/>
                     <Container>
                        <div class="row-content">
                        <h2 className="text-left mb-3">Page doesn't exist</h2>
                         </div>
                    
                     </Container>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Home);