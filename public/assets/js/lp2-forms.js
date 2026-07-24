$(document).ready(function () {
  $(document).on("submit", ".popupForm", function (e) {
    e.preventDefault();

    var $form = $(this);
    var $btn = $form.find("[type=submit]");
    var originalText = $btn.text();
    $btn.prop("disabled", true).text("Submitting...");

    var name = $form.find('[name="name"]').val() || "";
    var nameParts = name.trim().split(/\s+/);
    var firstName = nameParts[0] || "";
    var lastName = nameParts.slice(1).join(" ");
    var email = $form.find('[name="email"]').val() || "";
    var phone = $form.find('[name="number"]').val() || "";
    var msgRaw = $form.find('[name="message"]').val() || "";
    var pkgName = $form.find('[name="package_name"]').val() || "";
    var pkgCost = $form.find('[name="package_cost"]').val() || "";
    var pkgCat = $form.find('[name="package_cat"]').val() || "";
    var location = $form.find('[name="location"]').val() || "";

    var msgParts = [];
    if (msgRaw) msgParts.push(msgRaw);
    if (pkgName) msgParts.push("Package: " + pkgName);
    if (pkgCost) msgParts.push("Cost: " + pkgCost);
    if (pkgCat) msgParts.push("Category: " + pkgCat);
    if (location) msgParts.push("Location: " + location);
    var message = msgParts.join(" | ");

    var pageUrl = window.location.href;
    var urlParams = new URLSearchParams(window.location.search);

    function doSend() {
      var payload = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        message: message,
        pageUrl: pageUrl,
        hidden_utm_source: urlParams.get("utm_source") || "",
        hidden_utm_medium: urlParams.get("utm_medium") || "",
        hidden_utm_campaign: urlParams.get("utm_campaign") || "",
        hidden_gclid: urlParams.get("gclid") || "",
        hidden_fbclid: urlParams.get("fbclid") || "",
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (res.ok) {
            window.location.href = "/thank-you";
          } else {
            $btn.prop("disabled", false).text(originalText);
            alert("Submission failed. Please try again.");
          }
        })
        .catch(function () {
          $btn.prop("disabled", false).text(originalText);
          alert("Network error. Please check your connection and try again.");
        });
    }

    doSend();
  });
});

function setButtonURL(event) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }
  if (typeof window.zE === "function") {
    window.zE("webWidget", "open");
    return;
  }
  var tries = 0;
  var timer = setInterval(function () {
    tries += 1;
    if (typeof window.zE === "function") {
      clearInterval(timer);
      window.zE("webWidget", "open");
    } else if (tries >= 20) {
      clearInterval(timer);
    }
  }, 250);
}

window.setButtonURL = setButtonURL;
