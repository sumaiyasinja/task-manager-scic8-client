import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manager-scic8-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;