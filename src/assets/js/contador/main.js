(function($){

    "use strict";
    /* Inicializar contador */
    $('.contar').counterUp({
        time: 1000,
        delay: 10
    });

    /* Código para rolar a página até a seção clicada */
    var $doc = $('html,body');
    $('.scroll-page').click(function(){
        $doc.animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },500);
        return false;
    });

})(jQuery);