export type RequestMethodType = "GET" | "DELETE" | "POST" | "PUT";

export const request = <T = undefined, D = undefined>(
  method: RequestMethodType,
  url: string,
  data?: D,
): Promise<T> => {
  return fetch(`/api/${url}`, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};
