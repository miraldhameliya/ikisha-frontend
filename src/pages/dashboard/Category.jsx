import Earing from '../../assets/icon/earing.png';
import Chain from '../../assets/icon/chain.png';
import Ring from '../../assets/icon/ring.png';
import bracelet from '../../assets/icon/necklace.png'
import nosepin from '../../assets/icon/nosepin.png';
import edit from '../../assets/icon/edited.png'
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";

const initialCategories = [
  {
    name: 'Earring',
    image: Earing, // Replace with your actual image paths
    count: 50,
    active: true,
  },
  {
    name: 'Necklace',
    image: Chain,
    count: 50,
    active: true,
  },
  {
    name: 'Ring',
    image: Ring,
    count: 50,
    active: true,
  },
  {
    name: 'Bracelet',
    image: bracelet,
    count: 50,
    active: true,
  },
  {
    name: 'Nose pin',
    image: nosepin,
    count: 50,
    active: true,
  },
];

function Category() {
  const [categories, setCategories] = useState(initialCategories);

  const handleToggle = (index) => {
    const updatedCategories = categories.map((cat, i) => {
      if (i === index) {
        return { ...cat, active: !cat.active };
      }
      return cat;
    });
    setCategories(updatedCategories);
  };

  return (
    <div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div key={cat.name} className="bg-white rounded-lg shadow p-3 flex flex-col">
            <div className="relative">
              <img src={cat.image} alt={cat.name} className="rounded-t-lg h-44 w-full object-cover" />
              <button className="absolute top-2 left-2 bg-white text-xs font-semibold shadow">
                <img src={edit} alt="Edit" className="w-17 h-7 inline-block" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-between p-2">
              <div>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-[#334155]">{cat.name}</div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cat.active}
                      onChange={() => handleToggle(index)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 mt-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-[#5cc036] transition-all duration-300"></div>
                    <div className="absolute mt-5 left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
                  </label>
                </div>
                <div className="text-xs text-[#64748B]">{cat.count} Products</div>
                <div className='border mt-3 border-[#C3C7BC]'></div>

              </div>
              <div className="flex items-center justify-between mt-2">
                <a href="#" className="text-base text-[#64748B] font-semibold hover:underline">View All Product </a>
                <FaChevronRight className="text-[#64748B] text-lg" />

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
