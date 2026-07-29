import React from "react";

export default function Privacy() {
  return (
    <div className="page">
      <section className="page__section">
        <div className="markdown">
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy sets out how Lyket uses and protects any
            information that you give Lyket when you use this website or
            integrate our service. Lyket is committed to ensuring that your
            privacy is protected and it is one of the first priorities of our
            service.
          </p>
          <p>
            The data controller for Lyket is <strong>Irene Oppo</strong>,
            reachable at{" "}
            <a href="mailto:lyket.dev@gmail.com">lyket.dev@gmail.com</a>.
          </p>
          <p>
            Should we ask you to provide certain information by which you can
            be identified when using this website, then you can be assured
            that it will only be used in accordance with this privacy
            statement.
          </p>
          <p>
            Lyket may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you are happy with any changes. This policy was last updated on
            29/07/2026. We may collect the following information:
          </p>
          <ul>
            <li>
              Your IP address — only a hashed version is retained, for abuse
              prevention (see below)
            </li>
            <li>
              A randomly generated session identifier stored in your
              browser's local storage, if you interact with a like/clap/rating
              button
            </li>
            <li>Your name, email, role and company if you submit a form</li>
          </ul>

          <h4>When using the buttons</h4>
          <p>
            When you use the like/clap/rating buttons on a website integrating
            Lyket, no personal information is requested from you directly, and
            no cookie is set on your device. To recognise if you have already
            voted and prevent duplicate votes, Lyket relies on a randomly
            generated session identifier stored in your browser's local
            storage. Separately, we process a{" "}
            <strong>hashed version of your IP address</strong> to detect and
            prevent abuse (such as spam or automated voting) — we never store
            the IP address itself in clear text, and the hashed value cannot
            reasonably be reversed back into your original IP address.
          </p>
          <p>
            We will save the information you submit to us until you remove or
            change the information, or until you remove your user account.
            Information related to the login method you choose is saved until
            you remove your user account.
          </p>

          <h4>Data retention</h4>
          <ul>
            <li>
              <strong>Vote and button data</strong> (hashed IPs and related
              counters) is retained for as long as the account that owns the
              corresponding project is active.
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
              After account deletion, data may persist in backups for up to
              two weeks before being permanently purged.
            </li>
          </ul>

          <h4>What we do with the information we gather</h4>
          <p>
            We require this information to understand your needs and provide
            you with a better service, and in particular for the following
            reasons:
          </p>
          <ul>
            <li>
              Internal record keeping, mostly to combat spam and prevent abuse
            </li>
            <li>We may use the information to improve our products and services</li>
            <li>
              We may rarely send email about new features or other
              information which we think you may find interesting using the
              email address which you have provided
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
              it is processed by one of our subprocessors listed below,
              strictly to provide the service.
            </li>
          </ul>

          <h4>International data transfers</h4>
          <p>
            Lyket's infrastructure is primarily hosted in the United States.
            Where personal data (including hashed IPs) is transferred from the
            EEA/UK/Switzerland to the United States, we rely on the following
            legal mechanisms:
          </p>
          <ul>
            <li>
              <strong>Heroku (Salesforce, Inc.)</strong>: covered by
              Salesforce's active self-certification under the EU-U.S. Data
              Privacy Framework, the UK Extension to the EU-U.S. DPF, and the
              Swiss-U.S. DPF.
            </li>
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
              For any subprocessor not certified under the DPF, we rely on the
              Standard Contractual Clauses as incorporated in that
              subprocessor's own data processing agreement.
            </li>
          </ul>

          <h4>Subprocessors</h4>
          <p>We use the following subprocessors to provide the Lyket service:</p>
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
                  <td>US — EU-U.S. DPF</td>
                </tr>
                <tr>
                  <td>Redis Cloud (Redis, Inc.)</td>
                  <td>Vote and button counter storage</td>
                  <td>Hashed IPs, vote counters</td>
                  <td>See Redis subprocessor list / DPA</td>
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
              </tbody>
            </table>
          </div>
          <p>
            We will update this table whenever we add or remove a
            subprocessor. If you would like to be notified of changes, please
            contact us.
          </p>

          <h4>External services</h4>
          <ol>
            <li>
              When you log in, a cookie is stored to authenticate you on
              future visits.
            </li>
            <li>
              If you subscribe, you agree to{" "}
              <a href="https://stripe.com/privacy">Stripe's privacy policy</a>
              .
            </li>
            <li>
              Lyket data is stored in the United States (
              <a href="https://www.heroku.com/policy/security">
                Heroku security policy
              </a>
              ).
            </li>
          </ol>

          <h4>Your rights</h4>
          <p>
            If you are located in the EEA, UK, or Switzerland, you have the
            right to access, correct, delete, or export your personal data,
            and to object to or restrict certain processing. To exercise
            these rights, contact us at{" "}
            <a href="mailto:lyket.dev@gmail.com">lyket.dev@gmail.com</a>.
          </p>
          <p>
            You also have the right to lodge a complaint with your national
            data protection authority if you believe your data is not being
            handled in accordance with the GDPR — for example, the{" "}
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
