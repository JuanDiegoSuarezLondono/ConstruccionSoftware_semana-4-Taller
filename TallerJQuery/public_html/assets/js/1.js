/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {


    $('#aleatoria').click(function () {
         var aleatorio=Math.floor(Math.random()*5)+1;
        $(this).attr('src', "assets/img/"+aleatorio+".jpg");
        return false;
    });
    
    $( "img" ).click(function() {
        $(this ).animate({
          opacity: 0.25,
          left: "+=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
    });
    
    
    $( "img" ).hover(function() {
        $(this).rotate({
          angle:80, 
          animateTo:0,
        }, function() {
          // Animation complete.
        });
    });
    
    $( "img" ).mouseover(function() {
        $(this).rotate({
          angle:0, 
          animateTo:80,
        }, function() {
        });
    });
    
    $( '#aleatoria' ).mouseout(function() {
        $('#aleatoria').rotate({
          angle:80, 
          animateTo:0,
        }, function() {
        });
    });
    
    
    
    $( '#stars' ).click(function() {
        $("#aleatoria").animate({
          opacity: 1,
          left: "-=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
    });
    
    $( '#blackSnow' ).click(function() {
        $(".imagenDos").animate({
          opacity: 1,
          left: "-=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
    });


    
    $(function () {
        $('#aleatoria').width(465);
        $('p').css("fontSize", 12);
        $('.imagenDos').width(370);
        $('.articulo').height(320);
        $('#art1').width(930);
        $('#art2').width(900);        
        $('h1').css('float','left').css('font-family','Convergence').css('border-left','solid blue','3px');
        $('h3').css('float','left').css('font-family','Permanent Marker').css('border-right','solid white','3px').css('marginTop','100px').css('marginLeft','500px');
        $('.parallax').css('font-family','Convergence');        
    });   

})