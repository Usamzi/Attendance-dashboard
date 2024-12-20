import { protectedAPICall,handleAPICall } from "../handleApi";
import urls from "./classUrls";

export const getClasses = async () => {
    const response = await handleAPICall(`${urls.classes}/getClass`, "GET");
    return response;
};

export const createClass = async (userData) => {
    const body = userData;
    const res = await protectedAPICall(`${urls.classes}/createClass`, "POST", body);
    return res;
};

export const updateClass = async (id, data) => {
    const body = data;
    const res = await protectedAPICall(`${urls.classes}/updateClass/${id}`, "PUT", body);
    return res;
}

export const deleteClass = async (id) => {
    const response = await protectedAPICall(`${urls.classes}/deleteClass/${id}`, "DELETE");
    return response;
};