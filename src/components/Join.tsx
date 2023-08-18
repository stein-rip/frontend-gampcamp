import "./Join.css";

const Join = () => {
	return (
		<div className="Join">
			<header>
				<h1>
					Interested in volunteering with Gamp Camp? Complete an application to
					join our team of clinic escorts.
				</h1>
			</header>
			<div className="VestImage"></div>
			<h4>
				Your information will be kept private among a select group of members
				within our vetting team. We may reach out to you to gather additional
				information for the protection of our volunteers, patients, and clinic.{" "}
			</h4>
			<a
				className="Connect"
				target="_blank"
				rel="noopener noreferrer"
				href="https://docs.google.com/forms/d/e/1FAIpQLSfMHVB-PuHScZfVsnUufWZ5gKfP4K8UzTtBotZDOvjsqdFSSA/viewform">
				Volunteer Interest Form
			</a>
		</div>
	);
};

export default Join;
