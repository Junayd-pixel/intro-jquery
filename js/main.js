$(function() {
    var $list;
    $list = $('ul');
    $list.on('click', 'li', function() {
        var $this = $(this);
        $this.slideUp(650);

    });

});


$(document).ready(function(){
    //Lors d'un clic sur l'img...
    $("img").click(function(){
        //...On inverse les classes de li
        $("li").toggleClass("afficher cacher");
        //Les éléments avec .afficher seront visibles
        $(".afficher1,.afficher2,.afficher3").show();
        //Les éléments avec .cacher seront cachés
        $(".cacher").hide();
    });
});
