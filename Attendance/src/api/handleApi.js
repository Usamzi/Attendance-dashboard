import axios from "axios";

export const baseUrl =
  import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

const isAccessTokenInvalid = (response) => {
  const statusCodes = [400, 401, 403, 404];
  return statusCodes.includes(response.status);
};

export const protectedAPICall = async (url, method, body = {}) => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios({
        url,
        method,
        headers: { Authorization: `Bearer ${accessToken}` },
        data: body,
      });
      return response;
    } catch (e) {      
      if (isAccessTokenInvalid(e.response)) {
        const refreshTokenResponse = await axios.post(
          `${baseUrl}/users/refresh`,
          {
            refreshToken: localStorage.getItem("refreshToken"),
          }
        );        
       accessToken = refreshTokenResponse.data.accessToken;
        localStorage.setItem("accessToken", accessToken);

        const refreshedResponse = await axios({
          url,
          method,
          headers: { Authorization: `Bearer ${accessToken}` },
          data: body,
        });
        

        return refreshedResponse;
      } else  {    
        throw e;
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleAPICall = async (url, method, body = {}) => {
  try {
    const headers = {};
    const response = await axios({
      url,
      method,
      headers,
      data: body,
    });
    return response;
  } catch (error) {
    return error;
  }
};
