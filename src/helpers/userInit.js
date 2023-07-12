import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import axios from "../api/axios";

// helpers
import getUserId from "./getUserId";
import { USER_ID_COOKIE_KEY, USER_IP_COOKIE_KEY } from "../constants/cookiesKey";

export default async function initUser() {
  const { userId } = getUserId();

  if (!userId) {

    const resp = await axios.get('https://api.ipify.org?format=json').catch(() => null);

    Cookies.set(USER_ID_COOKIE_KEY, uuidv4());
    Cookies.set(USER_IP_COOKIE_KEY, resp.data.ip);
  }
}
