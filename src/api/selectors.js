import axios from "./axios";

export const getSelectors = async () => {
  const { data } = await axios.get("/selectors/open");

  return data;
};
