$(document).ready(function(){
    // Content methods

    // Podmiana tekstu na www
    $('p:first').text('Hejka to jest jakis tekst napisany w jQuery');
    // Dodanie/podmiana tekstu oraz elementów w DOM - znaczników
    $('p:first').html('No hej to jest jakis <bold>pogrubiony</bold>tekst');
    // Inny przykład:
    $('p:last').html('<a href="https://www.google.pl/">Link do Google w jQuery</a>');
    // Zbiera wartość np z pola input a później możemy ją wykorzystać...
    $('input').val();
    // Można też ustawić informację:
    $('input').val('Nowa wartosc w input');

    // Lesson-2.html
});
