import { Component, Fragment } from 'react';
import * as React from 'react';
import {
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    Container, 
    NavLink,
} from 'reactstrap';
import RegisterModal from '../auth/registerModal';
import Logout from '../auth/Logout';
import LoginModal from '../auth/loginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import '../../css/styles.css';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

class AppNavbar extends Component {

    componentDidMount(){

        $(document).ready(function() {

            // Conditions for homepage

            if((window.location.protocol + '//' +window.location.host+'/home') === window.location.href){

                let windowWidth = $(window).width();
                var navbar = $("#navbar-component");
                
                $(window).scroll(function() {

                    $(".page").each(function() {
                        var uu = '';
                        
                        var bb = $(this).attr("id");
                        var hei = $(this).outerHeight();
                        var grttop = $(this).offset().top - 70;
                        if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                            uu = $(".navbar-nav li a[href='/home#" + bb + "']").parent().addClass("active");
                        } else {
                            uu = $(".navbar-nav li a[href='/home#" + bb + "']").parent().removeClass("active");
                        }
                    });

                    // If scroll on mobile devices
                    var isMobile = false; //initiate as false
                    // device detection
                    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
                        isMobile = true;
                        navbar.css({
                            'width' : windowWidth
                        });
                        
                    }
                    if ($(window).scrollTop() > 100 ) {
                        navbar.css({
                            'margin-top': '0px',
                            'opacity': '1'
                        })
                    } else {
                        navbar.css({
                            'margin-top': '-100px',
                            'opacity': '0'
                        })
                    }

                });

                // SHOW / HIDE navbar when loading home page 

                if ($(window).scrollTop() == 0) {
                    $("#navbar-component").css({
                        'margin-top': '-100px',
                        'opacity': '0'
                    })
                }else{
                    $("#navbar-component").css({
                        'margin-top': '0',
                        'opacity': '1'
                    })  
                }


                $("#navbar-component li a").click(function() {
                    $("#navbar-component li a").parent().removeClass("active");
                    $(this).parent().addClass("active");
                });

                // EXPAND HEIGHT LOADING PAGE

                $(function() {
                    var widnowHeight = $(window).height();
                    var containerHeight = $(".home-container").height();
                    var padTop = widnowHeight - containerHeight;
                    $(".home-container").css({
                        'padding-top': Math.round(padTop / 2) + 'px',
                        'padding-bottom': Math.round(padTop / 2) + 'px'
                    });
                });


                $(function() {

                  $('a[href*=\\#]:not([href=\\#])').click(function() {
                    if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                      if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top
                        }, 1000);
                        return false;
                      }
                    }
                  });
                });

            }else{
                $("#navbar-component").css({
                    'margin-top': '0',
                    'opacity': '1'
                })

            }

        });

        
    }
 

    state = {
        isOpen: false,
        isAdmin: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { isAuthenticated, user} = this.props.auth;
        let { isAdmin } = false;
        if( isAuthenticated  && user.role === 'admin'){
            isAdmin = !isAdmin 
        }

        const defaultLinks = (
            <Fragment>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/home#ABOUT">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/home#FEATURES">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/home#CONTACT">Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/store">Store</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/cart">Cart</NavLink>
                </NavItem>
                <NavItem className="mr-2">
                    <NavLink href="/orders">Orders</NavLink>
                </NavItem>
            </Fragment>
        );

        const dropmenu = (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Dashboard
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    { isAdmin ? <MenuItem onClick={popupState.close}><a href="/my-users">Users</a></MenuItem> : ''}
                    { isAdmin ? <MenuItem onClick={popupState.close}><a href="/my-items">Items</a></MenuItem> : ''}
                    { isAdmin ? <MenuItem onClick={popupState.close}><a href="/add-item">Add Item</a></MenuItem> : ''}
                    <MenuItem onClick={popupState.close}><Logout/></MenuItem>
                   
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
        );

        const authLinks = (
            <Fragment>
                { user ? <NavItem><NavLink href="/profile"> Welcome {user.name} </NavLink></NavItem> : ''}
                {defaultLinks}
                { user ? dropmenu : ''}
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                {defaultLinks}
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        );

        return(
            <Navbar color="dark" dark expand="sm" className="navbar-fixed-top" id="navbar-component">
                <Container>
                    <NavbarBrand href="/"><img src="/imgs/logo.png" alt="" /></NavbarBrand>
                     <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar> 
                            { isAuthenticated ? authLinks: guestLinks}                               
                        </Nav>
                     </Collapse>
                </Container>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);