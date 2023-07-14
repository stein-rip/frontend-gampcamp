import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import Welcome from "./Welcome";

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<Welcome />
			<Footer />
		</div>
	);
};

export default Home;
