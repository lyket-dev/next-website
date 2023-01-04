import React, { useState } from "react";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";
import CodeBox from "./CodeBox";
import Confetti from "react-confetti";

const buttons = {
	clap: ClapButton,
	like: LikeButton,
	updown: UpdownButton,
};

const HomeSandbox = ({ selectedTab, selectedTech, showMenu = true }) => {
	const [selected, setButton] = useState(selectedTab || "like");
	const [showConfetti, setShowConfetti] = useState(false);
	const Button = buttons[selected];

	return (
		<>
			{showMenu && (
				<div className="space--bottom-4">
					<div className="menu">
						<button
							className={`menu__link${selected === "clap" ? " active" : " "}`}
							onClick={(e) => {
								e.preventDefault();
								setButton("clap");
							}}
						>
							Clap
						</button>
						<span>|</span>

						<button
							className={`menu__link${selected === "like" ? " active" : " "}`}
							onClick={(e) => {
								e.preventDefault();
								setButton("like");
							}}
						>
							Like
						</button>
						<span>|</span>

						<button
							className={`menu__link${selected === "updown" ? " active" : " "}`}
							onClick={(e) => {
								e.preventDefault();
								setButton("updown");
							}}
						>
							Updown
						</button>
					</div>
				</div>
			)}
			<div className="flag">
				{showConfetti && (
					<Confetti width={2000} height={500} recycle={false} gravity={0.4} />
				)}
				<div className="flag__left">
					<CodeBox currentButton={selected} selectedTech={selectedTech} />
				</div>
				<div className="flag__right">
					<div className="lyket__container">
						<div className={`lyket__${selected}`}>
							<Button
								onPress={(buttonData) => {
									if (
										buttonData.attributes.userLiked ||
										buttonData.attributes.userClaps
									) {
										setShowConfetti(true);
										setTimeout(() => setShowConfetti(false), 3000);
									} else {
										setShowConfetti(false);
									}
								}}
								onPressUp={(buttonData) => {
									if (buttonData.attributes.userVoteDirection > 0) {
										setShowConfetti(true);
										setTimeout(() => setShowConfetti(false), 3000);
									} else {
										setShowConfetti(false);
									}
								}}
								namespace="homepage"
								id={`everybody-${selected}-now`}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeSandbox;
