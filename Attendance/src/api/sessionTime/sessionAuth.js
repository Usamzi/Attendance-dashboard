import { protectedAPICall,handleAPICall } from "../handleApi";
import urls from "./sessionUrls";

export const createSession = async (userData) => {
    const body = userData;
    const res = await protectedAPICall(`${urls.sessions}/createSession`, "POST", body);
    return res;
};

export const getSessions = async () => {
    const response = await protectedAPICall(`${urls.sessions}/getAllSessions`, "GET");
    return response;
};

export const getSingleSession = async (id) => {
    const response = await protectedAPICall(`${urls.sessions}/${id}`, "GET");
    return response;
};

export const deleteSession = async (id) => {
    const response = await protectedAPICall(`${urls.sessions}/deleteSession/${id}`, "DELETE");
    return response;
};

export const updateSession = async (id, data) => {
    const body = data;
    const res = await protectedAPICall(`${urls.sessions}/updateSession/${id}`, "PUT", body);
    return res;
};