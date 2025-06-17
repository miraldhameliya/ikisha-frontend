import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import Table from '../../components/dashboard/Table';
import edit from '../../assets/icon/edit.png';

const initialClarityTypes = [
  { id: 1, name: 'VS1', active: true },
  { id: 2, name: 'VS2', active: true },
  { id: 3, name: 'VVS1', active: true },
  { id: 4, name: 'VVS2', active: true },
  { id: 5, name: 'SI1', active: true },
  { id: 6, name: 'SI2', active: false },
];

function DiamondClarity() {
  const [clarities, setClarities] = useState(initialClarityTypes);

  const toggleStatus = (id) => {
    setClarities(clarities =>
      clarities.map(clarity =>
        clarity.id === id ? { ...clarity, active: !clarity.active } : clarity
      )
    );
  };

  const columns = [
    { key: 'name', title: 'Diamond Clarity Type' },
    {
      key: 'active',
      title: 'Status',
      render: (row) => (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={row.active}
            onChange={() => toggleStatus(row.id)}
            className="sr-only peer"
          />
          <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-900 transition-all duration-200"></div>
          <div className={`absolute ml-1 mt-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${row.active ? 'translate-x-4' : ''}`}></div>
        </label>
      ),
    },
    {
      key: 'action',
      title: 'Action',
      render: (row) => (
        <button className="p-2 rounded hover:bg-gray-100" title="Edit">
          <img src={edit} alt="Edit" className="w-8 h-8" />
        </button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fa]">
      <div className="p-6">
        {/* <div className="flex justify-end mb-4">
          <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 font-semibold">
            + Add Diamond Clarity Type
          </button>
        </div> */}
        <Table columns={columns} data={clarities} rowKey="id" />
      </div>
    </div>
  );
}

export default DiamondClarity; 