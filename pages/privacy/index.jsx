import React from "react";
import Head from "next/head";
import Link from "next/link";
import ObfuscatedEmail from "components/ObfuscatedEmail";

export default function Privacy() {
	return (
		<div className="page">
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<section className="page__section">
				<div className="markdown">
					<h2>Privacy Policy</h2>
					<p>
						This privacy policy sets out how Lyket uses and protects any
						information you give us when you use this website, register for a
						Lyket account, or interact with a website that integrates Lyket
						buttons. Lyket is committed to ensuring that your privacy is
						protected.
					</p>
					<p>
						The data controller for Lyket is Irene Oppo, reachable at{" "}
						<ObfuscatedEmail />.
					</p>
					<p>
						Lyket may change this policy from time to time by updating this
						page. You should check this page from time to time to ensure that
						you are happy with any changes. This policy was last updated on
						29/07/2026.
					</p>
					<p>
						This policy is split in two parts, depending on who you are: a
						person with a Lyket account, or a visitor of a website that uses
						Lyket buttons.
					</p>

					<h4>If you have a Lyket account</h4>
					<p>
						If you register for a Lyket account, we collect the information you
						submit — name, email, role and company — and a cookie is stored to
						authenticate you on future visits.
					</p>
					<p>
						We will save the information you submit to us until you remove or
						change it, or until you remove your user account. Information
						related to the login method you choose is saved until you remove
						your account.
					</p>
					<p>We use this information to:</p>
					<ul>
						<li>
							Provide the service, including billing (via Stripe) and
							transactional email (via Twilio SendGrid)
						</li>
						<li>
							Keep internal records, mostly to combat spam and prevent abuse
						</li>
						<li>Improve our products and services</li>
						<li>
							Rarely, send email about new features or other information which
							we think you may find interesting, using the email address you
							have provided
						</li>
					</ul>
					<p>
						If you subscribe to a paid plan, you also agree to{" "}
						<a href="https://stripe.com/privacy">Stripe's privacy policy</a>.
					</p>

					<h4>If you're a visitor of a website that uses Lyket</h4>
					<p>
						When you use the like/clap/rating buttons on a website integrating
						Lyket, no personal information is requested from you directly, and
						no cookie is set on your device. To recognise if you have already
						voted and prevent duplicate votes, Lyket normally relies on a
						randomly generated session identifier stored in your browser's local
						storage.
					</p>
					<p>
						Separately, we process a{" "}
						<strong>hashed version of your IP address</strong> for two purposes:
						(a) as an anti-abuse signal, to limit the number of sessions from a
						single IP address over a rolling 30-day window; and (b) if the
						website disables the session identifier mechanism, as the vote
						identifier itself — the only signal available in that case to
						recognise repeat votes. In both cases we never store the IP address
						in clear text, and the hashed value cannot reasonably be reversed
						back into your original IP address.
					</p>
					<p>
						For this data, Lyket acts as a data processor on behalf of the
						website that embeds the buttons — that website is the data
						controller for its own visitors, and its own privacy policy is the
						primary reference for your rights as a visitor. We document our own
						handling of this data here for transparency.
					</p>

					<h4>Data retention</h4>
					<ul>
						<li>
							<strong>Vote data</strong> (the hashed IP or session identifier
							recorded against a specific vote) is retained for as long as the
							account that owns the corresponding project is active.
						</li>
						<li>
							<strong>Anti-abuse counters</strong> (hashed IPs used to limit
							sessions per IP) are kept on a rolling <strong>30-day</strong>{" "}
							basis and expire automatically, regardless of account status.
						</li>
						<li>
							Accounts that remain unused for <strong>12 months</strong> are
							deleted, together with the associated vote data, unless the
							customer requests earlier deletion.
						</li>
						<li>
							You may request deletion of your account and associated data at
							any time by contacting us, see{" "}
							<a href="https://lyket.dev/terms">Terms of use</a>.
						</li>
						<li>
							When an account is deleted, all of its data — profile
							information, vote and button data, and anti-abuse counters — is
							completely erased, not just deactivated.
						</li>
						<li>
							After account deletion, data may persist in backups for up to two
							weeks before being permanently purged.
						</li>
					</ul>

					<p>
						Your personal data will not be shared with any third party except
						when:
					</p>
					<ul>
						<li>requested by law enforcement;</li>
						<li>
							it is necessary to protect our rights, safety, and property; or
						</li>
						<li>
							it is necessary to diagnose and fix problems with the service;
						</li>
						<li>
							it is processed by one of our subprocessors, strictly to provide
							the service — see our{" "}
							<Link href="/subprocessors">subprocessors page</Link> for the
							current list.
						</li>
					</ul>

					<h4>Subprocessors and international transfers</h4>
					<p>
						Lyket's core infrastructure — application server, database, and
						cache — is hosted in the EU (Ireland). A few subprocessors we rely
						on for billing, email, and error monitoring are based in the
						United States; where personal data is transferred to them, we rely
						on the EU-U.S. Data Privacy Framework (and its UK and Swiss
						extensions) or, where that doesn't apply, Standard Contractual
						Clauses.
					</p>
					<p>
						For the full list of subprocessors, what each one does, and where
						they're located, see our{" "}
						<Link href="/subprocessors">subprocessors page</Link>.
					</p>

					<h4>Your rights</h4>
					<p>
						If you are located in the EEA, UK, or Switzerland, you have the
						right to access, correct, delete, or export your personal data, and
						to object to or restrict certain processing. To exercise these
						rights, contact us at <ObfuscatedEmail />.
					</p>
					<p>
						You also have the right to lodge a complaint with your national data
						protection authority if you believe your data is not being handled
						in accordance with the GDPR — for example, the{" "}
						<a href="https://www.garanteprivacy.it/">
							Garante per la Protezione dei Dati Personali
						</a>{" "}
						in Italy.
					</p>

					<h4>Data Processing Agreement</h4>
					<p>
						Business customers who need a signed Data Processing Agreement
						pursuant to Art. 28 GDPR can request one by contacting us.
					</p>
				</div>
			</section>
		</div>
	);
}
