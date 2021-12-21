import { Component } from "react";
import AppNavbar from '../header/AppNavbar';
import Footer from '../footer/Footer';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Alert} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";
import { addToCart } from "../../actions/cartActions";
import { Link } from "react-router-dom"

class Store extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onAddToCart = async (id, productId) => {
        await this.props.addToCart(id, productId, 1);
        alert ("Item added to Cart");
    }

    render(){
        const { items } = this.props.item;

        items.sort((a, b) => a.title.localeCompare(b.title))

        if (this.props.isAuthenticated ){
             const user = this.props.user 
         }

        const user = this.props.user;
        return (
            <div>
            <AppNavbar/>
            <Container>
                <div className="row row-content" id="HOME">
                {items.length ? items.map((item)=>(
                    <div className="col-md-4">
                    <div className="thumbnail"> 
                        <img src={item.media} alt={item.name} width="100%" />
                    </div>
                    <Card className="mb-4">
                        <CardBody>
                            <CardTitle tag="h5">
                                <Link 
                                    to={"/item/"+item._id}
                                    key={item._id}>
                                    {item.title}</Link>
                            </CardTitle>
                            <CardSubtitle tag="h6">$ {item.price}</CardSubtitle>
                            <CardText>
                                <Link 
                                    to={"/category/"+item.category}
                                    key={item.category}>
                                    {item.category}</Link></CardText>
                            {this.props.isAuthenticated ? 
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={this.onAddToCart.bind(this, user._id, item._id)}
                                    >Add To Cart</Button> :
                                    null}
                        </CardBody>
                    </Card>
                    </div>
                )): <div style={{width:"100%"}}><Alert className="text-center">No products found. </Alert></div>}
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
    user: state.auth.user
})

export default connect(mapStateToProps, {getItems, addToCart})(Store);