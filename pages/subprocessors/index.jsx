import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Subprocessors() {
	return (
		<div className="page">
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<section className="page__section">
				<div className="markdown">
					<h2>Subprocessors</h2>
					<p>
						This page lists the subprocessors Lyket relies on to provide its
						service — what each one does, what data it touches, and where
						it's located. See our{" "}
						<Link href="/privacy">privacy policy</Link> for the full picture
						of how we handle data.
					</p>
					<p>
						<em>Last updated: 16 September 2026.</em>
					</p>

					<h4>International data transfers</h4>
					<p>
						Lyket's core infrastructure — application server, database, and
						cache — is hosted in the EU (Ireland, eu-west-1 region). Hashed
						IPs, account data, and vote/button data processed for the service
						do not leave the EEA.
					</p>
					<p>
						A few subprocessors we use for billing, email, and error
						monitoring are based in the United States. Where personal data is
						transferred to them, we rely on the following legal mechanisms:
					</p>
					<ul>
						<li>
							<strong>Stripe</strong>: covered by Stripe's active
							self-certification under the EU-U.S. Data Privacy Framework, the
							UK Extension, and the Swiss-U.S. DPF. Stripe only processes
							billing information of paying Lyket customers, not website
							visitor data.
						</li>
						<li>
							<strong>Twilio SendGrid</strong>: covered by Twilio's active
							self-certification under the EU-U.S. Data Privacy Framework, the
							UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF.
						</li>
						<li>
							<strong>Rollbar</strong>: covered by Rollbar's active
							self-certification under the EU-U.S. Data Privacy Framework, the
							UK Extension, and the Swiss-U.S. DPF.
						</li>
						<li>
							For any subprocessor not certified under the DPF, we rely on the
							Standard Contractual Clauses as incorporated in that
							subprocessor's own data processing agreement.
						</li>
					</ul>

					<h4>Subprocessor list</h4>
					<div className="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>Subprocessor</th>
									<th>Purpose</th>
									<th>Data involved</th>
									<th>Location / transfer mechanism</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Heroku (Salesforce, Inc. / AWS)</td>
									<td>Hosting, database (Postgres)</td>
									<td>Hashed IPs, account data</td>
									<td>EU (Ireland, eu-west-1) — no international transfer</td>
								</tr>
								<tr>
									<td>Redis Cloud (Redis, Inc.)</td>
									<td>Vote and button counter storage</td>
									<td>Hashed IPs, vote counters</td>
									<td>EU (Ireland, eu-west-1) — no international transfer</td>
								</tr>
								<tr>
									<td>Stripe</td>
									<td>Payment processing</td>
									<td>Billing data of paying customers only</td>
									<td>US — EU-U.S. DPF</td>
								</tr>
								<tr>
									<td>Twilio SendGrid</td>
									<td>Transactional email</td>
									<td>Email address of account holders</td>
									<td>US — EU-U.S. DPF</td>
								</tr>
								<tr>
									<td>Rollbar</td>
									<td>Error monitoring</td>
									<td>
										Internal numeric account ID of the Lyket account that owns
										the affected button — no visitor IP address or session ID
									</td>
									<td>US — EU-U.S. DPF</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>
						We will update this table whenever we add or remove a
						subprocessor. If you would like to be notified of changes, please
						contact us.
					</p>
				</div>
			</section>
			<style jsx>{`
        .table-wrapper {
          overflow-x: auto;
          margin-bottom: 32px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          text-align: left;
          padding: 8px 16px 8px 0;
          border-bottom: 1px solid #ddd;
          vertical-align: top;
        }
        th {
          font-weight: 700;
          white-space: nowrap;
        }
      `}</style>
		</div>
	);
}
