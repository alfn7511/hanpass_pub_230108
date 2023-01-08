/*!
 *  v1.0.0
 * Copyright 2021
 */

$(document).ready(function () {
  $('#go-sns').on('click', function () {
    $('.sns-box').addClass('on');
  });
  $('#navbar-allmenu').on('hide.bs.collapse', function () {
    $('.sns-box').removeClass('on');
  });
  $('.dropdown-select .dropdown-item:not(.disabled)').on('click', function () {
    let text = $(this).html();
    $('.dropdown-select .dropdown-item').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.dropdown-select').children('.dropdown-toggle').html(text);
  });

  let acodCont = $('.js-acod .js-cont'),
    acodTit = $('.js-acod .js-tit');

  acodCont.hide();
  acodTit.on('click', function (e) {
    e.preventDefault();
    let acodItem = $(this).parent();
    if (acodItem.hasClass('on') === false) {
      acodItem.children('.js-cont').slideDown(200);
      acodItem.addClass('on');
    } else {
      acodItem.removeClass('on');
      $(this).siblings('.js-cont').slideUp(200);
    }
  });
});

$(document).on('click', "a[href='#']", function (e) {
  e.preventDefault();
});

// 다국어 이동
function move(lang) {
  let url = window.location.href;
  const urlTail = url.substring(url.lastIndexOf('/') + 1); //url끝부분
  url = '/' + lang + '/' + urlTail;
  location.href = url;
}
