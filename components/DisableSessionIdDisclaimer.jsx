import React from "react";

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
