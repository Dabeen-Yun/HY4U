import { atom } from "recoil";

export interface Cookies {
  access_token: string;
}

export const loginState = atom<Cookies[]>({
  key: "loginState",
  default: [
    {
      access_token: "undefined",
    },
  ],
});
