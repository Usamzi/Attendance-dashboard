import { handleAPICall, protectedAPICall } from "../handleApi";
import urls from "./schoolUrls";
export const registerSchool = async (userData) => {
  const body = userData;
  const res = await protectedAPICall(`${urls.schools}/createSchools`, "POST", body);
  return res;
};

export const getSchools = async () => {
  const response = await protectedAPICall(`${urls.schools}/getSchools`, "GET");
  return response;
};