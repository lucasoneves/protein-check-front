import { fetcher } from "./fetcher";

export const register = async (user: object) => {
  try {
    return fetcher({
      url: "https://protein-tracker-api.onrender.com/signup",
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
      url: "https://protein-tracker-api.onrender.com/signin",
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

export const recoverPassword = async (email: object, token: string) => {
  try {
    return fetcher({
      url: "https://protein-tracker-api.onrender.com/forgot-password",
      method: "POST",
      body: email,
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
      url: "https://protein-tracker-api.onrender.com/api/proteinamount",
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