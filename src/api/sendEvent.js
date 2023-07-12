import axios from "./axios";


function sendEvent(event) {
  if (navigator.sendBeacon) {
    navigator.sendBeacon(`${process.env.PREACT_APP_API_URL}/events`, JSON.stringify(event));

    return;
  }

  axios.post("/events", event);
};

export default sendEvent;
