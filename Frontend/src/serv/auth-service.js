import axios from "axios";

const API_URL = "https://online-clinic-99063-default-rtdb.firebaseio.com/.json";

const register = (
    firstName,
    lastName,
    password,
    email,
    dob,
    gender,
    mobilenumber
    ) => {
  return axios.post(API_URL + "signup", {
    firstName,
        lastName,
        password,
        email,
        dob,
        gender,
        mobilenumber
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};