import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./ShoutCard.css";

interface Props {
	shoutoutProp: Shoutout;
}

const ShoutCard = ({ shoutoutProp }: Props) => {
	return (
		<li className="ShoutCard">
			<p>
				To: <Link to={`/user/${shoutoutProp.to}`}>{shoutoutProp.to}</Link>
			</p>
			<p>
				From: <img src={shoutoutProp.pic} alt={shoutoutProp.from} />{" "}
				<Link to={`/user/${shoutoutProp.from}`}>{shoutoutProp.from}</Link>
			</p>
			<p>Text: {shoutoutProp.text}</p>
		</li>
	);
};

export default ShoutCard;
