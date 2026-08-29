// Lead form handling for Izzy Immigration.
// Sends contact + newsletter submissions as JSON to the Vercel serverless function
// /api/lead and renders a success/error message next to the form.
(function ($) {
  "use strict";

  function leadField($form, name) {
    return ($form.find('[name="' + name + '"]').val() || "").toString().trim();
  }

  function showMessage($form, ok, text) {
    var $box = $form.find(".ajax-response");
    if (!$box.length) {
      // Fallback: inject a message box right after the submit button if the page lacks one.
      $box = $('<div class="ajax-response mt-15" style="padding:12px 16px;border-radius:8px;font-size:.95rem;"></div>');
      $form.find('button[type="submit"]').after($box);
    }
    $box
      .removeClass("error success")
      .addClass(ok ? "success" : "error")
      .text(text)
      .css({
        color: ok ? "#0f7b3a" : "#b00020",
        background: ok ? "#e8f7ee" : "#fdecec",
        border: ok ? "1px solid #bfe8cd" : "1px solid #f5c2c2",
      });
  }

  function submitLead($form) {
    var type = $form.data("lead") || ($form.hasClass("rr-subscribe-form") ? "newsletter" : "contact");
    var payload = {
      name: leadField($form, "name"),
      email: leadField($form, "email"),
      phone: leadField($form, "phone"),
      subject: leadField($form, "subject"),
      message: leadField($form, "message") || leadField($form, "textarea"),
      website: $form.find('[name="website"]').val() || "", // honeypot
      type: type,
    };

    var $btn = $form.find('button[type="submit"]');
    var original = $btn.html();
    $btn.prop("disabled", true).text(type === "newsletter" ? "Subscribing…" : "Sending…");

    $.ajax({
      type: "POST",
      url: "/api/lead",
      data: JSON.stringify(payload),
      contentType: "application/json",
      dataType: "json",
    })
      .done(function (res) {
        var msg =
          type === "newsletter"
            ? "Thanks for subscribing! We'll keep you updated on new residency programs."
            : "Thank you! Your message has been sent. We'll reply within one business day.";
        showMessage($form, true, res && res.ok ? msg : "Something went wrong. Please try again.");
        if (type === "newsletter") {
          $form.find('input[type="email"]').val("");
        } else {
          $form.find("input, textarea").not('input[type="hidden"]').val("");
        }
      })
      .fail(function (xhr) {
        var msg = xhr.status === 429
          ? "Too many submissions. Please wait a few minutes and try again."
          : "We couldn't send your message right now. Please try again or reach us on WhatsApp.";
        showMessage($form, false, msg);
      })
      .always(function () {
        $btn.prop("disabled", false).html(original);
      });
  }

  $(function () {
    $("#contact-us__form, .rr-subscribe-form").on("submit", function (e) {
      e.preventDefault();
      submitLead($(this));
    });
  });
})(jQuery);
