import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>#100DaysOfWorkout</h4>
					<h1>Join The Legends of the Fitness World</h1>
					<p>
					Fitness is more than a routine; it's a lifestyle that nurtures the body and mind. Engaging in regular physical activity isn't just about sculpting muscles or shedding pounds; it's about fostering resilience, boosting mental acuity, and enhancing overall well-being. The journey toward fitness isn't solely measured by the distance covered or weights lifted but by the commitment to self-care and vitality
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
