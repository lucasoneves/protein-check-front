import { fetcher } from "./fetcher";

export const register = async (user: object) => {
  try {
    return fetcher({
      url: "https://protein-tracker-api.onrender.com/signup",
      method: "POST",
      body: user,
      json: true
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
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("SignIn =>", error);
  }
};

export const recoverPassword = async (email: object) => {
  try {
    return fetcher({
      url: "https://protein-tracker-api.onrender.com/forgot-password",
      method: "POST",
      body: email,
      json: true,
    });
  } catch (error) {
    // Handle the error (e.g., show an error message)
    console.error("Recover password =>", error);
  }
}

export const getUserData = async (email) => {

}