
// Freccia Destra
var rightArrow = $('.right-arrow');

$(rightArrow).click(function(){
    var currentActive = $('.active');
    currentActive.removeClass('active');

    if ( currentActive.hasClass('last') ) {
        //Riparto dalla prima immagine
        $('.images .first').addClass('active');
    } else {
        //seleziono il fratello successivo
        var nextImg = currentActive.next();
        console.log(nextImg);

        //aggiungo la classe active al successivo
        nextImg.addClass('active');
    }

});



// Freccia Sinistra
var leftArrow = $('.left-arrow');

$(leftArrow).click(function(){

    alert("accesso alla funzione");
});
