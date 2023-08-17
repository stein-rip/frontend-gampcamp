import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Home from "./ShoutHome";
import NewsCard from "./NewsCard";
import Contact from "./Contact";
import Donate from "./Donate";
import Shop from "./Shop";
import "./Footer.css";

const Footer = () => {
	const navigate = useNavigate();

	const navigateToProfiles = () => {
		// 👇️ navigate to /contacts
		navigate("/profiles");
	};

	const navigateHome = () => {
		// 👇️ navigate to /
		navigate("/home");
	};

	const navigateDonate = () => {
		// 👇️ navigate to /
		navigate("/donate");
	};

	const navigateShop = () => {
		// 👇️ navigate to /
		navigate("/shop");
	};

	const navigateNews = () => {
		// 👇️ navigate to /
		navigate("/newscard");
	};

	const navigateContact = () => {
		// 👇️ navigate to /
		navigate("/contact");
	};
	return (
		<div className="Footer">
			<nav>
				<ul>
					<li>
						<button className="news-btn" onClick={navigateNews}>
							PRESS
						</button>
					</li>
					<li>
						<button className="shop-btn" onClick={navigateShop}>
							SHOP
						</button>
					</li>
					<li>
						<button className="home-btn" onClick={navigateHome}>
							ABOUT
						</button>
					</li>

					<li>
						<button className="donate-btn" onClick={navigateDonate}>
							SUPPORT
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Footer;
<Routes>
	<Route path="/home" element={<Home />} />
	<Route path="/newscard" element={<NewsCard />} />
	<Route path="/contact" element={<Contact />} />
	<Route path="/shop" element={<Shop />} />
	<Route path="/donate" element={<Donate />} />
	<Route path="/profile" element={<Profile />} />
</Routes>;
