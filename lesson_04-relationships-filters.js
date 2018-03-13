$(document).ready(function(){
    // filtry współzależności w DOM elementów

    // wybierz takie elementy h2 które mają w sobie lement span
    $('h2:has(span)').css('border', '4px solid red');
    // wybierz takie elementy z klasą .box które są rodzicami, mają dzieci
    $('.box:parent').css('border', '4px solid black');
    // wybierz takie elementy z klasą .box które są puste w środku nie mają potomków
    $('.box:empty').css('border', '4px solid green');


});
