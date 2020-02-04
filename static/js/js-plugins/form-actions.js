$(function () {
    "use strict";

    $('.subscribe-form-js').on("submit", function (event) {
        event.preventDefault();
        var $form = $(this);
        var url = $form.attr("action");
        var posting = $.post(url, $form.serialize())
        posting.done(function () {
          $form.html('<h4 class="subscribe-title" style="margin-bottom: 25px; line-height: 56px;">Thank you for submit!</h4>').fadeTo(300, 1);
        });

    });

    $('.contact-form').on("submit", function (event) {
        event.preventDefault();
        var $form = $(this);
        var url = $form.attr("action");
        var posting = $.post(url, $form.serialize())
        posting.done(function () {
          $form.html('<h4>Thank you for message!</h4>').fadeTo(300, 1);
        });
    });

});
