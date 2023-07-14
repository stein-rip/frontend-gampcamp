import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseURL: string = process.env.REACT_APP_API_URL + "/welcome" || "";

export const getShoutouts = async (
  name: string | null
): Promise<Shoutout[]> => {
  const params: any = {};
  if (name) {
    params.params = { name: name };
  }
  return (await axios.get(baseURL, params)).data;
};

export const addShoutout = async (newShoutout: Shoutout): Promise<Shoutout> => {
  return (await axios.post(baseURL, newShoutout)).data;
};
