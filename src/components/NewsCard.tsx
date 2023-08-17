import "./NewsCard.css";

const NewsCard = () => {
	return (
		<div className="NewsCard">
			<div className="Intro">
				Read what others are saying about us. For press inquiries, contact us.
			</div>
			<div className="Article 1">
				<h1>
					Abortion-rights advocates see increase in volunteers after Supreme
					Court decision
				</h1>
				<h2>EVE SAMPSON, DETROIT FREE PRESS</h2>
				<p>read more</p>
			</div>
			<div className="Article 2">
				<h1>
					Rainbow umbrellas, kazoos and tenacity: On the front line with Metro
					Detroit abortion clinic defenders
				</h1>
				<h2>EMILY ROTH, WWJ NEWSRADIO 950</h2>
				<p>read more</p>
			</div>
			{/* <img src="Favicon.ico" alt="Gamp Camp Logo" /> */}
		</div>
	);
};

export default NewsCard;
