import {protectedAPICall,handleAPICall} from "../handleApi";
import urls from "./studentUrls";

export const getStudents = async () => {
    const response = await handleAPICall(`${urls.students}/getStudents`, "GET");
    return response;
};

export const getSingleStudent = async (id) => {
    const response = await protectedAPICall(`${urls.students}/${id}`, "GET");
    return response;
};

export const createStudent = async (userData) => {
    const body = userData;
    const res = await protectedAPICall(`${urls.students}/createStudent`, "POST", body);
    return res;    
};