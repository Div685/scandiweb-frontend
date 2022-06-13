import axios from "axios";
import apiUrl from "./apiURL";

const authAxios = () => axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors'
});

export default authAxios;
