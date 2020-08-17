import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    baseUrl: "http://localhost:5000/api",
    headers: {
      Authorization: token,
    },
  });
};
