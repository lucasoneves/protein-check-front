import { fetcher } from "./fetcher";
import Cookies from "js-cookie";

const ENDPOINT_PROD = "http://localhost:3001"
const ENDPOINT_DEV = "https://protein-tracker-api.onrender.com"
const ENDPOINT = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview' ? ENDPOINT_DEV : ENDPOINT_PROD

const AUTH_TOKEN = Cookies.get('authToken')

console.log(process.env.NODE_ENV)

export const register = async (user: object) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/signup`,
      method: "POST",
      body: user,
      json: true,
      token: null
    });
  } catch (error) {
    console.error('Register =>', error)
  }
};

export const signin = async (user: object) => {

  try {
    return fetcher({
      url: `${ENDPOINT}/signin`,
      method: "POST",
      body: user,
      json: true,
      token: null
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("SignIn =>", error);
  }
};

export const recoverPassword = async (email: string, token: string) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/forgot-password`,
      method: "POST",
      body: { email },
      json: true,
      token: token
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("Recover password =>", error);
  }
}

export const resetPassword = async (password: string, id: string, token: string) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/reset-password/${id}/${token}`,
      method: "POST",
      body: { password },
      json: true
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("Reset_password =>", error);
  }
}
/* =========== GET User Data =========== */
export const getUserData = async () => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteinamount`,
      method: "GET",
      body: null,
      json: true,
      token: AUTH_TOKEN
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("getUserData =>", error);
  }
}

/* =========== CREATE Protein Target =========== */

export const createProteinTarget = async (target: Number) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteintarget/`,
      method: "POST",
      body: {
        target
      },
      json: true,
      token: AUTH_TOKEN
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

/* =========== UPDATE Protein Target =========== */
export const updateProteinTarget = async (target: Number, id: String) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteintarget/${id}`,
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

/* =========== ADD Protein Amount =========== */
export const addProteinAmount = async (quantity: Number) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteinamount`,
      method: "POST",
      body: {
        quantity
      },
      json: true,
      token: AUTH_TOKEN
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

/* =========== EDIT Protein Amount =========== */
export const editProteinAmount = async (quantity: Number, id: string | null) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteinamount/${id}`,
      method: "PUT",
      body: {
        quantity
      },
      json: true,
      token: AUTH_TOKEN!
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

/* =========== DELETE Protein Amount =========== */
export const deleteProteinAmount = async (id: string | null) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteinamount/${id}`,
      method: "DELETE",
      body: null,
      json: true,
      token: AUTH_TOKEN!
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};
