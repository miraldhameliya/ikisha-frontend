import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import Table from '../../components/dashboard/Table';

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
    { key: 'name', title: 'Metal Type' },
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
          <svg width="20" height="20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="9" strokeWidth="1.5"/><path d="M7 13l6-6M8 8l4 4" strokeWidth="1.5"/></svg>
        </button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fa]">
      <Header />
      <div className="p-6">
     
        <Table columns={columns} data={metals} rowKey="id" />
      </div>
    </div>
  );
}

export default Metal; 