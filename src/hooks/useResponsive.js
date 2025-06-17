// import { useState, useEffect } from 'react';
// import { theme } from '../theme/theme';

// export const useResponsive = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < parseInt(theme.breakpoints.md));
//       setIsTablet(
//         width >= parseInt(theme.breakpoints.md) && 
//         width < parseInt(theme.breakpoints.lg)
//       );
//       setIsDesktop(width >= parseInt(theme.breakpoints.lg));
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return { isMobile, isTablet, isDesktop };
// }; 