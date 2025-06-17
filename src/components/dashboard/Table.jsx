// function Table({ columns, data, rowKey }) {
//   return (
//     <div className="bg-white shadow overflow-x-auto w-full">
//       <table className="min-w-full border-separate border-spacing-0">
//         <thead>
//           <tr className="bg-[#c3c7bc] text-gray-900">
//             {columns.map(col => (
//               <th
//                 key={col.key}
//                 className="py-4 px-4 text-left font-semibold border-b border-black"
//               >
//                 {col.title}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr
//               key={row[rowKey]}
//               className={`${index % 2 === 0 ? 'bg-[#f6f7fa]' : 'bg-white'} transition-all`}
//             >
//               {columns.map(col => (
//                 <td key={col.key} className="py-3 px-4 align-middle">
//                   {col.render ? col.render(row) : row[col.key]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;
import React from 'react';

function Table({ columns, data, rowKey }) {
  return (
    <div className="bg-white shadow overflow-x-auto w-full">
      <table className="min-w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-[#c3c7bc] text-gray-900">
            {columns.map((col, index) => (
              <th
                key={col.key}
                className={`py-4 px-${index === 0 ? '2' : '4'} font-semibold border-b border-b-black ${index !== columns.length - 1 ? 'border-r-3 border-white border' : ''
                  } ${index === 0 ? 'text-left' : 'text-center'}`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row[rowKey]}
              className={`${rowIndex % 2 === 0 ? 'bg-[#e2e8f0]' : 'bg-white'}`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={col.key}
                  className={`py-3 px-${colIndex === 0 ? '2 ' : '4'} align-middle border-b border-b-black ${colIndex !== columns.length - 1 ? 'border-r-3 border-white' : ''
                    } ${colIndex === 0 ? 'text-left ' : 'text-center'}`}
                >
                  <div className={colIndex === 0 ? '' : 'mx-auto w-fit'} >
                    {col.render ? col.render(row) : row[col.key]}
                  </div>
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
