import TableLink from "src/components/TableLink";

const TableTr = (props) => {
  const categories = props.categoryList;
  const search = props.search;
  const bgColor = props.bgColor;
  const labelTitle = props.labelTitle;
  const labelBgColor = props.labelBgColor;

  return categories
    .filter((product) => {
      return search.toLowerCase() === ""
        ? product
        : product.productName.toLowerCase().includes(search.toLowerCase()) ||
            product.developer.toLowerCase().includes(search.toLowerCase());
    })
    .map((product, index) => {
      return (
        <tr key={index} className={`${bgColor} table-tr`}>
          <td className="table-td text-center">
            <span
              className={`${labelBgColor} text-xs rounded-full py-1 px-2 text-white`}
            >
              {labelTitle}
            </span>
          </td>
          <td className="table-td font-bold">{product.productName}</td>
          <td className="table-td font-bold">{product.developer}</td>
          <td className="table-td">
            <TableLink url={product.detailUrl} />
          </td>
          <td className="table-td">
            <TableLink url={product.licenseUrl} />
          </td>
          <td className="table-td">{product.lastUpdate}</td>
          <td className="table-td">{product.memo}</td>
        </tr>
      );
    });
};

export default TableTr;
