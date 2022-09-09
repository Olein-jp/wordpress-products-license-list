import Link from "next/link";

const Footer = ({ props: contributors }) => {
  const CONTRIBUTORS = contributors;

  return (
    <>
      <aside className="mt-5">
        <div className="text-center text-xs text-gray-700 mb-5">
          <p className="mb-2">
            このサイトに掲載されている情報は有志で確認をしたもので、最新の情報ではない可能性もあります。最終的には必ずご自身でご確認ください。
          </p>
          <p>
            情報の更新・追加・削除についての依頼は、管理する GitHub リポジトリへ
            Pull&Request を行っていただくか、Issues へ書き込みをお願いします。
          </p>
        </div>
        <div className="bg-white p-5 text-gray-500">
          <h4 className="text-center font-bold mb-2">貢献者</h4>
          <ul className="flex justify-center">
            {CONTRIBUTORS.map((contributor, index) => {
              return (
                <li key={index} className="text-xs mr-3">
                  <Link
                    href={`https://profiles.wordpress.org/${contributor.WordPressOrgProfileSlug}/`}
                  >
                    <a
                      target="_blank"
                      className="underline"
                      rel="noopener noreferrer"
                    >
                      {contributor.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <footer className="bg-gray-900 w-full py-2 text-center">
        <p className="text-sm text-white">Powered by Next.js & vercel</p>
      </footer>
    </>
  );
};

export default Footer;

export const getStaticProps = async () => {
  return { props: { contributors } };
};
