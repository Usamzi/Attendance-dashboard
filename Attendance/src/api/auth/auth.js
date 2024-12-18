import { handleAPICall, protectedAPICall, baseUrl } from "../handleApi";
import urls from "./authUrls";

export const logInUser = async (logInData) => {
  const body = logInData;
  const res = await handleAPICall(`${urls.users}/loginUser`, "POST", body);
  console.log(res);
  if (res.status == 200) {
    localStorage.setItem("accessToken", res?.data?.tokens.accessToken);
    localStorage.setItem("refreshToken", res?.data?.tokens.refreshToken);
    localStorage.setItem("user", res && res.data && JSON.stringify(res?.data?.account));
  }

  return res;
};

// export const emailRegistration = async (email) => {
//   const body = email;
//   const res = await handleAPICall(
//     `${urls.users}/emailRegistration`,
//     "POST",
//     body
//   );
//   return res;
// };
// export const verificationRegistration = async (data) => {
//   const body = data;
//   const res = await handleAPICall(
//     `${urls.users}/verificationRegistration`,
//     "POST",
//     body
//   );
//   return res;
// };
// export const forgotPassword = async (email) => {
//   const body = email;
//   const res = await handleAPICall(`${urls.users}/forgotpassword`, "POST", body);
//   return res;
// };

// export const verifyCode = async (data) => {
//   const body = data;
//   const res = await handleAPICall(
//     `${urls.users}/verificationCode`,
//     "POST",
//     body
//   );
//   return res;
// };

// export const resetPassword = async (data) => {
//   const body = data;
//   const res = await handleAPICall(`${urls.users}/resetpassword`, "POST", body);
//   return res;
// };



export const logOutUser = async () => {
  const res = await protectedAPICall(`${urls.users}/logoutUser`, "POST");
  if (res.status == 200) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  }

  return res;
};

// export const getSingleUserApi = async (id) => {
//   const response = await protectedAPICall(`${urls.users}/${id}`, "GET");
//   return response;
// };

// export const editUserApi = async (id, data) => {
//   const body = data;
//   const res = await protectedAPICall(`${urls.users}/updateUser/${id}`, "PUT", body);
//   return res;
// };
// export const getUsersApi = async (id,search,page,limit) => {
//   const response = await protectedAPICall(`${urls.users}/getallUsers/${id}/${page}/${limit}/${search}`, "GET");
//   return response;
// };
// export const updateEmailApi = async (id, data) => {
//   const body = data;
//   const res = await protectedAPICall(`${urls.users}/updateEmail/${id}`, "POST", body);
//   return res;
// }
// export const verifyEmailCodeApi = async (id, data) => {
//   const body = data;
//   const res = await protectedAPICall(`${urls.users}/verifyEmailCode/${id}`, "POST", body);
//   return res;
// }
// export const addUserByAdminApi = async (data) => {
//   const body = data;
//   const res = await protectedAPICall(`${urls.users}`, "POST", body);
//   return res;
// };


// export const userTerminatedApi = async (id) => {
//   const res = await protectedAPICall(`${urls.users}/terminateUser/${id}`, "POST");
//   return res;
// };

