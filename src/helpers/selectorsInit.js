import Cookies from "js-cookie";

// helpers
import { getSelectors } from "../api/selectors";
import { SELECTORS_COOKIE_KEY } from "../constants/cookiesKey";

async function selectorsInit() {
  const selectorsFromCookies = Cookies.get(SELECTORS_COOKIE_KEY);
  let selectors = selectorsFromCookies ? JSON.parse(selectorsFromCookies) : null;

  if (!selectors) {
    selectors = await getSelectors();
  }

  selectors?.forEach(item => {
    const element = document.querySelector(item.selector);

    if (element) {
      element.addEventListener("click", () => {
        window.dataLayer({ selector: item.selector, selectorId: item.id });
      });
    };
  });
}

export default selectorsInit;
