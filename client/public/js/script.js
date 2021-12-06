
//window.$ = window.jQuery = require('jquery')

//LOADER/SPINNER
$(window).bind("load", function() {

    "use strict";
    
    $(".spn_hol").fadeOut(1000);
    console.log('jquery 1');
});


        //MENU APPEAR AND HIDE
        $(document).ready(function() {

            "use strict";
            
            $(window).scroll(function() {

                "use strict";
                
                if ($(window).scrollTop() > 80) {
                    $("#navbar-component").css({
                        'margin-top': '0',
                        'top': '0',
                        'opacity': '1',
                        'position': 'fixed',
                        'width': '100%'
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
                        'background-color': '#1a1d22','opacity':'.95'
                    });
                } else {
                    $("#navbar-component").css({
                        'margin-top': '-100px',
                        'opacity': '0'
                    })
                    $(".navbar-nav>li>a").css({
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
            });
        });




 // MENU SECTION ACTIVE
$(document).ready(function() {

    "use strict";
    
    $(".navbar-nav li a").click(function() {

        "use strict";
        
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});



// Hilight MENU on SCROLl

$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        $(".page").each(function() {

            "use strict";
            
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});



//SMOOTH MENU SCROOL


$(function() {
	
	"use strict";

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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



// FIX HOME SCREEN HEIGHT
$(document).ready(function() {

    "use strict";
    
    setInterval(function() {

        "use strict";
        
        var widnowHeight = $(window).height();
        var containerHeight = $(".home-container").height();
        var padTop = widnowHeight - containerHeight;
        $(".home-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});



//PARALLAX
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";
        $('.home-parallax').parallax("30%", 0.1);
        $('.subscribe-parallax').parallax("30%", 0.1);
        $('.testimonial').parallax("10%", 1);
        /*add as necessary*/
    }
});



//OWL CAROSEL
$(document).ready(function() {

    "use strict";
    
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1370, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
    });
});


    
 //PRETTYPHOTO

$(document).ready(function() {

    "use strict";

    $("a[rel^='prettyPhoto']").prettyPhoto({
        show_title: false,
        /* true/false */
    });
});



//WOW JS
$(document).ready(function() {

    "use strict";
 
    new WOW().init();
});



//RESPONSIVE VIDEO
$(document).ready(function() {

    "use strict";
    
    // Basic FitVids Test
    $(".video").fitVids();
});



//MAILCHIMP
$(document).ready(function() {

    "use strict";
    
    $('#mc-form').ajaxChimp({
        callback: mailchimpCallback,
        url: "https://themerocks.us9.list-manage.com/subscribe/post?u=f04c804868966b1b4509daa9b&amp;id=ad7b6aba65"
    });

    function mailchimpCallback(resp) {

        "use strict";
        
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="pe-7s-check"></i><br/>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);
        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="pe-7s-close-circle"></i><br/>' + resp.msg).fadeIn(1000);
        }
    }
});



//CONTACT FORM VALIDATION
$(document).ready(function() {

    "use strict";
    
    $(".form_submit").click(function() {

        "use strict";
        
        var name = $("#name").val();
        var emaild = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var dataString = 'name='+ name + '&email=' + emaild + '&subject=' + subject + '&message=' + message;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!name) {
            $(".form_error .name_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .name_error").addClass("hide").removeClass("show");
        }
        if (!emaild) {
            $(".form_error .email_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .email_error").addClass("hide").removeClass("show");
            if (testEmail.test(emaild)) {
                $(".form_error .email_val_error").addClass("hide").removeClass("show");
            } else {
                $(".form_error .email_val_error").addClass("show").removeClass("hide");
                return false;
            }
        }
        if (!message) {
            $(".form_error .message_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .message_error").addClass("hide").removeClass("show");
        }
        if (name && emaild && message) {
            $.ajax({
                url: 'mailer.php',
                data: dataString,
                type: 'POST'
            }).done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                //$(formMessages).removeClass('error');
                //$(formMessages).addClass('success');
                $(".form_error .name_error, .form_error .email_error, .form_error .email_val_error, .form_error .message_error").addClass("hide").removeClass("show");

                // Set the message text.
                $(".Sucess").html("<i class='fa fa-check'></i> Estimado cliente <b>" + name + "</b> De antemano te agradecemos tu contacto, en breve te contestaremos tan pronto como sea posible.<br>"+response);
                //$(".Sucess").html("<i class='fa fa-check'></i> Estimado cliente <b>" + name + "</b> De antemano te agradecemos tu contacto, en breve te contestaremos tan pronto como sea posible.");

                // Clear the form.
                $("#Name").val("");
                $("#Email").val("");
                $("#Subject").val("");
                $("#Message").val("");
                $("#name").val("");
                $("#email").val("");
                $("#subject").val("");
                $("#message").val("");
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                /*$(formMessages).removeClass('success');
                $(formMessages).addClass('error');*/
                //$(".form_error .name_error, .form_error .email_error, .form_error .email_val_error, .form_error .message_error").addClass("hide").removeClass("show");

                // Set the message text.
                if (data.responseText !== '') {
                    $('.form_error').text(data.responseText);
                } else {
                    $('.form_error').text('<div class="envio_error hide error">Un error ha ocurrido durante el envio.</div>');
                }
            });
        }
        return false;
    });
});


 
/// SMOOTH SCROLL           

$(document).ready(function() {

    "use strict";
    
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });
    //COUNTER
    $('.counter_num').counterUp({
        delay: 10,
        time: 2000
    });
});






//VIDEO BACKGROUND
$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('body'), {
    "align": "centerXY",
    "width": 1280,
    "height": 720,
    "path": "media/",
    "filename": "cloud",
    "types": ["mp4","ogg","webm"]
  });
});





//Google Map
    var latitude = $('#google-map').data('latitude')
    var longitude = $('#google-map').data('longitude')
    function initialize_map() {
        var myLatlng = new google.maps.LatLng(latitude,longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var contentString = '';
        var infowindow = new google.maps.InfoWindow({
            content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_map);



