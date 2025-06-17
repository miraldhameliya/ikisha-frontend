import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import Table from '../../components/dashboard/Table';
import edit from '../../assets/icon/edit.png'

const initialSizes = [
  { id: 1, size: '0.2', price: '₹10,000', active: true },
  { id: 2, size: '0.2', price: '₹10,000', active: true },
  { id: 3, size: '0.2', price: '₹10,000', active: true },
  { id: 4, size: '0.2', price: '₹10,000', active: true },
  { id: 5, size: '0.2', price: '₹10,000', active: true },
  { id: 6, size: '0.2', price: '₹10,000', active: false },
];

function Size() {
  const [sizes, setSizes] = useState(initialSizes);

  const toggleStatus = (id) => {
    setSizes(sizes =>
      sizes.map(size =>
        size.id === id ? { ...size, active: !size.active } : size
      )
    );
  };

  const columns = [
    { key: 'size', title: 'Size' },
    { key: 'price', title: 'Price' },
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
        <Table columns={columns} data={sizes} rowKey="id" />
      </div>
    </div>
  );
}

export default Size; 