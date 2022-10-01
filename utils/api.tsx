import axios from "axios";
import { useCookies } from "react-cookie";
import { loginState } from "../recoil/atom/login";

export const client = axios.create({
  baseURL: "http://cashup.iptime.org:8000/",
});

export const updateToken = (access_token: any) => {
  if (access_token !== "undefined") {
    client.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  }
};
