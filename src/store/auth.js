import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "auth" });

export const authState = atom({
  key: "authState",
  default: {
    isAuth: false,
    user: null,
  },
  effects_UNSTABLE: [persistAtom],
});
