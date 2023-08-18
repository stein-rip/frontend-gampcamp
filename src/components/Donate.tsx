import "./Donate.css";

const Donate = () => {
	return (
		<div className="Donate">
			<header>
				<h1>
					Thank you for helping us protect patients and create a welcoming
					community space. We’ve been able to create positive change for
					everybody involved so far and we would love to continue to do so!
				</h1>
				<h3>There are many ways you can support our work.</h3>
			</header>
			<div className="Options">
				<div className="Givebutter">
					<a
						className="Givebutter"
						target="_blank"
						rel="noopener noreferrer"
						href="https://givebutter.com/kru286">
						Donate
					</a>
				</div>
				<div className="Shop">
					<a
						className="Shop"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.bonfire.com/store/gamp-camp/">
						Shop
					</a>
				</div>
				<div className="WishList">
					<a
						className="WishList"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.amazon.com/hz/wishlist/ls/7DV28L8F596L?ref_=wl_share">
						WishList
					</a>
				</div>
			</div>
		</div>
	);
};

export default Donate;
