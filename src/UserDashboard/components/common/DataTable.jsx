const DataTable = ({ columns, data, loading, EmptyComponent }) => {
  if (loading) return <div>Loading...</div>;
  if (!data?.length) return EmptyComponent || <div>No data found.</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              {columns.map((col, cIdx) => (
                <td key={cIdx} className="px-4 py-2 text-sm text-gray-700">
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
