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
