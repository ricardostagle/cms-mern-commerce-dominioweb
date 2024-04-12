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
                <section id="HOME" onLoad={this.randomNumber.bind(this)} class={"header parallax home-parallax page fun_facts bg"+this.state.random}>
                    <AppNavbar/>
                    <div class="container home-container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="logo text-center">
                                    <img src="/imgs/logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="home_text">
                                    <h1>Web design and development in your hands</h1>
                                    <p>CREATIVITY IN DIGITAL DEVELOPMENT</p>
                                    <div class="download-btn">
                                        <a class="btn home-btn wow fadeInLeft" href="#ABOUT">Meet us</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="home-iphone">
                                    <img src="/imgs/portada.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                    <section class="about page" id="ABOUT">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section_title">
                                        <h2>CREATIVITY IN DIGITAL DEVELOPMENT</h2>
                                    </div>
                                    <div class="video_title">
                                        <p>DOMINIOWEB is a young company, leader in the area of design and development services. The company has extensive experience in technologies to assist in the development of a wide variety of applications that meet the specific needs of start-ups, and medium-sized and large established companies.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="video_title">
                                        <p>In DOMINIOWEB we are guided by innovative thinking. The most powerful characteristic of man is innovative thinking, which allows an organization like ours to overcome expectations, to be above routine, expected and habitual, reaching innovative solutions that add value to our products and services while we strengthen our customers by differentiating them from the rest of the market.</p>
                                        <p>We make your site work much better, we can improve the potential of your business. Our team can give you the brightness you need in design and development. We respect deadlines, understand budgets and guarantee everything we develop.</p>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                        <div class="about_phone wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img class="illustration" src="/imgs/tecnologias.png" alt="" />
                                        </div>
                                </div>

                                 <div class="col-md-12">
                                    <div class="video_title">
                                        <p>In addition to web design and development, DOMINIOWEB also has Social Media Marketing, Search Engine Marketing, Search Engine Optimization, hosting, domain registration, e-commerce solutions, content management systems, Flash, html5, to name a few of our services . The goal of DOMINIOWEB is to provide an innovative experience in design and development using our industry knowledge, our experience, the wealth of dynamic ideas and cutting-edge technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="inner_about_area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div class="inner_about_desc">
                                            <div class="single_about_area fadeInUp wow" data-wow-duration=".5s" data-wow-delay="1s">
                                                <div><i class="pe-7s-target"></i></div>
                                                <h3>Mission</h3>
                                                <p>Being a company specialized in the development of information technologies and products related to technological development that, for its quality in services, treatment and advice, is the preferred of both professional and amateur clients.</p>
                                            </div>
                                            <div class="single_about_area fadeInUp wow" data-wow-duration=".5s" data-wow-delay="1.5s">
                                                <div><i class="pe-7s-look"></i></div>
                                                <h3>Vision</h3>
                                                <p>Consolidate as leaders in the market of technology providers serving all levels of customers and helping to have a competitive and innovative Mexico.</p>
                                            </div>
                                            <div class="single_about_area fadeInUp wow" data-wow-duration=".5s" data-wow-delay="1.5s">
                                                <div><i class="pe-7s-diamond"></i></div>
                                                <h3>Values</h3>
                                                <p>First of all develop a high quality work, which is recommended only to our customers, differentiating ourselves from the competition. As well as guarantee the commitments of scope and time acquired.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="about_phone wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                            <img class="illustration" src="/imgs/valores.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <section  id="FONDO2" class={"parallax fun_facts bg"+this.state.random}>
                        <div class="section_overlay">
                            
                        </div>
                    </section>


                        <div class="video_area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 wow fadeInLeftBig">
                                        <div class="video_title">
                                            <h2>Quality is the key</h2>
                                            <p>In DOMINIOWEB each project undertaken implies seven steps for its development. These are the definition, analysis, design, development, implementation and support, taking care that in each of these levels the most important factor is Quality Control (CC).</p>
                                            <p>The strength of DOMINIOWEB is the focus in the quality process that also ensures the development of the most demanding requirements of the clients helping us to document them in a clear and coherent way. The continuous improvement of our Quality Management System (QMS) perfectly integrates multiple quality approaches, which result in tangible benefits for our customers.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 wow fadeInRightBig">
                                        <div class="video">
                                            <img class="illustration" src="/imgs/construccion-calidad.png" alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="FEATURES" class="features page">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-md-offset-1">
                                    <div class="section_title wow fadeIn" data-wow-duration="1s">
                                        <h2>Our services</h2>
                                        <p>Learn about the services that DOMINIOWEB offers you. We can assure you that your site, platform or development can not be in better hands than in those of our experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="feature_inner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 left_no_padding wow fadeInRight" data-wow-duration="1s">

                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-like"></span></div>
                                            <h3><span>/</span>Creative design</h3>
                                            <p>Project your brand is the main commitment that DOMINO WEB is assumed. We develop your concept and put the experience that the company has for your business to be successful.</p>
                                        </div>

                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-display1"></span></div>
                                            <h3><span>/</span>Digital marketing</h3>
                                            <p>We develop marketing strategies for digital media such as Social Networks (Twitter, Facebook, etc.), Adwords and others, for a wide dissemination of your services.</p>
                                        </div>
                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-browser"></span></div>
                                            <h3><span>/</span>Web design</h3>
                                            <p>We design attractive and innovative visual solutions. We invite you to be quiet knowing that you have a web design that guarantees the impact you will have for your site.</p>
                                        </div>
                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-graph1"></span></div>
                                            <h3><span>/</span>Analytics</h3>
                                            <p>We measure the performance of your portal and provide you with the visibility of the appropriate decisions to ensure that your investment in digital media is well spent obtaining the benefits you need.</p>
                                        </div>

                                    </div>
                                    

                                    <div class="col-md-6 left_no_padding wow fadeInRight" data-wow-duration="1s">

                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-monitor"></span></div>
                                            <h3><span>/</span>Applications development</h3>
                                            <p>We have solutions in web applications using opensources platforms and cutting-edge technologies. We offer the best IT services, custom applications and solutions to satisfy our clients.</p>
                                        </div>
                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-anchor"></span></div>
                                            <h3><span>/</span>Incredible maintenance and support</h3>
                                            <p>Our solutions have our support until you see them implemented and giving you results. You can also count on our support the time you indicate us through our support service.</p>
                                        </div>
                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-gleam"></span></div>
                                            <h3><span>/</span>Custom development</h3>
                                            <p>We provide custom software development services. We focus on the development of quality software that emphasizes the satisfaction of our clients' specific business needs. We create efficient solutions, maintaining the development of high quality software and constantly seek to exceed the expectations of customers.</p>
                                        </div>
                                        <div class="right_single_feature">
                                            <div><span class="pe-7s-study"></span></div>
                                            <h3><span>/</span>E-learning</h3>
                                            <p>We generate comprehensive solutions and easily measurable online learning products. We are a company specialized in the design, implementation and administration of online solutions to help you achieve the learning objectives for each of the educational programs required by your company.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>

                    <section  id="FONDO3" class={"parallax fun_facts bg"+this.state.random}>
                        <div class="section_overlay">
                            
                        </div>
                    </section>

                    <section class="download page" id="DOWNLOAD">
                        
                        <div class="available_store">
                            <div class="container  wow bounceInRight" data-wow-duration="1s">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="available_title">
                                            <h2>We develop on the platform that you need</h2>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-2 no_padding">
                                            <a href="">
                                                <div class="single_store">
                                                    <i class="fa fa-apple"></i>
                                                    <div class="store_inner">
                                                        <h2>iOS</h2>
                                                    </div>
                                                </div>
                                            </a>
                                    </div>
                                    <div class="col-md-2 no_padding">
                                        <a href="">
                                            <div class="single_store">
                                                <i class="fa fa-android"></i>
                                                <div class="store_inner">
                                                    <h2>ANDROID</h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-2 no_padding">
                                        <a href="">
                                            <div class="single_store last">
                                                <i class="fa fa-windows"></i>
                                                <div class="store_inner">
                                                    <h2>WINDOWS</h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>               
                            </div>
                        </div>
                    </section>

                <div id="google-map" class="wow fadeIn" data-latitude="20.5296883" data-longitude="-103.4587419,17z" data-wow-duration="1000ms" data-wow-delay="400ms"  style={{'display':'none'}}></div>

                    <section class="contact page" id="CONTACT">
                        <div class="section_overlay">
                                
                            <div class="container">
                                <div class="col-md-12 col-md-offset-1 wow bounceIn">
                                    <div class="section_title">
                                        <h2>Contact us</h2>
                                        <p>If you wish to request information, advice or if you need us to schedule a visit, please call us, we will enjoy to assit you and learn what you need.</p>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                                        <div class="right_single_feature">
                                                <div><span class="fa fa-phone"></span></div>
                                                <h3><span>/</span>Call us</h3>
                                                <p>Mobile: +1 717 500 1100</p>
                                                <p>Mexico mobile: 55 1333 9558</p>
                                                <p>WhatsApp: +52 55 1333 9558</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                                        <div class="right_single_feature">
                                                <div><span class="fa fa-map-marker"></span></div>
                                                <h3><span>/</span>Adress</h3>
                                                <p>8th Lancaster St, Alta California, Tlajomulco de Zuñiga, Jalisco, C.P. 45645, Mexico.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                                        <div class="right_single_feature">
                                                <div><span class="fa fa-envelope"></span></div>
                                                <h3><span>/</span>E-mail</h3>
                                                <p><a href="mailto:ricardo.stagle@gmail.com">ricardo.stagle@gmail.com</a></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 wow bounceInLeft">
                                        <div class="social_icons">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="subscribe parallax subscribe-parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
                        <div class="section_overlay wow lightSpeedIn">
                            <div class="container">
                                
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