$(function () {
  $(".content-btn").hover(
    function () {
      $(this).addClass("content-btn2");
    },
    function () {
      $(this).removeClass("content-btn2");
    }
  );
});

$(function () {
  $(window).on("load resize", function () {
    var navHeight = $(".drawer-nav").innerHeight();
    var menuHeight = $(".drawer-menu").innerHeight();

    var menuGap = navHeight - menuHeight;
    var menuGapHalf = menuGap / 2;
    $(".drawer-menu").css("margin-top", menuGapHalf + "px");
  });
});

$(function () {
  $(".menu-btn, .menu-under").on("click", function () {
    if (!$(".drawer--right").hasClass("drawer-open")) {
      $(".menu-line span:nth-of-type(1)").addClass("a");
      $(".menu-line span:nth-of-type(2)").addClass("b");
      $(".menu-line span:nth-of-type(3)").addClass("c");
      $(".menu-line span:nth-of-type(1)").removeClass("a-back");
      $(".menu-line span:nth-of-type(2)").removeClass("b-back");
      $(".menu-line span:nth-of-type(3)").removeClass("c-back");
      $(".drawer-nav").addClass("drawer-overlay-right");
      $(".drawer-nav").removeClass("drawer-overlay-right-back");
      $(".menu-under").addClass("drawer-overlay-left");
      $(".drawer--right").addClass("drawer-open");
    } else {
      $(".menu-line span:nth-of-type(1)").addClass("a-back");
      $(".menu-line span:nth-of-type(2)").addClass("b-back");
      $(".menu-line span:nth-of-type(3)").addClass("c-back");
      $(".menu-line span:nth-of-type(1)").removeClass("a");
      $(".menu-line span:nth-of-type(2)").removeClass("b");
      $(".menu-line span:nth-of-type(3)").removeClass("c");
      $(".drawer-nav").addClass("drawer-overlay-right-back");
      $(".drawer-nav").removeClass("drawer-overlay-right");
      $(".menu-under").removeClass("drawer-overlay-left");
      $(".drawer--right").removeClass("drawer-open");
    }
  });
});

$(function () {
  $(window).on("load", function () {
    $(".entry").addClass("is-opacity");
    setTimeout(function () {
      $(".entry").addClass("is-effect");
    }, 1000);
  });
});

$(function () {
  $(".btn").on("click", function () {
    $(this).closest("div").css("display", "none");
    id = $(this).attr("class").split(" ")[1];
    $(id).fadeIn(1000);
  });
});
