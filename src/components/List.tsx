import Shoutout from "../models/Shoutout";
import ShoutCard from "./ShoutCard";
import "./List.css";

interface Props {
	shoutoutsProp: Shoutout[];
}

const List = ({ shoutoutsProp }: Props) => {
	return (
		<ul className="List">
			{shoutoutsProp.map((shoutout) => (
				<ShoutCard shoutoutProp={shoutout} key={shoutout._id} />
			))}
		</ul>
	);
};

export default List;
