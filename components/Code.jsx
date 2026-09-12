import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
// Do not delete
import PrismJsx from "prismjs/components/prism-jsx.min";
import Line from "prismjs/plugins/line-numbers/prism-line-numbers.js";

export default function Code({ children, language }) {
	const codeRef = useRef(null);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (typeof document !== undefined && children !== null) {
			Prism.highlightAll(children);
		}
	}, [children, Prism]);

	const handleCopy = () => {
		navigator.clipboard.writeText(codeRef.current?.textContent || "");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="code-block">
			<pre className={`language-${language || "jsx"} line-numbers`}>
				<code ref={codeRef}>{children}</code>
			</pre>
			<button
				type="button"
				className="code-block__copy"
				onClick={handleCopy}
			>
				{copied ? "copied" : "copy"}
			</button>
		</div>
	);
}
