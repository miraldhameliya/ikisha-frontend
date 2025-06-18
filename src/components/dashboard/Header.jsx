import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/icon/image.png'; // Use your actual logo path
import category from '../../assets/icon/Catagory.png';
import fillCategory from '../../assets/icon/FillCategory.png'
import product from '../../assets/icon/Product.png'
import fillProduct from '../../assets/icon/FillProduct.png'
import diamond from '../../assets/icon/Diamond.png';
import fillDiamond from '../../assets/icon/FillDiamond.png';
import diamondtype from '../../assets/icon/DiamondType.png';
import fillDiamondType from '../../assets/icon/FillDiamondClarity.png';
import metal from '../../assets/icon/Export.png'
import FillMetal from '../../assets/icon/FillMetal.png'
import size from '../../assets/icon/Size.png';
import fillSize from '../../assets/icon/FillSize.png'
import logout from '../../assets/icon/logout.png';
import { router } from '../../../router';
import CommonModel from '../allModel/CommonModel';
import Plus from '../../assets/icon/Plus.png';

// import { useAuth } from '../../hooks/useAuth';

const iconMap = {
  category: {
    default: category,
    active: fillCategory
  },
  product: {
    default: product,
    active: fillProduct
  },
  diamond: {
    default: diamond,
    active: fillDiamond
  },
  'diamond-clarity': {
    default: diamondtype,
    active: fillDiamondType
  },
  metal: {
    default: metal,
    active: FillMetal
  },
  size: {
    default: size,
    active: fillSize
  }
};

const navLinks = router.filter(route =>
  Object.keys(iconMap).includes(route.name.toLowerCase())
).map(route => ({
  name: route.name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
  path: route.path,
  iconKey: route.name.toLowerCase(),
}));

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.includes('metal')) return 'Metal';
    if (path.includes('diamond-clarity')) return 'Diamond-clarity';
    if (path.includes('diamond')) return 'Diamond';
    if (path.includes('category')) return 'Category';
    if (path.includes('size')) return 'Size';
    return 'Category';
  };
  const sectionMap = {
    'Diamond': 'Add Diamond Shape',
    'Metal': 'Add Metal Type',
    'Category': 'Add Category',
    'Size': 'Add Size ',
    'Diamond-clarity': 'Add Diamond Clarity Type',
  };
  const currentSection = getCurrentSection();
  const addButtonLabel = sectionMap[currentSection] || 'Add';

  const handleAddClick = () => {
    setIsModelOpen(true);
  };

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      // Call logout API
     localStorage.removeItem('token');
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if API fails, we should still logout locally
    } finally {

      navigate('/login');
      setLogoutLoading(false);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 shadow">
        <div className="flex items-center gap-8">
          <img src={logo} alt="ikisha logo" className="h-15" />
          <nav className="flex gap-6">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredLink === link.name;
              const iconToShow = (isActive || isHovered) ? 
                iconMap[link.iconKey].active : 
                iconMap[link.iconKey].default;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-bold flex items-center gap-2 px-3 py-3 rounded text-lg
                    ${isActive ? 'text-[#303F26]' : 'text-[#1E293B] hover:text-[#303F26]'}
                  `}
                  style={isActive ? { color: '#303F26' } : {}}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <img src={iconToShow} alt={`${link.name} icon`} className="w-5 h-5" />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* User Info */}
          {/* {user && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Welcome, {user.username || user.email}</span>
            </div>
          )} */}
          
          <button
            className="bg-[#303F26] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#26371e]"
            onClick={handleAddClick}
          >
            <img src={Plus} alt="Add" className="w-5 h-5" />
            <span className="font-semibold text-lg">{addButtonLabel}</span>
          </button>

          <button
            onClick={handleLogout}
            disabled={logoutLoading}
            className={`p-2 transition-colors ${logoutLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 rounded'}`}
            title="Logout"
          >
            <img src={logout} alt="Logout" className="w-6 h-6" />
          </button>
        </div>
      </header>
      <CommonModel
        open={isModelOpen}
        onClose={() => setIsModelOpen(false)}
        onSave={() => {
          setIsModelOpen(false);
        }}
        type={currentSection}
      />
    </>
  );
}

export default Header;

