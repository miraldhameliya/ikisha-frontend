import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/icon/image.png'; // Use your actual logo path
import category from '../../assets/icon/Catagory.png';
import product from '../../assets/icon/Product.png'
import diamond from '../../assets/icon/Diamond.png';
import diamondtype from '../../assets/icon/DiamondType.png';
import metal from '../../assets/icon/Export.png'
import size from '../../assets/icon/Size.png';
import logout from '../../assets/icon/logout.png'; 

const navLinks = [
  { name: 'Category', icon: category, path: '/category' },
  { name: 'Product', icon: product, path: '/product' },
  { name: 'Diamond', icon: diamond, path: '/diamond' },
  { name: 'Diamond Clarity', icon: diamondtype, path: '/diamond-clarity' },
  { name: 'Metal', icon: metal, path: '/metal' },
  { name: 'Size', icon: size , path: '/size' },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the current section name from the path
  const getCurrentSection = () => {
    const path = location.pathname;
    const section = navLinks.find(link => link.path === path);
    
    // Special cases for sections
    if (section?.name === 'Metal') {
      return 'Metal Type';
    }
    if (section?.name === 'Diamond Clarity') {
      return 'Diamond Clarity Type';
    }
    if (section?.name === 'Diamond') {
      return 'Diamond Shape';
    }
    
    return section ? section.name : 'Category'; // Default to Category if no match
  };

  const handleLogout = () => {
    navigate('/login');
  };

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
          + Add {getCurrentSection()}
        </button>
        <button 
          onClick={handleLogout}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
          <img src={logout} alt="Logout" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
