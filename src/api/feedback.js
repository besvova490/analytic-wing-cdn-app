// helpers
import axios from "./axios";
import getUserId from "../helpers/getUserId";


export default {
  post: async (data) => {
    const { userId } = getUserId();

    const resp = await axios.post("/web-app-feedback", {
      userId,
      ...data,
    });

    return resp;
  }
};
