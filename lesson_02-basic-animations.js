$(document).ready(function(){
    // pierwszy z klasy box, ukryj się po 500ms
    $('.box:first').hide(500);
    // ukryj sie i później pokaż się po 800ms
    $('.box:first').hide(500).show(800);
    // ukryj się, przerwa/opóźnienie 300ms i pokaż się
    $('.box:first').hide(500).delay(300).show(800);
    // Schowaj/skurcz się 500ms i znów się pokaż
    $('.box:first').slideUp(500).show(800);
    // skucz się i Rozkurcz się/Rozwiń
    $('.box:first').slideUp(500).slideDown(800);
    // Zaniknij i rozwiń się
    $('.box:first').fadeOut(500).slideDown(800);

    // Teraz metody animacji:

    // Urośnij na wysokość 200px przez 300ms
    $('.box:first').animate({
        height: '200px'
    }, 300); //Czas trwania
    // przesuń od dołu w górę obiekt
    $('.box:first').animate({
        bottom: '200px'
    }, 300); //Czas trwania
    // Dodawanie kolejnej zmiennej + przesuń od lewej
    $('.box:first').animate({
        bottom: '200px',
        left: '300px'
    }, 300); //Czas trwania

});
