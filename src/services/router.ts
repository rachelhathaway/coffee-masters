import type { Services } from "../types";

const initializeNav = () => {
  const navItems = document.querySelectorAll<HTMLAnchorElement>("a.navlink");

  navItems?.forEach((navItem) =>
    navItem.addEventListener("click", function handleClick(event) {
      event.preventDefault();

      const href = navItem.getAttribute("href");

      if (href) {
        router.navigateTo(href);
      }
    })
  );

  if (location.pathname !== "/") {
    router.navigateTo(location.pathname);
  }
};

const setPageContent = (url: string) => {
  let newPageEl = document.createElement("h1");

  switch (url) {
    case "/": {
      newPageEl.textContent = "Menu";
      break;
    }
    case "/order": {
      newPageEl.textContent = "Your Order";
      break;
    }
    default:
      newPageEl.textContent = "404";
      break;
  }

  const mainEl = document.querySelector("main");
  const prevPageEl = mainEl?.firstChild;

  if (prevPageEl) {
    mainEl.replaceChild(newPageEl, prevPageEl);
  } else {
    mainEl?.appendChild(newPageEl);
  }
};

const resetScrollPosition = () => {
  window.scrollX = 0;
  window.scrollY = 0;
};

export const router: Services["Router"] = {
  initialize: () => {
    initializeNav();
  },
  navigateTo: (
    url: string,
    state?: Record<string, any>,
    addToHistory = true
  ) => {
    if (addToHistory) {
      history.pushState(state, "", url);
    }

    setPageContent(url);
    resetScrollPosition();
  },
};
