import React from 'react';

function Table({ columns, data, rowKey }) {
  return (
    <div className="bg-white shadow overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#c3c7bc] text-gray-800 ">
            {columns.map(col => (
              <th key={col.key} className="py-3 px-4 text-left font-semibold">{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row[rowKey]} className="border-b last:border-b-0">
              {columns.map(col => (
                <td key={col.key} className="py-3 px-4">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
