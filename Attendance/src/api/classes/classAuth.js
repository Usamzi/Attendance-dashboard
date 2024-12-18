import { protectedAPICall,handleAPICall } from "../handleApi";
import urls from "./classUrls";

export const getClasses = async () => {
    const response = await protectedAPICall(`${urls.classes}/getClass`, "GET");
    return response;
};

export const createClass = async (userData) => {
    const body = userData;
    const res = await protectedAPICall(`${urls.classes}/createClass`, "POST", body);
    return res;
};