import React from 'react';
import Header from '../../components/dashboard/Header';

const categories = [
  {
    name: 'Earring',
    image: '/images/earring.jpg', // Replace with your actual image paths
    count: 50,
    active: true,
  },
  {
    name: 'Necklace',
    image: '/images/necklace.jpg',
    count: 50,
    active: true,
  },
  {
    name: 'Ring',
    image: '/images/ring.jpg',
    count: 50,
    active: true,
  },
  {
    name: 'Bracelet',
    image: '/images/bracelet.jpg',
    count: 50,
    active: true,
  },
  {
    name: 'Nose pin',
    image: '/images/nosepin.jpg',
    count: 50,
    active: true,
  },
];

function Category() {
  return (
    <div>
      <Header />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <div key={cat.name} className="bg-white rounded-lg shadow p-3 flex flex-col">
            <div className="relative">
              <img src={cat.image} alt={cat.name} className="rounded-t-lg h-32 w-full object-cover" />
              <button className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-semibold shadow">Edit</button>
            </div>
            <div className="flex-1 flex flex-col justify-between p-2">
              <div>
                <div className="font-bold text-gray-800">{cat.name}</div>
                <div className="text-xs text-gray-500">{cat.count} Products</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <a href="#" className="text-xs text-gray-700 font-semibold hover:underline">View All Product</a>
                <div>
                  <input type="checkbox" checked={cat.active} readOnly className="accent-green-600" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
