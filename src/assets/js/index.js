/*global $, jquery, console, alert*/
$(document).ready(function () {
    "use strict";
    // Change Color Links
    $('nav .navbar-nav .nav-item').on('click', function (e) {
        //e.preventDefault();
        $(this).addClass('alert-danger').siblings().removeClass('active');
    });
    // Adjust Height Slider
    $('#mySlider .carousel-item').height($(window).height());
    $(window).resize(function () {
        $('#mySlider .carousel-item').height($(window).height());
    });


    // Trigger Carousel
    $('.carousel').carousel({
        interval: 20000,
        pause : 'hover'
    });

    // Feature Header
    $('.feature .row .box .media .media-body h5').on('mouseenter', function () {
        $(this).parent().parent().siblings().children().css({
            backgroundColor: '#f2545f',
            borderColor: '#f2545f',
            color: '#FFF'
        });
    });

    $('.feature .row .box .media .media-body h5').on('mouseleave', function () {
        $(this).parent().parent().siblings().children().css({
            backgroundColor: '#F9F9F9',
            borderColor: '#F9F9F9',
            color: '#f2545f'
        });
    });

    // Smooth Scrolling

    $('.scroller .navigate').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data('target')).offset().top
        }, 1500);
    });


     /*$('nav .navbar-nav .nav-item .home').on('click', function () {
       $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });*/

    /*$('nav .navbar-nav .nav-item .nav-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data('target')).offset().top
        }, 1500);
    });*/

    // Go To Top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= ($('.about').offset().top) - 350) {
            $('.top .fa').fadeIn();
        } else {
            $('.top .fa').fadeOut();
        }
    });

    $('.top .fa').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // loading
    $(window).on('load', function () {
        $('.loading').hide(500, function () {
            $('.loading').remove();
        });
    });

    // Nice Scroll
    $('body').niceScroll({
        cursorcolor: '#f2545f',
        cursorwidth: "8px",
        cursorborder: "1px solid #f2545f"
    });

    // Control form login
    $('#log-in').on('submit',function(e){
         //function aff(){ $('.modale').css('display','flex'); }
          e.preventDefault();
          //var data = $(".myform : input")
          $.post($("#log-in").attr("action"), $("#log-in :input ").serializeArray(), function(info){
            $('#log-in').addClass('not-print');
            //$('.modale').delay(2000).queue(function(n){$(this).show();});
            $('#resultat').addClass('alert alert-danger noRadius')
            $('#resultat').css('visibility','visible');
           // $('.modal').hide();
            $("#resultat").html(info);
          });
          });
          $("#log-in").submit(function(){
            return false;
             });
        //control Headerlogin
            $('#Headerlogin').on('submit',function(el){
         //function aff(){ $('.modale').css('display','flex'); }
          el.preventDefault();
          //var data = $(".myform : input")
          $.post($("#Headerlogin").attr("action"), $("#Headerlogin :input ").serializeArray(), function(info){
            $('#Headerlogin').addClass('not-print');
            //$('.modale').delay(2000).queue(function(n){$(this).show();}); 
            $('#resul').addClass('alert alert-danger noRadius posError')
            $('#resul').css('visibility','visible');
           // $('.modal').hide();
            $("#resul").html(info);
          });
          });
          $("#Headerlogin").submit(function(){
            return false;
             });
// fin Headerlogin

    $('#sign-up').on('submit',function(es){
         //function aff(){ $('.modale').css('display','flex'); }
          es.preventDefault();
          //var data = $(".myform : input")
          $.post($("#sign-up").attr("action"), $("#sign-up :input ").serializeArray(), function(info){
            $('#sign-up').addClass('not-print');
            //$('.modale').delay(2000).queue(function(n){$(this).show();});
            $('#resultat1').css('visibility','visible');
            $('#resultat1').addClass('alert alert-warning');
           // $('.modal').hide();
            $("#resultat1").html(info);
          });
          });
          $("#sign-up").submit(function(){
            return false;
             });







    // Trigger WOW
    new WOW().init();

});






function verification_chiffre(champb){
        var chiffresb = new RegExp("[0-9]");
        var verifb;
        for(x = 0; x < champb.value.length; x++){
        verifb = chiffresb.test(champb.value.charAt(x));
       if(verifb == false){
        champb.value = champb.value.substr(0,x) + champb.value.substr(x+1,champb.value.length-x+1);   
        x--;
        }
    }
}


