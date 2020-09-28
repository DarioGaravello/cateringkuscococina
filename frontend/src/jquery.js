import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import _ from 'lodash';

$(document).ready(function () {
    $(window).on('load',() =>{
        $('loading-page').fadeOut('slow');
    })
    
    $(window).resize(() => {
        if (window.innerWidth <= 990) {
            $('nav').removeClass('bg-none')
            $('nav').addClass('bg-primary')
            $('nav').removeClass('sticky-top')
        }
    })

    if (window.innerWidth <= 990) {
        $('#nav').removeClass('bg-none')
        $('#nav').addClass('bg-primary')
        $('#nav').removeClass('sticky-top')
    }

    if (window.pageYOffset <= 300) {
        $('#header').removeClass('header-container');
        $('#header').addClass('header-container-on');
    }
    $(window).scroll(() => {
        if (window.pageYOffset <= 300) {
            $('#header').removeClass('header-container');
            $('#header').addClass('header-container-on');
        } else {
            $('#header').removeClass('header-container-on');
            $('#header').addClass('header-container');
        }

        const scrollCanvas = $(window).scrollTop();

        if (scrollCanvas >= 280) {
            //SERVICE
            $('.title-budget').removeClass('title-budget');
            $('.box-budget h1').addClass('title-budget-on');
            $('canvas').removeClass('line-canvas');
            $('canvas').addClass('line-canvas-two');
            $('#text-service').removeClass('text-service');
            $('#text-service').addClass('text-service-on');

            //HOME
            $('#one').removeClass('welcome-one');
            $('#one').addClass('welcome-one-on');
        } else {
            //SERVICE
            $('canvas').removeClass('line-canvas-two');
            $('canvas').addClass('line-canvas');
            $('.title-budget-on').removeClass('title-budget-on');
            $('.box-budget h1').addClass('title-budget');
            $('#text-service').removeClass('text-service-on');
            $('#text-service').addClass('text-service');

            //HOME
            $('#one').removeClass('welcome-one-on');
            $('#one').addClass('welcome-one');
        }

        //HOME
        if (scrollCanvas >= 400) {
            $('#two').removeClass('welcome-two');
            $('#two').addClass('welcome-two-on');
        } else {
            $('#two').removeClass('welcome-two-on');
            $('#two').addClass('welcome-two');
        }

        //HOME
        if (scrollCanvas >= 540) {
            $('#three').removeClass('welcome-three');
            $('#three').addClass('welcome-three-on');
        } else {
            $('#three').removeClass('welcome-three-on');
            $('#three').addClass('welcome-three');
        }
    })
    $('#gallery').click(() => {
        window.scrollTo(0, 0)
    })
    $('#about').click(() => {
        window.scrollTo(0, 0)
    })
    $('a').click(() => {
        window.scrollTo(0, 0)
    })
});