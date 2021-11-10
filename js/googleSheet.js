// Copyright (c) Lucas Becker 2021. All right reserved.
(function () {
  "use strict";
}());

const $form = $('form#contact-form'),
  url = 'https://script.google.com/macros/s/AKfycbzreEqKnQ7FP4-1GHH67pojtzYtwXK-2k526XXQaGY422TLvUfRe3XdwJz0N_ncaeFHxA/exec';

$('#submit-form').on('click', function (e) {
  e.preventDefault();
  const jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
});
