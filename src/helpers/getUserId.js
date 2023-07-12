import Cookies from "js-cookie";

// helpers
import { USER_ID_COOKIE_KEY, USER_IP_COOKIE_KEY } from "../constants/cookiesKey";

export default function getUserId() {
  const userIp = Cookies.get(USER_IP_COOKIE_KEY);
  const userId = Cookies.get(USER_ID_COOKIE_KEY);

  return { userId, userIp };
};
