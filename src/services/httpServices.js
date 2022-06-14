import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response >= 400 && error.response < 500;
  if (!expectedError) {
    console.log(error);
    toast.error("an unexpexted error occured.");
  }
  return Promise.reject(error);
});

const client = axios.create({
  baseURL: "https://freedemiabackend.herokuapp.com/api/",
});

export default {
  get: axios.get,
  post: axios.post,
  client,
  //   put: axios.put,
  //   delete: axios.delete,
};
