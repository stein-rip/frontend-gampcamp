// import "./Footer.css";
// import Home from "./Home";
// import {Routes, Route, useNavigate} from 'react-router-dom';

// export default function App() {
//   const navigate = useNavigate();

//   const navigateToProfiles = () => {
//     // 👇️ navigate to /contacts
//     navigate('/profiles');
//   };

//   const navigateHome = () => {
//     // 👇️ navigate to /
//     navigate('/Home');
//   };

// const Footer = () => {
// 	return (
// 		<div className="Footer">
// 			<button className="home-btn">home</button>
// 			<button className="news-btn">news</button>
// 			<button className="shop-btn">shop</button>
// 			<button className="contact-btn">contact</button>
// 			<button className="map-btn">site map</button>
// 			<button className="donate-btn">donate</button>
// 		</div>
// 	);
// };

// export default Footer;

import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Home from "./ShoutHome";
import NewsCard from "./NewsCard";
import Contact from "./Contact";
import Donate from "./Donate";
import Shop from "./Shop";

export default function App() {
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
		<div>
			<div>
				<button className="home-btn" onClick={navigateHome}>
					Members
				</button>
				<button className="news-btn" onClick={navigateNews}>
					News
				</button>
				<button className="shop-btn" onClick={navigateShop}>
					Shop
				</button>
				<button className="contact-btn" onClick={navigateContact}>
					Contact
				</button>
				<button className="donate-btn" onClick={navigateDonate}>
					Donate
				</button>
				<button className="profile-btn" onClick={navigateToProfiles}>
					Profile
				</button>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/newscard" element={<NewsCard />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</div>
	);
}
