(function () {
  function openChat(event) {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }

    if (typeof window.zE === "function") {
      window.zE("webWidget", "open");
      return;
    }

    // Widget snippet may still be loading — retry briefly
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

  window.setButtonURL = openChat;

  function initZendeskWidget() {
    if (typeof window.zE !== "function") {
      return;
    }

    window.zE(function () {
      setTimeout(function () {
        window.zE("webWidget", "open");
      }, 2000);

      window.zE("webWidget:on", "close", function () {
        window.zE("webWidget", "show");
      });

      window.zE("webWidget:on", "chat:unreadMessages", function (count) {
        if (count > 0) {
          window.zE("webWidget", "open");
        }
      });
    });
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) {
      return;
    }

    if (target.closest(".chat-btn, [data-open-chat]")) {
      openChat(event);
    }
  });

  initZendeskWidget();
})();
