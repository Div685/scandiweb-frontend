import axios from "axios";
import apiUrl from "./apiURL";

const authAxios = () => axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  mode: 'cors'
});

export default authAxios;
