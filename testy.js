$(document).ready(function(){
    $('img').fadeOut(500, function (){
        $(this).attr('src', 'img2.jpg').fadeIn(500);
    });

    $('p:first').html('No hej to jest jakis <strong>pogrubiony</strong> tekst');

    $('p:last').html('<a href="https://www.google.pl/">Link do Google w jQuery</a>');

    $('input').val('Nowa wartosc w input');

});
