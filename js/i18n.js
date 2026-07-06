(function () {
  const STORAGE_KEY = "waterfall-docs-lang";
  const SUPPORTED = ["ko", "en"];

  function resolveLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    if (fromQuery && SUPPORTED.includes(fromQuery)) {
      return fromQuery;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) {
      return stored;
    }
    return document.body.dataset.defaultLang || "ko";
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) {
      lang = "ko";
    }

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-lang-block]").forEach((block) => {
      const isActive = block.dataset.langBlock === lang;
      block.hidden = !isActive;
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const active = btn.dataset.langBtn === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("active", active);
    });

    const activeTitle = document.querySelector(
      `[data-lang-block="${lang}"] [data-page-title]`,
    );
    if (activeTitle) {
      document.title = activeTitle.textContent.trim();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = resolveLang();
    applyLang(lang);

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLang(btn.dataset.langBtn);
      });
    });
  });
})();
