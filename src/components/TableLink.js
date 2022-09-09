import Link from "next/link";
import { ExternalLink } from "react-feather";

const TableLink = (props) => {
  return (
    <Link href={props.url} passHref>
      <a
        className="underline flex justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size="16" />
      </a>
    </Link>
  );
};

export default TableLink;
