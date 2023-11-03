type FetcherType = {
  url: string,
  method: string,
  body: object | null,
  json: boolean,
  token?: string | null
}

export const fetcher = async ({ url, method, body, json = true, token }: FetcherType) => {
  const res = await fetch(url, {
    method,
    body: body ? JSON.stringify(body): null,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  });

  if (!res.ok) {
    throw new Error(`Api Error -> ${res.status}`);
  }

  if (res.status === 204) {
    return {
      data: {
        status: 204
      }
    };
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};