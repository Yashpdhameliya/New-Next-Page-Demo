import { restBaseUrl, restBcHeaders } from "..";

export async function handleOnSingUp({ body }: { body: any }) {
  const url = `${restBaseUrl}/authentication/register`;

  const response = await fetch(url, {
    headers: restBcHeaders,
    method: "POST",
    body: JSON.stringify(body),
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
