import "./NewsCard.css";

const NewsCard = () => {
	return (
		<div className="NewsCard">
			<header className="Intro">
				<h4>
					Read what others are saying about us.
					<br />
					For press inquiries, contact us at info@gampcamp.org
				</h4>
				<div className="Logo-News"></div>
			</header>

			<div className="Article 1">
				<h1>
					Abortion-rights advocates see increase in volunteers after Supreme
					Court decision
				</h1>
				<h3>EVE SAMPSON, DETROIT FREE PRESS</h3>
				<img
					src="https://www.freep.com/gcdn/presto/2022/07/04/PDTF/d2a768e2-8305-4b44-8bb4-005b60b98409-ClinicEscorts_070222_ES02.jpeg?width=1320&height=654&fit=crop&format=pjpg&auto=webp"
					alt="React Image"
				/>
				<h6>Eric Seals, Detroit Free Press</h6>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.freep.com/restricted/?return=https%3A%2F%2Fwww.freep.com%2Fstory%2Fnews%2Flocal%2Fmichigan%2Fdetroit%2F2022%2F07%2F06%2Fabortion-clinic-escorts-see-volunteers-increase%2F7804617001%2F">
					read more
				</a>
			</div>
			<div className="Article 2">
				<h1>
					Rainbow umbrellas, kazoos and tenacity: On the front line with Metro
					Detroit abortion clinic defenders
				</h1>
				<h3>EMILY ROTH, WWJ NEWSRADIO 950</h3>
				<img
					src="https://images.radio.com/aiu-media/IMG0372-f9a42a28-440d-473d-bce4-cf4a8561b843.jpg?width=800"
					alt="React Image"
				/>
				<h6></h6>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.audacy.com/wwjnewsradio/news/local/on-front-line-with-metro-detroit-abortion-clinic-defenders">
					read more
				</a>
			</div>
		</div>
	);
};

export default NewsCard;
