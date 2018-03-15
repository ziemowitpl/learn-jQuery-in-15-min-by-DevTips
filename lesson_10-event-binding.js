$(document).ready(function(){
    // Wiązanie zdarzeń

    // Po kliknięciu zmienia klasę na 'blue'
    $('h2').bind('click', function(){
        $(this).toggleClass('blue');
    });
    // Inny sposób zapisu tej samej funkcji
    $('h2').click(function(){
        $(this).toggleClass('blue');
    });
    // Zdarzenie hover
    $('h2').hover(function(){
        $(this).toggleClass('blue');
    });
    // Po wciśnięciu klawisza
    $('html').keypress(function(){
        $(this).toggleClass('blue');
    });
});
