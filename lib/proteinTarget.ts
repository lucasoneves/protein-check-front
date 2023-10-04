import { fetcher } from "./fetcher";
import Cookies from "js-cookie";

const LOCAL = "http://localhost:3001"
const DEV = "https://protein-tracker-api.onrender.com"

export const createProteinTarget = async (target: Number) => {
  try {
    return fetcher({
      url: `${LOCAL}/api/proteintarget/`,
      method: "POST",
      body: {
        target
      },
      json: true,
      token: Cookies.get("authToken")!
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

export const updateProteinTarget = async (target: Number, id: String) => {
  try {
    return fetcher({
      url: `${LOCAL}/api/proteintarget/${id}`,
      method: "PUT",
      body: {
        target
      },
      json: true,
      token: Cookies.get("authToken")!
    });
  } catch (error) {
    console.error('UPDATE_PROTEIN =>', error)
  }
};