// helpers
import sendEvent from "../../api/sendEvent"
import getUserId from "../getUserId";
import { CLICK } from "../../constants/eventKeys";


function dataLayer(data = {}) {
  const { userId, userIp } = getUserId();

  const payloadObject = {
    userId: userId,
    userIp: userIp,
    event: CLICK,
    isMobile: navigator.userAgentData.mobile,
    page: data.page || window.location.pathname,
    browserInfo: [...navigator.userAgentData.brands].pop().brand,
    data: {
      referrer: document.referrer,
      platform: navigator.userAgentData.platform,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenWidth: screen.width,
      screenHeight: screen.height,
      ...data,
    },
  };

  sendEvent(payloadObject);
}

function initDataLayerEvents() {
  window.dataLayer = dataLayer;
}

export default initDataLayerEvents;
