export const restBcHeaders = {
  "content-type": "application/json",
  //   Accept: "application/json",
  language: "en",
  //   "X-Auth-Token": `${BIGCOMMERCE_ACCESS_TOKEN!}`,
  //   "Access-Control-Allow-Origin": "*",
};

// export const restBaseUrl = `${NEXT_PUBLIC_API_BASEURL}/api`;
export const restBaseUrl = `https://stagingapi.waosim.com/api`;

import logger from "@/utils/logger";

export async function signupNewUser({
  method,
  body,
}: {
  method: string;
  body?: any;
}) {
  try {
    const json = {
      api: "authentication",
      action: "signupNewUser",
    };

    const config = {
      method: method,
      body: JSON.stringify(body),
    };

    const queryString = new URLSearchParams(json).toString();
    const res = await authApi(queryString, config);
    return res.response;
  } catch (err) {
    logger.error("API threw Error", err);
    throw err;
  }
}

// This called to send request `api/bigcommerce/api` inside next setup.

const authApi = async (query: string, config: any) =>
  await (await fetch(`/api/auth/signup?${query}`, config)).json();
