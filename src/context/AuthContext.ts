
import { createContext } from "react";
import Profile from "../models/Profile";
import { User } from "firebase/auth";

export interface AuthContextModel {
  user: User | null;
  profile: Profile | null;
  addProfileHandler: (newProfile: Profile) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
  addProfileHandler: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
