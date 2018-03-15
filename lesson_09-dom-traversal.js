$(document).ready(function(){

    // Przemierzanie DOM
    // Dzieci elementu h2
    $('h2').children().css('border', '4px solid red');
    // Rodzice elementu h2
    $('h2').parents().css('border', '4px solid red');
    // Rodzice elementu h2 z limitem, chcemy aby zatrzymał się na sekcji
    $('h2').parents('section').css('border', '4px solid red');
    // Bracia elementu h2/rodzeństwo
    $('h2').siblings().css('border', '4px solid red');
    // Ostatni brat elementu h2
    $('h2').siblings().last().css('border', '4px solid red');
    // Pierwszy brat elementu h2
    $('h2').siblings().first().css('border', '4px solid red');
    // Rodzice h2 z limitem do sekcji i następnie bracia z limitem do header
    // Zaznaczony header
    $('h2').parents('section').siblings('header').css('border', '4px solid red');
    // Rodzic h2/limi 'section' a bracia/limit hedaer a następnie dzeci 'header'
    $('h2').parents('section').siblings('header').children().css('border', '4px solid red');


    // Lesson-2.html
});
