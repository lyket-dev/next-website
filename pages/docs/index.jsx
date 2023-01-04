import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";

export default function Docs() {
	return (
		<div className="page">
			<section className="page__section">
				<div className="docs__menu__container">
					<div className="docs__menu__container">
						<QuickDocsMenu />
					</div>
				</div>
				<div className="docs__title__container">
					<h4 className="docs__title">Lyket documentation</h4>
					<QuickDocsMenu />
				</div>
			</section>
		</div>
	);
}
