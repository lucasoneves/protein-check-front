import { fetcher } from "./fetcher";
import Cookies from "js-cookie";


const API_ENDPOINT = window.location.origin === "http://localhost:3000" ? "http://localhost:3001" : "https://protein-tracker-api.onrender.com";

export const register = async (user: object) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/signup`,
      method: "POST",
      body: user,
      token: null
    });
  } catch (error) {
    console.error('Register =>', error)
  }
};

export const signin = async (user: object) => {

  try {
    return await fetcher({
      url: `${API_ENDPOINT}/signin`,
      method: "POST",
      body: user,
      token: null
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("SignIn =>", error);
  }
};

export const recoverPassword = async (email: string, token: string) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/forgot-password`,
      method: "POST",
      body: { email },
      token: token
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("Recover password =>", error);
  }
}

export const resetPassword = async (password: string, id: string, token: string) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/reset-password/${id}/${token}`,
      method: "POST",
      body: { password },
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("Reset_password =>", error);
  }
}
/* =========== GET User Data =========== */
export const getUserData = async (token: string | undefined) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/api/proteinamount`,
      method: "GET",
      body: null,
      token
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("getUserData =>", error);
  }
}

/* =========== CREATE Protein Target =========== */

export const createProteinTarget = async (target: Number) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/api/proteintarget/`,
      method: "POST",
      body: {
        target
      },
      token: Cookies.get('authToken')
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

/* =========== UPDATE Protein Target =========== */
export const updateProteinTarget = async (target: Number, id: String) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/api/proteintarget/${id}`,
      method: "PUT",
      body: {
        target
      },
      token: Cookies.get("authToken")
    });
  } catch (error) {
    console.error('UPDATE_PROTEIN =>', error)
  }
};

/* =========== ADD Protein Amount =========== */
export const addProteinAmount = async (quantity: Number) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/api/proteinamount`,
      method: "POST",
      body: {
        quantity
      },
      token: Cookies.get("authToken")
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

/* =========== EDIT Protein Amount =========== */
export const editProteinAmount = async (quantity: Number, id: string | null) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/api/proteinamount/${id}`,
      method: "PUT",
      body: {
        quantity
      },
      token: Cookies.get('authToken')
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};

/* =========== DELETE Protein Amount =========== */
export const deleteProteinAmount = async (id: string | null) => {
  try {
    return await fetcher({
      url: `${API_ENDPOINT}/api/proteinamount/${id}`,
      method: "DELETE",
      body: null,
      token: Cookies.get('authToken')
    });
  } catch (error) {
    console.error('ADD_PROTEIN =>', error)
  }
};
