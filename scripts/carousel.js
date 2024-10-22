(function () {
  $(document).ready(function () {
    let slideIndex = 0;
    const slides = $(".carousel-slide .carousel-item");
    const totalSlides = slides.length;
    const slideInterval = 3000;

    function showSlide(index) {
      const newLeft = -index * 100 + "%";
      $(".carousel-slide").css("transform", "translateX(" + newLeft + ")");
    }

    // Next button click event
    $(".next").click(function () {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
    });

    // Previous button click event
    $(".prev").click(function () {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      showSlide(slideIndex);
    });

    setInterval(nextSlide, slideInterval);
  });
})();
