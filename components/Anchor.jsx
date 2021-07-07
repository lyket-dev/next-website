import LinkIcon from "public/icons/outline/link.svg";
import Link from "next/link";

const Anchor = ({ children, slug }) => {
  return (
    <div id={slug}>
      <Link href={`#${slug}`}>
        <a className="page__anchor">{children}</a>
      </Link>
    </div>
  );
};

export default Anchor;
