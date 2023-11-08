import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";

const ENDPOINT_PROD = "http://localhost:3001"
const ENDPOINT_DEV = "https://protein-tracker-api.onrender.com"
const ENDPOINT = process.env.DEVELOPMENT === 'development' ? ENDPOINT_DEV : ENDPOINT_PROD

console.log(process.env.DEVELOPMENT)

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

export const getUserData = async (tokenId: string) => {
  try {
    return fetcher({
      url: `${ENDPOINT}/api/proteinamount`,
      method: "GET",
      body: null,
      json: true,
      token: tokenId
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("getUserData =>", error);
  }
}