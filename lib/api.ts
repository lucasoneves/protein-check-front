const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user) => {
  try {
    return fetcher({
      url: "https://protein-tracker-api.onrender.com/signup",
      method: "POST",
      body: user,
    });
  } catch (error) {
    console.error('Register =>', error)
  }
};

export const signin = async (user) => {
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

export const recoverPassword = async (email) => {
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