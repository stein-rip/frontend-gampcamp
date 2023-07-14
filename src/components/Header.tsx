// export default Header;
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";

const Header = () => {
	const { user, profile } = useContext(AuthContext);

	return (
		<header className="Header">
			<div className="SignInOut">
				{user ? (
					<Link to="/">
						<div className="greeting">hi {user.displayName}!</div>
						<button onClick={signOut}>SIGN OUT</button>
					</Link>
				) : (
					<Link to="/">
						<button onClick={signInWithGoogle}>SIGN IN</button>
					</Link>
				)}
			</div>
		</header>
	);
};
const CustomLink = ({ to, children }: any) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

export default Header;
