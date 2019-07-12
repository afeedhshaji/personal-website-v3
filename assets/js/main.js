$(document).ready(function () {



    /* Baffle JS */
    const text = baffle(".main-heading");
    text.set({
        characters: 'ADHEJAISEEDJAFEDHJIAFEE',
        speed: 95
    });
    text.start();

    // Reveal your text over 1000ms
    text.reveal(70000);


});

