$(document).ready();
  //Fade out preloader
  $(window).on("load", function() {
    var preloaderFadeOutTime = 300;
    function hidePreloader() {
      var preloader = $(".preloader");
      preloader.fadeOut(preloaderFadeOutTime);
    }
    setTimeout(() => {
      hidePreloader();
    }, 1500);
  });
  /* Baffle JS */

  setTimeout(() => {
    const text = baffle(".main-heading");
    text.set({
      characters: "Afeedh Shaji",
      speed: 85
    });
    text.start();
    text.reveal(70000);
  }, 100);

  setTimeout(() => {
    /* Typed JS */
    var typed = new Typed("#typed", {
      strings: [
        "Developer.^1000 ",
        "ML/DL Enthusiast.^1000 ",
        "Programmer.^1000 ",
        "Designer.^1000 "
      ],
      stringsElement: null,
      loop: true,
      typeSpeed: 80,
      backSpeed: 80
    });
  }, 600);

