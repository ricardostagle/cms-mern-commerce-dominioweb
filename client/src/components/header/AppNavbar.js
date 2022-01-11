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

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

class AppNavbar extends Component {

    componentDidMount(){

        $(document).ready(function() {

            if((window.location.protocol + '//' +window.location.host+'/home') === window.location.href){


               //MENU APPEAR AND HIDE
                
                $(window).scroll(function() {
                    
                    if ($(window).scrollTop() > 100) {
                        $("#navbar-component").css({
                            'margin-top': '0',
                            'opacity': '1'
                        })
                        $("#navbar-component>li>a").css({
                            'padding-top': '15px'
                        });
                        $(".navbar-brand img").css({
                            'height': '35px'
                        });
                        $(".navbar-brand img").css({
                            'padding-top': '0px'
                        });
                        $(".navbar-default").css({
                            'background-color': '#1a1d22','opacity':'1'
                        });
                    } else {
                        $("#navbar-component").css({
                            'margin-top': '-100px',
                            'opacity': '0'
                        })
                        $("#navbar-component>li>a").css({
                            'padding-top': '5px'
                        });
                        $(".navbar-brand img").css({
                            'height': '45px'
                        });
                        $(".navbar-brand img").css({
                            'padding-top': '20px'
                        });
                        $(".navbar-default").css({
                            'background-color': 'rgba(59, 59, 59, 0)'
                        });
                    }

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
                });


                $("#navbar-component li a").click(function() {
                    $("#navbar-component li a").parent().removeClass("active");
                    $(this).parent().addClass("active");
                });

                setInterval(function() {
                    var widnowHeight = $(window).height();
                    var containerHeight = $(".home-container").height();
                    var padTop = widnowHeight - containerHeight;
                    $(".home-container").css({
                        'padding-top': Math.round(padTop / 2) + 'px',
                        'padding-bottom': Math.round(padTop / 2) + 'px'
                    });
                }, 10)


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
                    { isAdmin ? <MenuItem onClick={popupState.close}><a href="/home-commerce">Amazon</a></MenuItem> : ''}
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