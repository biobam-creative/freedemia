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
  baseURL: "http://127.0.0.1:8000/api/",
});

export default {
  get: axios.get,
  post: axios.post,
  client,
  //   put: axios.put,
  //   delete: axios.delete,
};
