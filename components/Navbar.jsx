import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "public/icons/menu.svg";
import Close from "public/icons/close.svg";
import Arrow from "public/icons/outline/arrow-right.svg";
import { useRouter } from "next/router";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();

	useEffect(() => setMenuOpen(false), [router.pathname]);

	return (
		<div className="navbar">
			<Link href="/" className="navbar__logo">
				<div className="navbar__logo--mobile" />
				<div className="navbar__logo--desk">LYKET</div>
			</Link>
			<ul className={`navbar__container${menuOpen ? "--visible" : ""}`}>
				<button className="navbar__toggler" onClick={() => setMenuOpen(false)}>
					<Close />
				</button>
				<li className="navbar__item">
					<Link href="/templates" className="navbar__link">
						Templates
					</Link>
				</li>
				<li className="navbar__item">
					<div className="navbar__group">
						<span className="navbar__link">Docs</span>
						<div className="navbar__pane">
							<Link href="/docs/react" className="navbar__pane__link">
								<strong>React</strong>
								<p>Add like buttons in a React project</p>
							</Link>
							<Link
								href="/docs/html"
								title="Like button HTML"
								className="navbar__pane__link"
							>
								<strong>HTML</strong>
								<p>Add HTML like buttons to any website</p>
							</Link>
							<Link href="/docs/wordpress" className="navbar__pane__link">
								<strong>Wordpress</strong>
								<p>Like button Wordpress plugin</p>
							</Link>
							<Link href="/docs/api" className="navbar__pane__link">
								<strong>API</strong>
								<p>All available endpoints</p>
							</Link>
						</div>
					</div>
				</li>
				<li className="navbar__item">
					<Link href="/pricing" className="navbar__link">
						Pricing
					</Link>
				</li>
				<li className="navbar__item">
					<Link href="/contact" className="navbar__link">
						Contact us
					</Link>
				</li>
				<li className="navbar__item">
					<a className="button" href={`${process.env.appBaseUrl}/signup`}>
						Register
						<Arrow />
					</a>
				</li>
			</ul>
			<button className="navbar__toggler" onClick={() => setMenuOpen(true)}>
				<Menu />
			</button>
		</div>
	);
}
