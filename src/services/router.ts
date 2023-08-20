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

  window.addEventListener("popstate", (event) => {
    router.navigateTo(event.state.path, false);
  });

  router.navigateTo(location.pathname);
};

const setPageContent = (path: string) => {
  let newPageEl;

  switch (path) {
    case "/": {
      newPageEl = document.createElement("cm-menu-page");
      break;
    }
    case "/order": {
      newPageEl = document.createElement("cm-order-page");
      break;
    }
    default:
      if (path.startsWith("/product-")) {
        newPageEl = document.createElement("cm-details-page");
        newPageEl.dataset.productId = path.substring(path.lastIndexOf("-") + 1);
      } else {
        newPageEl = document.createElement("h1");
        newPageEl.textContent = "404";
      }

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
  navigateTo: (path: string, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ path }, "", path);
    }

    setPageContent(path);
    resetScrollPosition();
  },
};
