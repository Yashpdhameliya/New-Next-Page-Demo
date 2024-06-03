import { transformPlanDetailsCountryRegion } from "@/utils/transform";
import { restBaseUrl, restBcHeaders } from "..";

export async function getAllCountryRegion() {
  const url = `${restBaseUrl}/home/countries-regions`;

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

export async function getPlanDetailsCountryRegion({ mcc, regionId }: any) {
  const url = mcc
    ? `${restBaseUrl}/home/get-plans?mcc=${mcc}`
    : regionId
    ? `${restBaseUrl}/home/get-plans?region_id=${regionId}`
    : "";

  const response = await fetch(url, {
    headers: restBcHeaders,
    method: "GET",
  });

  const res = await response.json();
  const finalRes = await transformPlanDetailsCountryRegion(res?.data);

  if (response.status == 404) {
    return { isError: true, response: response };
  }

  return {
    isError: false,
    response: finalRes,
  };
}
