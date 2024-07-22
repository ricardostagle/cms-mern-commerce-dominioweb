import { Component } from 'react';
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
                <section id="HOME" onLoad={this.randomNumber.bind(this)} className={"header parallax home-parallax page fun_facts bg"+this.state.random}>
                    <AppNavbar/>
                    <div className="container home-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="logo text-center">
                                    <img src="/imgs/logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="home_text">
                                    <h1>Web design and development in your hands</h1>
                                    <p>CREATIVITY IN DIGITAL DEVELOPMENT</p>
                                    <div className="download-btn">
                                        <a className="btn home-btn wow fadeInLeft" href="#ABOUT">Meet us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="home-iphone">
                                    <img src="/imgs/portada.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                    <section className="about page" id="ABOUT">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section_title">
                                        <h2>CREATIVITY IN DIGITAL DEVELOPMENT</h2>
                                    </div>
                                    <div className="video_title">
                                        <p>DOMINIOWEB is a young company, leader in the area of design and development services. The company has extensive experience in technologies to assist in the development of a wide variety of applications that meet the specific needs of start-ups, and medium-sized and large established companies.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="video_title">
                                        <p>In DOMINIOWEB we are guided by innovative thinking. The most powerful characteristic of man is innovative thinking, which allows an organization like ours to overcome expectations, to be above routine, expected and habitual, reaching innovative solutions that add value to our products and services while we strengthen our customers by differentiating them from the rest of the market.</p>
                                        <p>We make your site work much better, we can improve the potential of your business. Our team can give you the brightness you need in design and development. We respect deadlines, understand budgets and guarantee everything we develop.</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                        <div className="about_phone wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img src="/imgs/tecnologias.png" alt="" />
                                        </div>
                                </div>

                                 <div className="col-md-12">
                                    <div className="video_title">
                                        <p>In addition to web design and development, DOMINIOWEB also has Social Media Marketing, Search Engine Marketing, Search Engine Optimization, hosting, domain registration, e-commerce solutions, content management systems, Flash, html5, to name a few of our services . The goal of DOMINIOWEB is to provide an innovative experience in design and development using our industry knowledge, our experience, the wealth of dynamic ideas and cutting-edge technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner_about_area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div className="inner_about_desc">
                                            <div className="single_about_area fadeInUp wow" data-wow-duration=".5s" data-wow-delay="1s">
                                                <div><i className="pe-7s-target"></i></div>
                                                <h3>Mission</h3>
                                                <p>Being a company specialized in the development of information technologies and products related to technological development that, for its quality in services, treatment and advice, is the preferred of both professional and amateur clients.</p>
                                            </div>
                                            <div className="single_about_area fadeInUp wow" data-wow-duration=".5s" data-wow-delay="1.5s">
                                                <div><i className="pe-7s-look"></i></div>
                                                <h3>Vision</h3>
                                                <p>Consolidate as leaders in the market of technology providers serving all levels of customers and helping to have a competitive and innovative Mexico.</p>
                                            </div>
                                            <div className="single_about_area fadeInUp wow" data-wow-duration=".5s" data-wow-delay="1.5s">
                                                <div><i className="pe-7s-diamond"></i></div>
                                                <h3>Values</h3>
                                                <p>First of all develop a high quality work, which is recommended only to our customers, differentiating ourselves from the competition. As well as guarantee the commitments of scope and time acquired.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about_phone wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img src="/imgs/valores.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <section  id="FONDO2" className={"fun_facts bg"+this.state.random}>
                        <div className="section_overlay">
                            
                        </div>
                    </section>


                        <div className="video_area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 wow fadeInLeftBig">
                                        <div className="video_title">
                                            <h2>Quality is the key</h2>
                                            <p>In DOMINIOWEB each project undertaken implies seven steps for its development. These are the definition, analysis, design, development, implementation and support, taking care that in each of these levels the most important factor is Quality Control (CC).</p>
                                            <p>The strength of DOMINIOWEB is the focus in the quality process that also ensures the development of the most demanding requirements of the clients helping us to document them in a clear and coherent way. The continuous improvement of our Quality Management System (QMS) perfectly integrates multiple quality approaches, which result in tangible benefits for our customers.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInRightBig">
                                        <div className="video">
                                            <img src="/imgs/construccion-calidad.png" alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="FEATURES" className="features page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-1">
                                    <div className="section_title wow fadeIn" data-wow-duration="1s">
                                        <h2>Our services</h2>
                                        <p>Learn about the services that DOMINIOWEB offers you. We can assure you that your site, platform or development can not be in better hands than in those of our experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="feature_inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 left_no_padding wow fadeInRight" data-wow-duration="1s">

                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-like"></span></div>
                                            <h3><span>/</span>Creative design</h3>
                                            <p>Project your brand is the main commitment that DOMINO WEB is assumed. We develop your concept and put the experience that the company has for your business to be successful.</p>
                                        </div>

                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-display1"></span></div>
                                            <h3><span>/</span>Digital marketing</h3>
                                            <p>We develop marketing strategies for digital media such as Social Networks (Twitter, Facebook, etc.), Adwords and others, for a wide dissemination of your services.</p>
                                        </div>
                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-browser"></span></div>
                                            <h3><span>/</span>Web design</h3>
                                            <p>We design attractive and innovative visual solutions. We invite you to be quiet knowing that you have a web design that guarantees the impact you will have for your site.</p>
                                        </div>
                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-graph1"></span></div>
                                            <h3><span>/</span>Analytics</h3>
                                            <p>We measure the performance of your portal and provide you with the visibility of the appropriate decisions to ensure that your investment in digital media is well spent obtaining the benefits you need.</p>
                                        </div>

                                    </div>
                                    

                                    <div className="col-md-6 left_no_padding wow fadeInRight" data-wow-duration="1s">

                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-monitor"></span></div>
                                            <h3><span>/</span>Applications development</h3>
                                            <p>We have solutions in web applications using opensources platforms and cutting-edge technologies. We offer the best IT services, custom applications and solutions to satisfy our clients.</p>
                                        </div>
                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-anchor"></span></div>
                                            <h3><span>/</span>Incredible maintenance and support</h3>
                                            <p>Our solutions have our support until you see them implemented and giving you results. You can also count on our support the time you indicate us through our support service.</p>
                                        </div>
                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-gleam"></span></div>
                                            <h3><span>/</span>Custom development</h3>
                                            <p>We provide custom software development services. We focus on the development of quality software that emphasizes the satisfaction of our clients' specific business needs. We create efficient solutions, maintaining the development of high quality software and constantly seek to exceed the expectations of customers.</p>
                                        </div>
                                        <div className="right_single_feature">
                                            <div><span className="pe-7s-study"></span></div>
                                            <h3><span>/</span>E-learning</h3>
                                            <p>We generate comprehensive solutions and easily measurable online learning products. We are a company specialized in the design, implementation and administration of online solutions to help you achieve the learning objectives for each of the educational programs required by your company.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>

                    <section  id="FONDO3" className={"fun_facts bg"+this.state.random}>
                        <div className="section_overlay">
                            
                        </div>
                    </section>

                    <section className="download page" id="DOWNLOAD">
                        
                        <div className="available_store">
                            <div className="container  wow bounceInRight" data-wow-duration="1s">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="available_title">
                                            <h2>We develop on the platform that you need</h2>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-2 no_padding">
                                            <a href="">
                                                <div className="single_store">
                                                    <i className="fa fa-apple"></i>
                                                    <div className="store_inner">
                                                        <h2>iOS</h2>
                                                    </div>
                                                </div>
                                            </a>
                                    </div>
                                    <div className="col-md-2 no_padding">
                                        <a href="">
                                            <div className="single_store">
                                                <i className="fa fa-android"></i>
                                                <div className="store_inner">
                                                    <h2>ANDROID</h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 no_padding">
                                        <a href="">
                                            <div className="single_store last">
                                                <i className="fa fa-windows"></i>
                                                <div className="store_inner">
                                                    <h2>WINDOWS</h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>               
                            </div>
                        </div>
                    </section>

                <div id="google-map" className="wow fadeIn" data-latitude="20.5296883" data-longitude="-103.4587419,17z" data-wow-duration="1000ms" data-wow-delay="400ms"  style={{'display':'none'}}></div>

                    <section className="contact page" id="CONTACT">
                        <div className="section_overlay">
                                
                            <div className="container">
                                <div className="col-md-12 col-md-offset-1 wow bounceIn">
                                    <div className="section_title">
                                        <h2>Contact us</h2>
                                        <p>If you wish to request information, advice or if you need us to schedule a visit, please call us, we will enjoy to assit you and learn what you need.</p>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                                        <div className="right_single_feature">
                                                <div><span className="fa fa-phone"></span></div>
                                                <h3><span>/</span>Call us</h3>
                                                <p>Mobile: +1 717 500 1100</p>
                                                <p>Mexico mobile: 55 1333-9558</p>
                                                <p>What's up: +52 1 55 1333-9558</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                                        <div className="right_single_feature">
                                                <div><span className="fa fa-map-marker"></span></div>
                                                <h3><span>/</span>Address</h3>
                                                <p>8th Lancaster St, Alta California, Tlajomulco de Zuñiga, Jalisco, C.P. 45645, Mexico.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                                        <div className="right_single_feature">
                                                <div><span className="fa fa-envelope"></span></div>
                                                <h3><span>/</span>E-mail</h3>
                                                <p><a href="mailto:ricardo.stagle@gmail.com">ricardo.stagle@gmail.com</a></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 wow bounceInLeft">
                                        <div className="social_icons">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="subscribe parallax subscribe-parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
                        <div className="section_overlay wow lightSpeedIn">
                            <div className="container">
                                
                            </div>
                        </div>
                    </section>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Home);