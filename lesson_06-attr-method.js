$(document).ready(function(){
    // Attr method

    // attr wywołuje w alercie nazwę klasy
    alert($('p:first').attr('class'));
    // druga wartość ustawia klasę zamiast tej w html
    $('p:first').attr('class', 'not-lead');

    // podmianka obrazka - img swap
    $('img').attr('src', 'img2.jpg');
    // Dodajemy animację która trwa 500ms i w funkcji podmienia obrazek
    $('img').fadeOut(500, function (){
        $(this).attr('src', 'img2.jpg').fadeIn(500);
    });

    // Lesson-2.html

});
