
        /*==================================
* Author        : "-------"
* Template Name :  "-------" | One Page Personal Portfolio HTML Template
* Version       : 1.0
==================================== */


        /*=========== TABLE OF CONTENTS ===========
1. 
2. 
4. 
5. 
6. 
7. 
======================================*/

$(document).ready(function(){
	"use strict";
	


	// =====Portfolio Area=====
	
	$("#bonnybtn1").click(function(){
		$(".home1-pf-all2").slideToggle(1500);
	});
	
	$("#bonnybtn1").click(function(){
		$(this).hide();
	});
	

	// =====Scroll To Top=====
	
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click',function(){
            $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
	
	
	// =====Smooth Scroll=====

    $('a.data-scroll').on("click", function(e) {
        e.preventDefault();
        var anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 1200);
    });


	// =====owl Team area=====
	
	// for home 1 Team
		$("#tm1").owlCarousel({
			items: 3,
			autoplay: false,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:false,
			smartSpeed: 1000,
			responsiveClass:true,
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});	
		
	
	// for home 2 Team		
	
		$("#tm2").owlCarousel({
			items: 3,
			autoplay: true,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			smartSpeed: 1000,
			responsiveClass:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive : {
			0 : {
				items: 1,
			},
			640 : {
				items: 2,
			},
			992 : {
				items: 3,
			}
		}
			
		});	
	
		
	// =====owl Testimonial area=====
	
		// for home 1 Testimonial
		$("#ttmnl").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutLeft'
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		
		// for home 2 Testimonial
		
		$("#ttmn2").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutLeft'
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
	
	// =====wow Animate=====		
		new WOW().init();
		
		
		

		
		
		

		//for counter up	
		$('.counter').counterUp({
			delay: 10,
			time: 2500
		});	

		//rev slider
		
		var tpj=jQuery;
		
		var revapi1078;
		tpj(document).ready(function() {
			if(tpj("#rev_slider_1078_1").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_1078_1");
			}else{
				revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
					sliderType:"standard",
					jsFileLocation:"revolution/js/",
					sliderLayout:"fullscreen",
					dottedOverlay:"none",
					delay:6000,
					navigation: {
						keyboardNavigation:"off",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
						onHoverStop:"off",
						touch:{
							touchenabled:"on",
							swipe_threshold: 75,
							swipe_min_touches: 1,
							swipe_direction: "horizontal",
							drag_block_vertical: false
						}
						,
						arrows: {
							style:"zeus",
							enable:true,
							hide_onmobile:true,
							hide_under:600,
							hide_onleave:true,
							hide_delay:200,
							hide_delay_mobile:1200,
							tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
							left: {
								h_align:"left",
								v_align:"center",
								h_offset:30,
								v_offset:0
							},
							right: {
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
						}
						,
					},
					viewPort: {
						enable:true,
						outof:"pause",
						visible_area:"80%",
						presize:false
					},
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1240,1024,778,480],
					gridheight:[600,600,500,400],
					lazyType:"none",
					parallax: {
						type:"mouse",
						origo:"slidercenter",
						speed:2000,
						levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
						type:"mouse",
					},
					shadow:0,
					spinner:"off",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}
		});	
	
	
	
	
	
});