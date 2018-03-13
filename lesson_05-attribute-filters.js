$(document).ready(function(){
    // wybierz atrybut class o wartości lead
    $('p[class="lead"]').css('border', '3px solid black');
    // wybierz atrybut name o wartości shorty
    $('p[name="shorty"]').css('border', '3px solid black');
    // wybierz atrybut name z wartością zaczynający się na znaki "sho"
    $('p[name^="sho"]').css('border', '3px solid black');
    // wybierz atrybut a z wartością kończącą się na znaki
    $('a[href$=".co.uk"]').css('border', '3px solid black');
});
