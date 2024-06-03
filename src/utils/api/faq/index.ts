import { restBaseUrl, restBcHeaders } from "..";

export async function fetchFaqData() {
  const url = `${restBaseUrl}/home/get-faqs?status=1`;

  const response = await fetch(url, {
    headers: restBcHeaders,
    method: "GET",
  });

  const res = await response.json();

  if (response.status == 404) {
    return { isError: true, response: response };
  }

  return {
    isError: false,
    response: res,
  };
}
