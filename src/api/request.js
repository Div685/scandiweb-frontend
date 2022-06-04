import axios from "axios";
import apiUrl from "./apiURL";

const authAxios = () => axios.create({
  baseURL: apiUrl,
  data: {},
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors'
});

export default authAxios;
