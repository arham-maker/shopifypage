(function () {
  function openChat() {
    if (typeof window.zE === "function") {
      window.zE("webWidget", "open");
    }
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
      event.preventDefault();
      openChat();
    }
  });

  initZendeskWidget();
})();
