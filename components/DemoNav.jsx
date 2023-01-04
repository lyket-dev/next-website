import { useState, useEffect } from "react";
import Link from "next/link";

export default function DemoNav() {
	return (
		<div className="navbar__group">
			<span className="navbar__link">Docs</span>
			<div className="navbar__pane">
				<Link href="/react">React</Link>
				<Link href="/html">HTML</Link>
				<Link href="/api">API</Link>
			</div>
		</div>
	);
}
