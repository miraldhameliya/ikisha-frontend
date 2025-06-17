import React, { useState } from 'react';

import Table from '../../components/dashboard/Table';
import edit from '../../assets/icon/edit.png';

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
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={row.active}
            onChange={() => toggleStatus(row.id)}
            className="sr-only peer"
          />
          <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-green-900 transition-all duration-200"></div>
          <div className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${row.active ? 'translate-x-4' : ''}`}></div>
        </label>
      )

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
      <div className="">
        <Table columns={columns} data={shapes} rowKey="id" />
      </div>
    </div>
  );
}

export default Diamond;
