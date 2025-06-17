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
import { router } from '../../../router'; // adjust path
import { CustomAddModal } from "./AddModalComponent"; // adjust path if needed
import { useAddModal } from "./AddModalComponent"; // adjust path

const iconMap = {
  category,
  product,
  diamond,
  'diamond-clarity': diamondtype,
  metal,
  size,
};

const navLinks = router.filter(route =>
  Object.keys(iconMap).includes(route.name.toLowerCase())
).map(route => ({
  name: route.name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
  path: route.path,
  icon: iconMap[route.name.toLowerCase()],
}));

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { openModal, closeModal, open } = useAddModal();
  const [modalSection, setModalSection] = React.useState(null);
  const [modalOnAdd, setModalOnAdd] = React.useState(null);

  // Map route path to section key for modal
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.includes('metal')) return 'Metal';
    if (path.includes('diamond-clarity')) return 'Diamond-clarity';
    if (path.includes('diamond')) return 'Diamond';
    if (path.includes('category')) return 'Category';
    if (path.includes('size')) return 'Size';
    return 'Category'; // default
  };

  // Map section to Add button label
  const sectionMap = {
    'Diamond': 'Add Diamond Shape',
    'Metal': 'Add Metal Type',
    'Category': 'Add Category',
    'Size': 'Add Size',
    'Diamond-clarity': 'Add Diamond Clarity Type',
  };
  const currentSection = getCurrentSection();
  const addButtonLabel = sectionMap[currentSection] || 'Add';

  const handleAddClick = () => {
    
    setModalSection(currentSection);
    setModalOnAdd((value) => {
      // You can handle the add logic here or pass a callback from the page
      // For now, just log
      console.log('Added:', value);
    });
    openModal(currentSection, modalOnAdd);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow">
      <div className="flex items-center gap-8">
        <img src={logo} alt="ikisha logo" className="h-10" />
        <nav className="flex gap-6">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium flex items-center gap-2 px-3 py-2 rounded
                  ${isActive ? 'text-[#303F26] bg-white' : 'text-[#1E293B] hover:text-[#303F26]'}
                `}
                style={isActive ? { color: '#303F26' } : {}}
              >
                {link.icon && <img src={link.icon} alt={`${link.name} icon`} className="w-5 h-5" />}
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-[#303F26] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#26371e]"
          onClick={handleAddClick}
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#303F26]">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v8M8 12h8" stroke="#303F26" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="font-semibold text-lg">{addButtonLabel}</span>
        </button>
        {open && modalSection && (
          <CustomAddModal
            section={modalSection}
            onSave={(value) => {
              modalOnAdd && modalOnAdd(value);
              closeModal();
            }}
            isOpen={open}
            setIsOpen={closeModal}
          />
        )}
        <button 
          onClick={handleLogout}
          className="p-2 transition-colors"
        >
          <img src={logout} alt="Logout" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
