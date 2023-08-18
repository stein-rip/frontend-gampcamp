import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile";

import NewsCard from "./NewsCard";

import Donate from "./Donate";

import "./Footer.css";
import Join from "./Join";
import About from "./About";

const Footer = () => {
	const navigate = useNavigate();

	const navigateToProfiles = () => {
		// 👇️ navigate to /contacts
		navigate("/profiles");
	};

	const navigateAbout = () => {
		// 👇️ navigate to /
		navigate("/about");
	};

	const navigateDonate = () => {
		// 👇️ navigate to /
		navigate("/donate");
	};

	const navigateNews = () => {
		// 👇️ navigate to /
		navigate("/newscard");
	};

	const navigateJoin = () => {
		// 👇️ navigate to /
		navigate("/join");
	};
	return (
		<div className="Footer">
			<nav>
				<ul>
					<li>
						<button className="home-btn" onClick={navigateAbout}>
							ABOUT
						</button>
					</li>

					<li>
						<button className="donate-btn" onClick={navigateDonate}>
							SUPPORT
						</button>
					</li>
					<li>
						<button className="news-btn" onClick={navigateNews}>
							PRESS
						</button>
					</li>
					<li>
						<button className="join-btn" onClick={navigateJoin}>
							JOIN
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Footer;
<Routes>
	<Route path="/newscard" element={<NewsCard />} />
	<Route path="/donate" element={<Join />} />
	<Route path="/donate" element={<Donate />} />
	<Route path="/profile" element={<About />} />
</Routes>;
