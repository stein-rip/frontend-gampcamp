import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import { addProfile, getProfile } from "../services/ProfileService";
import { auth } from "../firebaseConfig";

function AuthContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [profile, setProfile] = useState<Profile | null>(null);
	const addProfileHandler = async (newProfile: Profile): Promise<void> => {
		await addProfile(newProfile);
		const profile = await getProfile(newProfile.google_id);
		setProfile(profile);
	};
	useEffect(() => {
		return auth.onAuthStateChanged(async (newUser) => {
			setUser(newUser);
			if (newUser) {
				const profile = await getProfile(newUser.uid);
				if (newUser) {
					setProfile(profile);
				}
			} else {
				setProfile(null);
			}
		});
	}, []);
	return (
		<AuthContext.Provider value={{ user, profile, addProfileHandler }}>
			{children}
		</AuthContext.Provider>
	);
}
export default AuthContextProvider;
