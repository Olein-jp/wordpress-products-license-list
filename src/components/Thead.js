const Thead = ({ bgcolor }) => {
  return (
    <thead className={`${bgcolor} border-b`}>
      <tr>
        <th scope="col" className="table-th">
          形式
        </th>
        <th scope="col" className="table-th">
          プロダクト名
        </th>
        <th scope="col" className="table-th">
          開発者
        </th>
        <th scope="col" className="table-th">
          プロダクト詳細URL
        </th>
        <th scope="col" className="table-th">
          ライセンス情報URL
        </th>
        <th scope="col" className="table-th">
          最終確認日
        </th>
        <th scope="col" className="table-th">
          備考
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
