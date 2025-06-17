import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import Table from '../../components/dashboard/Table';
import edit from '../../assets/icon/edit.png'


const initialMetals = [
  { id: 1, name: '10k/Yellow', active: true },
  { id: 2, name: '10k/Yellow', active: true },
  { id: 3, name: '10k/Yellow', active: true },
  { id: 4, name: '10k/Yellow', active: true },
  { id: 5, name: '10k/Yellow', active: true },
  { id: 6, name: '10k/Yellow', active: false },
];

function Metal() {
  const [metals, setMetals] = useState(initialMetals);

  const toggleStatus = (id) => {
    setMetals(metals =>
      metals.map(metal =>
        metal.id === id ? { ...metal, active: !metal.active } : metal
      )
    );
  };

  const columns = [
    { key: 'name', title: 'Metal Type', align: 'left' },
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
          <img src={edit} alt="Edit" className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fa]">
      <div>

        <Table columns={columns} data={metals} rowKey="id" />
      </div>
    </div>
  );
}

export default Metal; 