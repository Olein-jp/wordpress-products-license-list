import Thead from "src/components/Thead";
import { useState } from "react";
import TableTr from "src/components/TableTr";
import Link from "next/link";

const Content = ({ props: data }) => {
  const GPL = data.GPL;
  const SPLIT = data.SPLIT;
  const OTHERS = data.OTHERS;
  const [search, setSearch] = useState("");

  return (
    <main className="h-full">
      <section className="text-center my-6">
        <input
          type="text"
          className="form-input px-4 py-2 rounded w-3/6 focus:outline-blue-100"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="プロダクト名 or 開発者名 で検索"
        ></input>
      </section>
      <ul className="w-11/12 mx-auto lg:w-11/12 my-4 flex flex-col items-center">
        <li className="mb-3">
          <span className="bg-green-600 text-xs rounded-full py-1 px-2 text-white mr-1">
            100%GPL
          </span>
          <span className="bg-yellow-600 text-xs rounded-full py-1 px-2 text-white mr-1">
            GPL/Split
          </span>
          <span className="bg-gray-300 text-xs rounded-full py-1 px-2 text-white mr-1">
            Other/Checking
          </span>
          <span className="mb-3 text-xs">
            左の各表記形式について詳しくは
            <Link href="https://ja.wordpress.org/about/license/100-percent-gpl/">
              <a
                className="underline ml-1 mr-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                「100% GPL」とは
              </a>
            </Link>
            をご覧ください。
          </span>
        </li>
      </ul>
      <section className="overflow-x-auto">
        <table className="w-full table-auto lg:w-11/12 lg:mx-auto">
          <Thead bgcolor="bg-gray-700" />
          <tbody>
            <TableTr
              categoryList={GPL}
              search={search}
              bgColor="bg-green-100"
              labelTitle="100%GPL"
              labelBgColor="bg-green-600"
            />
            <TableTr
              categoryList={SPLIT}
              search={search}
              bgColor="bg-yellow-50"
              labelTitle="GPL/Split"
              labelBgColor="bg-yellow-600"
            />
            <TableTr
              categoryList={OTHERS}
              search={search}
              bgColor="bg-white"
              labelTitle="Other/Checking"
              labelBgColor="bg-gray-300"
            />
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Content;
