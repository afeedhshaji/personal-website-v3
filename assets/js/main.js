$(document).ready(function () {

    //Preloader
    $(window).on("load", function () {
        preloaderFadeOutTime = 200;
        setTimeout(() => {
            var preloader = $('.preloader');
            preloader.fadeOut(preloaderFadeOutTime);
        }, 4000);
    });

    /* Baffle JS */

    setTimeout(() => {
        const text = baffle(".main-heading");
        text.set({
            characters: 'Afeedh Shaji',
            speed: 95
        });
        text.start();
        text.reveal(70000);
    }, 3200);

    setTimeout(() => {
        /* Typed JS */
        var typed = new Typed('#typed', {
            strings: ["Developer.^1000 ", "ML/DL Enthusiast.^1000 ", "Programmer.^1000 ", "Designer.^1000 "],
            stringsElement: null,
            loop: true,
            typeSpeed: 80,
            backSpeed: 80,
        });
    }, 3200)


});

