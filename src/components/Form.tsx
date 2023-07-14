import { useState, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Form.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";

const Form = () => {
	const { user, profile, addProfileHandler } = useContext(AuthContext);
	// console.log(profile);

	const navigate = useNavigate();

	const [subscription, setSubscription] = useState("");

	const [error, setError] = useState("");

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault();
		if (user) {
			try {
				await addProfileHandler({
					google_id: user.uid,
					display_name: user.displayName,
					photo_url: user.photoURL,
					email: user.email,
				});
				navigate(`/`);
			} catch (error) {
				setError("Failed to add profile. Please try again.");
			}
		}
	};

	return (
		<div className="Form">
			<form onSubmit={(e) => handleSubmit(e)}>
				<button>submit</button>
				<button>DOMINATE</button>
			</form>
			{error && <p className="error">{error}</p>}
		</div>
	);
};
export default Form;
