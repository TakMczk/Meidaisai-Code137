$(function() {
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow:
      '<img src="./img/arrow_left.png" class="slide-arrow prev-arrow">',
    nextArrow:
      '<img src="./img/arrow_right.png" class="slide-arrow next-arrow">'
  });
});

$(function() {
  $(".slider").slick({
    autoplay: true
  });
});
