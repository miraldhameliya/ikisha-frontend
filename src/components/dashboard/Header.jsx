import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png'; // Use your actual logo path
import category from '../../assets/Catagory.png';
import product from '../../assets/Product.png'
import diamond from '../../assets/Diamond.png';
import diamondtype from '../../assets/DiamondType.png';
import metal from '../../assets/Export.png'
import size from '../../assets/Size.png';

const navLinks = [
  { name: 'Category', icon: category, path: '/category' },
  { name: 'Product', icon: product, path: '/product' },
  { name: 'Diamond', icon: diamond, path: '/diamond' },
  { name: 'Diamond Clarity', icon: diamondtype, path: '/diamond-clarity' },
  { name: 'Metal', icon: metal, path: '/metal' },
  { name: 'Size', icon: size , path: '/size' },
];

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <div className="flex items-center gap-8">
        <img src={logo} alt="ikisha logo" className="h-10" />
        <nav className="flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-700 hover:text-green-800 flex items-center gap-2"
            >
              {link.icon && <img src={link.icon} alt={`${link.name} icon`} className="w-5 h-5" />}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-green-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-800">
          Add Category
        </button>
        <button className="p-2 rounded hover:bg-gray-100">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
