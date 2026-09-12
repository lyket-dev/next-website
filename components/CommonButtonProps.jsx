import React from "react";
import Link from "next/link";

export function DisableSessionIdDisclaimer() {
  return (
    <>
      {" "}
      If Lyket is the only tracking technology on the page, this typically
      falls under the "strictly necessary" exception — no consent banner
      needed for it, though it should still be listed in your cookie policy.
      If you run other trackers, your page may still need a banner — just not
      because of Lyket.
    </>
  );
}

export function RecaptchaCookieNote() {
  return (
    <>
      {" "}
      If you also enable reCAPTCHA, note it sets its own cookies independently
      of this setting.
    </>
  );
}

export function ProviderRequiredProps() {
  return (
    <li>
      <strong>apiKey</strong>: <strong>string</strong> - You can get your
      public API key by registering on{" "}
      <a href="https://app.lyket.dev">Lyket</a>.
    </li>
  );
}

export function ProviderOptionalProps() {
  return (
    <>
      <li>
        <p>
          <strong>
            theme: Record&lt;'colors' | 'fonts' , Record&lt;string,
            string&gt;&gt;
          </strong>{" "}
          - Allows you to change the default buttons colors and fonts. It
          doesn't apply to all templates. Read more about it in the{" "}
          <Link href="#styling">Styling buttons</Link> section at the end of
          this document.
        </p>
      </li>
      <li>
        <p>
          <strong>recaptchaSiteKey: string</strong> - If you enabled reCAPTCHA
          in the private area's user settings, you need to provide your
          reCAPTCHA public key, otherwise your buttons will result as
          unauthorized. Read more in the{" "}
          <Link href="#recaptcha">reCAPTCHA</Link> section at the end of this
          document.
          <RecaptchaCookieNote />
        </p>
      </li>
      <li>
        <p>
          <strong>disableSessionId: boolean</strong> <strong>Default: false</strong>{" "}
          - If set to <em>true</em> Lyket won't store a unique session ID for
          your visitors making them anonymous. Lyket will then discriminate
          visitors (to tell if they already liked a button or not) only based
          on the IP address, writing no cookie or local storage entry.
          <DisableSessionIdDisclaimer />
        </p>
      </li>
    </>
  );
}

export function ButtonIdRequiredProp() {
  return (
    <li>
      <strong>id</strong>: <strong>string</strong> - The API uses the ID to
      find a button. It should be unique for namespace. It accepts an
      alphanumeric string with maximum 50 characters.
    </li>
  );
}

export function NamespaceOptionalProp() {
  return (
    <li>
      <p>
        <strong>namespace</strong>: <strong>string</strong> - Giving a
        namespace is useful to keep buttons organised, and can be used to
        fetch statistics. Check the API docs for more information.
      </p>
    </li>
  );
}

export function HideCounterOptionalProp() {
  return (
    <li>
      <p>
        <strong>hideCounterIfLessThan</strong>: <strong>number</strong> - You
        may want to hide the counter if you are not getting enough feedback.
        Specify the number of votes/claps/likes you want to receive before
        showing the counter.
      </p>
    </li>
  );
}
