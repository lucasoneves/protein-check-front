import { fetcher } from "./fetcher";
import Cookies from "js-cookie";

const LOCAL = "http://localhost:3001"
const DEV = "https://protein-tracker-api.onrender.com"

export const addProteinRequest = async (quantity: Number) => {
  try {
    return fetcher({
      url: `${LOCAL}/api/proteinamount`,
      method: "POST",
      body: {
        quantity
      },
      json: true,
      token: Cookies.get("authToken")!
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

export const editProteinRequest = async (quantity: Number, id: string | null) => {
  try {
    return fetcher({
      url: `${LOCAL}/api/proteinamount/${id}`,
      method: "PUT",
      body: {
        quantity
      },
      json: true,
      token: Cookies.get("authToken")!
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

export const deleteProteinRequest = async (id: string | null) => {
  try {
    return fetcher({
      url: `${LOCAL}/api/proteinamount/${id}`,
      method: "DELETE",
      body: null,
      json: true,
      token: Cookies.get("authToken")!
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};