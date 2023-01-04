import LinkIcon from "public/icons/outline/link.svg";
import Link from "next/link";

const Anchor = ({ children, slug, keyword }) => {
	return (
		<div id={slug}>
			<Link href={`#${slug}`} title={keyword} className="page__anchor">
				{children}
			</Link>
		</div>
	);
};

export default Anchor;
