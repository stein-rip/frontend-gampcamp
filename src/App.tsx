import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import NewsCard from "./components/NewsCard";
import Donate from "./components/Donate";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<p>© 2023 Gamp Camp</p>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/newscard" element={<NewsCard />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
