import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

    render() {

        return(
            <div>
                <section class="subscribe parallax subscribe-parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
                                <div class="section_overlay wow lightSpeedIn">
                                    <div class="container">
                                        
                                    </div>
                                </div>
                            </section>

                            <section class="copyright">
                                <h2></h2>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="copy_right_text">
                                                <p>Copyright © 2021 <span>by </span><a href="http://dominioweb.com.mx/">DOMINIOWEB</a></p>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="scroll_top">
                                                <a href="#HOME"><i class="fa fa-angle-up"></i></a>
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