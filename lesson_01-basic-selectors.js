$(document).ready(function(){
    //paragraf - zostaną zmienione, dodane obramowanie
    $('p').css('border', '4px solid red');
    // paragraf z klasą
    $('p.lead').css('border', '4px solid green');
    // dziecko
    $('body p.lead').css('border', '4px solid blue');
    // id
    $('#lesson-1').css('border', '4px solid yellow');
    // wszystko
    $('*').css('border', '4px solid black');
});
