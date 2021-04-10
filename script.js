


$(document).ready(function () {
    $('.sidenav').sidenav();





    // var instance = M.Carousel.init({
    //     fullWidth: true
    // });

    // Or with jQuery

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });


    $('.fixed-action-btn').floatingActionButton();

    $('.materialboxed').materialbox();
    $('input#mobile').characterCounter();
    $('.modal').modal();



    $('.datepicker').datepicker();
});

