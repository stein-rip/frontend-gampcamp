import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Profile from "./components/Profile";

import NewsCard from "./components/NewsCard";
import Donate from "./components/Donate";
import Join from "./components/Join";
import About from "./components/About";
import Connect from "./components/Connect";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/about" element={<About />} />
					<Route path="/join" element={<Join />} />
					<Route path="/newscard" element={<NewsCard />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/connect" element={<Connect />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
