import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

    render() {

        return(
            <div>
                <section className="subscribe parallax subscribe-parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
                                <div className="section_overlay wow lightSpeedIn">
                                    <div className="container">
                                        
                                    </div>
                                </div>
                            </section>

                            <section className="copyright">
                                <h2></h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="copy_right_text">
                                                <p>Copyright © 2024 <span>by </span><a href="http://dominioweb.com.mx/">DOMINIOWEB</a></p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="scroll_top">
                                                <a href="#HOME"><i className="fa fa-angle-up"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </section> 
            </div>

        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Footer);