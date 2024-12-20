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
export const deleteSchool = async (id) => {
  const response = await protectedAPICall(`${urls.schools}/deleteSchool/${id}`, "DELETE");
  return response;
};
export const updateSchool = async (id, data) => {
  const body = data;
  const res = await protectedAPICall(`${urls.schools}/updateSchool/${id}`, "PUT", body);
  return res;
}