import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { fetcher } from "./fetcher";

const local = "http://localhost:3001"
const dev = "https://protein-tracker-api.onrender.com"

export const register = async (user: object) => {
  try {
    return fetcher({
      url: `${local}/signup`,
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
      url: `${local}/signin`,
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
      url: `${local}/forgot-password`,
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

export const getUserData = async (tokenId: string) => {
  try {
    return fetcher({
      url: `${local}/api/proteinamount`,
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