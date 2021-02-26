import axios from "axios";
import { setAuthHeader } from "../util/AuthUtil";

export const get = async (url: any, params: any) => {
  setAuthHeader();
  const result = await axios.get(url, params);

  return result;
};
export const post = async (url: any, params: any) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  return result;
};
