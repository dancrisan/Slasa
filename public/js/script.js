

$(document).ready(function(){

	$('body').vegas({

    slides: [
        { src: "files/img/1_1.png" },
        { src: "files/img/1_2.png" },
        { src: "files/img/1_3.png" },
        { src: "files/img/1_4.png" },
        { src: "files/img/1_5.png" },
        { src: "files/img/1_6.png" },
        { src: "files/img/1_7.png" },
        { src: "files/img/1_8.png" },
        { src: "files/img/1_9.png" },

    ],
    overlay: 'files/overlay/06.png',
    transition: 'slideLeft',
    timer: false,
    delay: 7000,
	});


	callbackwidth();

	new WOW().init();

	

	$(window).on('resize',callbackwidth);


	$(function() {
	    $('.nav a').on('click', function(){ 
	        if($('.navbar-toggle').css('display') !='none'){
	            $(".navbar-toggle").trigger( "click" );
	        }
	    });
	});
    
	$('a[href*=#top]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#about]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#activities]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#team]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#member]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#food]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});
	$('a[href*=#email]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: (target.offset().top-40)
	            }, 1000);
	            return false;
	        }
	    }
	});

	function callbackwidth() {

		// nav stuff

		if ($(window).width() > 1000){
	        fadenumber = 800;
	    }
	    else if ($(window).width() > 800){
	       fadenumber = 500;
	    }
	    else {
	        fadenumber = 320;
	    }

	    // font stuff


	}

	changeOpacityRate();

	$(document).on('scroll', changeOpacityRate);


	function changeOpacityRate() {

		var logo_hide = 1-($(document).scrollTop() /(0.5*fadenumber));

	    $('.navbar').css('opacity', ($(document).scrollTop() / fadenumber));
	    $('.logo')  .css('opacity', (logo_hide));

	    if (logo_hide < 0) {
	    	$('.logo').hide();
	    };
	    if (logo_hide > 0) {
	    	$('.logo').show();
	    };
	};

	$('.act')
		.on('mouseover', function(){
			$(this).css({'border-radius':'0px'});
			$(this).children('.act_opt').css({'transform':'translateY(-150px)'})
		})
		.on('mouseleave', function(){
			$(this).css({'border-radius':'75px'});
			$(this).children('.act_opt').css({'transform':'translateY(0px)'})
		})

	$('#babes')
		.on('click', function(){
			$('#hover_show').css({'transform':'translateY(630px)','opacity':'0'});
			$('#babes_show').css({'transform':'translateY(-630px)','opacity':'1'});
			$('#parties_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#cocktail_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#summit_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#bike_show').css({'transform':'translateY(0px)','opacity':'0'});
		})
	$('#parties')
		.on('click', function(){
			$('#hover_show').css({'transform':'translateY(630px)','opacity':'0'});
			$('#babes_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#parties_show').css({'transform':'translateY(-630px)','opacity':'1'});
			$('#cocktail_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#summit_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#bike_show').css({'transform':'translateY(0px)','opacity':'0'});
		})
	$('#cocktail')
		.on('click', function(){
			$('#hover_show').css({'transform':'translateY(630px)','opacity':'0'});
			$('#babes_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#parties_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#cocktail_show').css({'transform':'translateY(-630px)','opacity':'1'});
			$('#summit_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#bike_show').css({'transform':'translateY(0px)','opacity':'0'});
		})
	$('#summit')
		.on('click', function(){
			$('#hover_show').css({'transform':'translateY(630px)','opacity':'0'});
			$('#babes_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#parties_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#cocktail_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#summit_show').css({'transform':'translateY(-630px)','opacity':'1'});
			$('#bike_show').css({'transform':'translateY(0px)','opacity':'0'});
		})
	$('#bike')
		.on('click', function(){
			$('#hover_show').css({'transform':'translateY(630px)','opacity':'0'});
			$('#babes_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#parties_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#cocktail_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#summit_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#bike_show').css({'transform':'translateY(-630px)','opacity':'1'});
		})

	$('.activities')
		.on('mouseleave', function(){
			$('#hover_show').css({'transform':'translateY(0px)','opacity':'1'});
			$('#babes_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#parties_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#cocktail_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#summit_show').css({'transform':'translateY(0px)','opacity':'0'});
			$('#bike_show').css({'transform':'translateY(0px)','opacity':'0'});
		})



	$(".act-img-owl").owlCarousel({
 
      autoPlay: 4000, //Set AutoPlay to 3 seconds
 
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [800,1],
      itemsTablet: [600,1],
      itemsMobile : [500,1],
 
  	});



	$('.img')
		.on('mouseover', function() {
			$(this).children('.img_des')
				.css({'transform':'translateY(-170px)','opacity':'0.9'})
		})
	  	.on('mouseleave', function() {
	    	$(this).children('.img_des')
	    		.css({'transform':'translateY(0px)','opacity':'1'});
	  	})




})
