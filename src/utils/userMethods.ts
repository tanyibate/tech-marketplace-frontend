import instance from "./instance";

export const getUser = async () => {
  const result = instance.get(`${process.env.REACT_APP_AUTH_ENDPOINT}`);
  return result;
};

export const redirectToGoogleLogin = () => {
  window.location.href = `${process.env.REACT_APP_BACKEND_API_URL}${process.env.REACT_APP_GOOGLE_LOGIN_ENDPOINT}`;
};
