$(document).ready(function () {

    /* Baffle JS */
    const text = baffle(".main-heading");
    text.set({
        characters: 'Afeedh Shaji',
        speed: 95
    });
    text.start();

    // Reveal your text over 1000ms
    text.reveal(70000);

    /* Typed JS */
    var typed = new Typed('#typed', {
        strings: ["Developer.^1000 ", "ML/DL Enthusiast.^1000 ", "Programmer.^1000 "],
        stringsElement: null,
        loop: true,
        typeSpeed: 80,
        backSpeed: 80,

    });

});

