$('.question').each(function (e) {
  $(this).click(function () {
    $(this).toggleClass('active');
    $(this).next().toggle('scale');
    $(this).next().toggleClass('active');
    $(this).children('img.arrow').toggleClass('rotate');
    $(this).children('img.arrow').toggleClass('rotate-reset');
  });
});

// $('.arrow').toggleClass('rotate');
// $('.arrow').toggleClass('rotate-reset');
