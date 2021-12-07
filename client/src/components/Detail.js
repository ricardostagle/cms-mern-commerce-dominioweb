import { Component } from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import { CardText, CardBody,  CardSubtitle, Button, Container, Alert} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import { addToCart } from "../actions/cartActions";

class Detail extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          item_selected: [],
          date: new Date()
        };
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

    json2array(json) {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        return result;
    }

    render(){
        const { items } = this.props.item;
        const user = this.props.user;
        //const id = this.props.match.params.id;
        const pathname = window.location.pathname 
        const id = pathname.substring(6)

        let item = items.filter(item => {
            if(item._id === id) {
                return item;
            }
        });

        let ifImage 
        if (item.length) { 

            var item_selected = {
                'image': item[0].media,
                'name': item[0].name,
                'title': item[0].title,
                'category': item[0].category,
                'price': item[0].price,
                'model': item[0].model,
                'make': item[0].make,
                'year': item[0].year,
                'description': item[0].description
            }
            console.log(item_selected);

            if (item_selected.image) {
              ifImage = <div className="thumbnail"><img src={item_selected.image} alt={item_selected.name} width="100%" /></div>;
            }
            return (
                <div>
                    <AppNavbar/>
                    <Container>
                        <div className="row row-content" id="HOME">
                            <div className="col-sm-6 col-md-6">
                               { ifImage }
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <h1>{item_selected.title}</h1>
                               <CardBody>
                                    <h2>{item_selected.description}</h2>
                                    <CardSubtitle tag="h3">$ {item_selected.price}</CardSubtitle>
                                    <CardText>{item.category}</CardText>
                                    {this.props.isAuthenticated ? 
                                        <Button
                                            color="success"
                                            size="sm"
                                            onClick={this.onAddToCart.bind(this, user._id, item._id)}
                                            >Add To Cart</Button> :
                                            null}
                                </CardBody>
                               <ul>
                                   <li><strong>Model</strong>: {item_selected.model}</li>
                                   <li><strong>Make</strong>: {item_selected.make}</li>
                                   <li><strong>Year</strong>: {item_selected.year}</li>
                                   <li><strong>Price</strong>: {item_selected.price}</li>
                               </ul>
                            </div>
                        </div>
                    </Container>
                     <Footer/>
                </div>
            )

        }else{
            return (
                <div>
                    <AppNavbar/>
                    <Container>
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <h1>No results</h1>
                            </div>
                        </div>
                    </Container>
                    <Footer/>
                </div>
            )
        }       
       
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {getItems, addToCart})(Detail);