document.addEventListener("DOMContentLoaded", function () {
  //   var splide = new Splide(".splide", {
  //     type: "loop",
  //     perPage: 2,
  //     perMove: 1,
  //     gap: "2rem",
  //   });

  //   splide.mount();
  // });

  var splide = new Splide(".splide", {
    perPage: 5,
    rewind: true,
    gap: "2rem",
  });

  splide.mount();
});
