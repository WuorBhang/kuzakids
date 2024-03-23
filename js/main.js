(function ($) {

    'use strict';

    /*  ======================================
            fixed menu
        ====================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.header-area').addClass('fixed-menu');
        } else {
            $('.header-area').removeClass('fixed-menu');
        }
    });

    /*  ======================================
            Smooth scroll
        ====================================== */
    $('a.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*  ======================================
            bootstrap scrollspy
        ====================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('body').scrollspy({
                target: '.navbar',
                offset: 84
            });
        } else {
            $('body').scrollspy({
                target: '.navbar',
                offset: -1
            });
        }
    });

    /*  ======================================
            banner typed
        ====================================== */
    var mainBannerArea = $('.banner-area');

    mainBannerArea.owlCarousel({
        animateOut: 'slideOutLeft',
        animateIn: 'fadeIn',
        items: 1,
        loop: true,
        dots: true,
        mouseDrag: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i><div class="itemprebg"></div>', '<div class="itemnextbg"></div><i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 7000, // auto play time
        responsive: {
            0: {
                nav: false
            },
            900: {
                nav: true
            }
        }
    });

    var itemBg = $('.itembg');

    $('.banner-area .single-banner').each(function () {
        var itmeImg = $(this).find('.itembg img').attr('src');
        $(this).css({
            background: 'url(' + itmeImg + ')'
        });
    });

    function slideThumb() {

        // Nav

        $('.banner-area .owl-item').removeClass('next prev');

        var currenSlide = $('.banner-area .owl-item.active');
        currenSlide.next('.owl-item').addClass('next');
        currenSlide.prev('.owl-item').addClass('prev');

        var nextSlideImg = $('.owl-item.next').find('.itembg img').attr('src');
        var prevSlideImg = $('.owl-item.prev').find('.itembg img').attr('src');

        $('.banner-area .owl-nav .owl-prev .itemprebg').css({
            background: 'url(' + prevSlideImg + ')'
        });

        $('.banner-area .owl-nav .owl-next .itemnextbg').css({
            background: 'url(' + nextSlideImg + ')'
        });

        // Thumbnail

        var dotcount = 1;

        $('.banner-area .owl-dot').each(function () {
            $(this).addClass('dotnumber' + dotcount);
            $(this).attr('data-info', dotcount);
            dotcount = dotcount + 1;
        });

        var slidecount = 1;

        $('.banner-area .owl-item').not('.cloned').each(function () {
            $(this).addClass('slidenumber' + slidecount);
            slidecount = slidecount + 1;
        });

        $('.banner-area .owl-dot').each(function () {

            var grab = $(this).data('info');
            var slidegrab = $('.slidenumber' + grab + ' .itembg img').attr('src');

            $(this).css("background-image", "url(" + slidegrab + ")");

        });
    }

    slideThumb();

    mainBannerArea.on('translated.owl.carousel', function () {
        slideThumb();
    });

    mainBannerArea.on('translate.owl.carousel', function () {
        $('.single-banner h1').removeClass('fadeInUp animated animated-04s').hide();
        $('.single-banner p').removeClass('fadeInUp animated animated-08s').hide();
        $('.single-banner a').removeClass('fadeInUp animated animated-12s').hide();
    });

    mainBannerArea.on('translated.owl.carousel', function () {
        $('.owl-item.active .single-banner h1').addClass('fadeInUp animated animated-04s').show();
        $('.owl-item.active .single-banner p').addClass('fadeInUp animated animated-08s').show();
        $('.owl-item.active .single-banner a').addClass('fadeInUp animated animated-12s').show();
    });

    /*  ======================================
            barfiller
        ====================================== */
    var progress_bar_one = $('.bar-one');
    var progress_bar_two = $('.bar-two');
    var progress_bar_three = $('.bar-three');
    var progress_bar_four = $('.bar-four');
    var progress_bar_five = $('.bar-five');
    var progress_bar_six = $('.bar-six');
    var progress_bar_seven = $('.bar-seven');

    progress_bar_one.waypoint(function () {
        //progress bar one
        var progressbarOne = $('#bar1');
        progressbarOne.barfiller();
    }, {
        offset: '100%'
    });

    progress_bar_two.waypoint(function () {
        //progress bar two
        var progressbarTwo = $('#bar2');
        progressbarTwo.barfiller();
    }, {
        offset: '100%'
    });

    progress_bar_three.waypoint(function () {
        //progress bar three
        var progressbarThree = $('#bar3');
        progressbarThree.barfiller();
    }, {
        offset: '100%'
    });

    progress_bar_four.waypoint(function () {
        //progress bar four
        var progressbarFour = $('#bar4');
        progressbarFour.barfiller();
    }, {
        offset: '100%'
    });

    progress_bar_five.waypoint(function () {
        //progress bar five
        var progressbarFive = $('#bar5');
        progressbarFive.barfiller();
    }, {
        offset: '100%'
    });

    progress_bar_six.waypoint(function () {
        //progress bar six
        var progressbarSix = $('#bar6');
        progressbarSix.barfiller();
    }, {
        offset: '100%'
    });

    progress_bar_seven.waypoint(function () {
        //progress bar seven
        var progressbarSeven = $('#bar7');
        progressbarSeven.barfiller();
    }, {
        offset: '100%'
    });

/*  ======================================
        google map
    ====================================== */

    if ($('#map').length > 0){
        var myCenter = new google.maps.LatLng(3.7091, 34.8625);
        function initialize() {
            // Create an array of styles.
            var mapStyles = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }];
            var mapProp = {
                zoom: 12,
                center: myCenter,
                disableDefaultUI: true,
                scrollwheel: false,
                styles: mapStyles,
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapProp);            
            // Marker js
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng(3.7091, 34.8625),
                map : map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    /*  ======================================
            scroll up
        ====================================== */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*  ======================================
            wmBox for popup video
        ====================================== */
    $.wmBox();

    $(window).on('load', function () {
    /*  ======================================
            preloader
        ====================================== */
        $('.preloader').fadeOut('500');

        /*  ======================================
                isotope
            ====================================== */
        // init Isotope
        var isotope_content = $('.iso-content');
        isotope_content.isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            $('.iso-nav ul li').removeClass('gallery-active');
            $(this).addClass('gallery-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });
    });

}(jQuery));
