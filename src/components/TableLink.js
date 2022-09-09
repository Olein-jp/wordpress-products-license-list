import Link from "next/link";
const TableLink = (props) => {
  return (
    <Link href={props.url} passHref>
      <a className="underline" target="_blank" rel="noopener noreferrer">
        {props.url}
      </a>
    </Link>
  );
};

export default TableLink;
