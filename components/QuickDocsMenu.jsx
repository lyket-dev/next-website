import React from "react";
import ActiveLink from "components/ActiveLink";

export default function QuickDocsMenu() {
	return (
		<div className="menu">
			<ActiveLink href="/docs/react" className="menu__link">
				<>React</>
			</ActiveLink>
			<span>|</span>
			<ActiveLink
				href="/docs/html"
				title="Like button HTML"
				className="menu__link"
			>
				<>HTML</>
			</ActiveLink>
			<span>|</span>
			<ActiveLink href="/docs/wordpress" className="menu__link">
				<>Wordpress</>
			</ActiveLink>
			<span>|</span>
			<ActiveLink href="/docs/api" className="menu__link">
				<>API</>
			</ActiveLink>
		</div>
	);
}

export function QuickReactDocsMenu() {
	return (
		<div className="menu">
			<ActiveLink href="/docs/react/like-button-react" className="menu__link">
				<>Like</>
			</ActiveLink>
			<span>|</span>
			<ActiveLink
				href="/docs/react/like-dislike-button-react"
				className="menu__link"
			>
				<>Like/dislike</>
			</ActiveLink>
			<span>|</span>
			<ActiveLink
				href="/docs/react/applause-button-react"
				className="menu__link"
			>
				<>Applause</>
			</ActiveLink>
			<span>|</span>
			<ActiveLink
				href="/docs/react/rating-component-react"
				className="menu__link"
			>
				<>Rating</>
			</ActiveLink>
		</div>
	);
}
