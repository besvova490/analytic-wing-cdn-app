// helpers
import { PAGE_VIEW } from "../../constants/eventKeys";
import getUserId from "../getUserId";
import sendEvent from "../../api/sendEvent";


export default function pageLoadEvent() {
  const { userId, userIp } = getUserId();
    
  const payloadObject = {
    userId: userId,
    userIp: userIp,
    event: PAGE_VIEW,
    isMobile: navigator.userAgentData.mobile,
    page: window.location.pathname,
    browserInfo: [...navigator.userAgentData.brands].pop().brand,
    data: {
      referrer: document.referrer,
      platform: navigator.userAgentData.platform,
      
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  
      screenWidth: screen.width,
      screenHeight: screen.height,
    },
  };

  window.onload = () => sendEvent(payloadObject);

  return payloadObject;
}
