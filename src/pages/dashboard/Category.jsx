import Earing from '../../assets/icon/earing.png';
import Chain from '../../assets/icon/chain.png';
import Ring from '../../assets/icon/ring.png';
import bracelet from '../../assets/icon/necklace.png'
import nosepin from '../../assets/icon/nosepin.png';

const categories = [
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
  return (
    <div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
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
