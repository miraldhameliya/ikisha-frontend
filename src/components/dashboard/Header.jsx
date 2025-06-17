import React from 'react';
import logo from '../../assets/image.png'; // Use your actual logo path

const navLinks = [
  { name: 'Category', path: '/category' },
  { name: 'Product', path: '/product' },
  { name: 'Diamond', path: '/diamond' },
  { name: 'Diamond Clarity', path: '/diamond-clarity' },
  { name: 'Metal', path: '/metal' },
  { name: 'Size', path: '/size' },
];

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <div className="flex items-center gap-8">
        <img src={logo} alt="ikisha logo" className="h-10" />
        <nav className="flex gap-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.path}
              className="font-medium text-gray-700 hover:text-green-800"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-green-900 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-800">
          Add Category
        </button>
        <button className="p-2 rounded hover:bg-gray-100">
          <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
