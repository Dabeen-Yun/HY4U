import { atom } from "recoil";

export interface UserData {
  name: string;
}

export const userState = atom<UserData>({
  key: "userState",
  default: {
    name: "",
  },
});
