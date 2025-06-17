import React, { useState } from 'react';
  // import { useAddModal } from "../../components/dashboard/AddModalComponent"; // adjust path

import Table from '../../components/dashboard/Table';
import edit from '../../assets/icon/edit.png';
// import { CustomAddModal } from "../../components/dashboard/AddModalComponent";

const initialShapes = [
  { id: 1, name: 'Lab-Grown/Round', active: true },
  { id: 2, name: 'Lab-Grown/Radiant', active: true },
  { id: 3, name: 'Lab-Grown/Pear', active: true },
  { id: 4, name: 'Lab-Grown/Round', active: true },
  { id: 5, name: 'Lab-Grown/Radiant', active: true },
  { id: 6, name: 'Lab-Grown/Pear', active: false },
];

// const handleAddDiamondShape = (shape) => {
//   console.log(shape);
//   // setShapes([...shapes, shape]);
// };

function Diamond() {
  const [shapes, setShapes] = useState(initialShapes);
  // const { openModal } = useAddModal();

  // useEffect(() => {
  //   openModal("Diamond", handleAddDiamondShape);
  // }, [openModal]);

  const toggleStatus = (id) => {
    setShapes(shapes =>
      shapes.map(shape =>
        shape.id === id ? { ...shape, active: !shape.active } : shape
      )
    );
  };

  const columns = [
    { key: 'name', title: 'Diamond Shape', align: 'left' },
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
      )

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
      <Table columns={columns} data={shapes} rowKey="id" />
    </div>
  );
}

export default Diamond;
