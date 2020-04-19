$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  /*Því að AOS er með vesen á litlum skjáum. */
  if (screen.width < 768) {
    $("div").attr("data-aos", "fade-in");
  }

  AOS.init({
    easing: "ease",
    duration: 1800,
    //once: true
  });
  /*
  $("#contact-form").submit(function (e) {
    var name = document.getElementById("inputName");
    var email = document.getElementById("inputEmail");
    var message = document.getElementById("inputMessage");

    if (!name.value || !email.value || !message.value) {
      alertify.error("Please check your entries");
      return false;
    } else {
      $.ajax({
        method: "POST",
        url: "//formspree.io/jonhjortur@protonmail.com",
        data: $("#contact-form").serialize(),
        datatype: "json",
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message sent");
    }
  });
  */
});
