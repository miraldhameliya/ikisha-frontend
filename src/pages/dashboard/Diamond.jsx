import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import Table from '../../components/dashboard/Table';


const initialShapes = [
  { id: 1, name: 'Lab-Grown/Round', active: true },
  { id: 2, name: 'Lab-Grown/Radiant', active: true },
  { id: 3, name: 'Lab-Grown/Pear', active: true },
  { id: 4, name: 'Lab-Grown/Round', active: true },
  { id: 5, name: 'Lab-Grown/Radiant', active: true },
  { id: 6, name: 'Lab-Grown/Pear', active: false },
];

function Diamond() {
  const [shapes, setShapes] = useState(initialShapes);

  const toggleStatus = (id) => {
    setShapes(shapes =>
      shapes.map(shape =>
        shape.id === id ? { ...shape, active: !shape.active } : shape
      )
    );
  };

  const columns = [
    { key: 'name', title: 'Diamond Shape' },
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
        {/* <div className="flex justify-end mb-4">
          <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800 font-semibold">
            + Add Diamond Shape
          </button>
        </div> */}
        <Table columns={columns} data={shapes} rowKey="id" />
      </div>
    </div>
  );
}

export default Diamond;
