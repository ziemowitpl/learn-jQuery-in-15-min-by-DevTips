$(document).ready(function(){
    // Class Methods
    // Służą do manipulacji struktóry a co za tym idzie wyglądu www

    // Czy masz klasę "lead"?
    alert($('p:last')hasClass('lead'));
    // Dodanie klasy do paragrafu albo innego elementu
    $('p:first').addClass('blue');
    // Dodanie klasy "blue" a odjęcie klasy "lead"
    $('p:first').addClass('blue').removeClass('lead');
    // toggle - jeśli jest to zrób aby nie było i na odwrót
    $('p').toggleClass('blue').removeClass('lead');

    // Lesson-2.html
});
