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
    { key: 'name', title: 'Diamond Clarity Type', align: 'left' },
    {
      key: 'active',
      title: 'Status',
      align: 'center',
      render: (row) => (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={row.active}
            onChange={() => toggleStatus(row.id)}
            className="sr-only peer"
          />
          <div className="w-8 h-4 bg-gray-200 rounded-full peer-checked:bg-green-900 transition-colors duration-200"></div>
          <div className={`absolute left-0.5 top-0.5 w-3 h-3 bg-white border border-gray-300 rounded-full shadow-md transform transition-transform duration-200 ${row.active ? 'translate-x-4' : ''}`}></div>
        </label>
      ),
    },
    {
      key: 'action',
      title: 'Action',
      align: 'right',
      render: () => (
        <button className="p-2" title="Edit">
          <img src={edit} alt="Edit" className="w-8 h-8" />
        </button>
      ),
    },
  ];

  return (
    <div className=" bg-[#f6f8fa]">
      <div>
        <Table columns={columns} data={clarities} rowKey="id" />
      </div>
    </div>
  );
}

export default DiamondClarity; 