import type { Services } from "../types";

export const router: Services["Router"] = {
  initialize: () => {
    const navItems = document.querySelectorAll<HTMLAnchorElement>("a.navlink");

    navItems?.forEach((navItem) =>
      navItem.addEventListener("click", function handleClick(event) {
        event.preventDefault();
        router.navigateTo(navItem.href);
      })
    );

    if (location.pathname !== "/") {
      router.navigateTo(location.pathname);
    }
  },
  navigateTo: (url: string, state?: Record<string, any>) =>
    history.pushState(state, "", url),
};
