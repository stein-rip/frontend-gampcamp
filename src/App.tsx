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

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" />} />

					<Route path="/newscard" element={<NewsCard />} />
					<Route path="/donate" element={<Donate />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
