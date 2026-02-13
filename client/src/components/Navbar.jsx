// // // // // // // // import React from 'react'
// // // // // // // // import { assets } from '../assets/assets'
// // // // // // // // import { useNavigate } from 'react-router-dom'
// // // // // // // // import { ArrowRight } from 'lucide-react'
// // // // // // // // import {useClerk , UserButton, useUser} from '@clerk/clerk-react'

// // // // // // // // const Navbar = () => {
// // // // // // // //     const navigate = useNavigate()
// // // // // // // //     const {user} = useClerk()
// // // // // // // //     const { openSignIn } = useClerk()
// // // // // // // //   return (
// // // // // // // //     <div className='fixed z'-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
// // // // // // // //         <img src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer' onClick={()=> navigate('/')}/>

// // // // // // // //         {
// // // // // // // //             user ? <UserButton /> 
// // // // // // // //             : 
      

// // // // // // // //         <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/></button>
// // // // // // // // }
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default Navbar





// // // // // // // import React from 'react';
// // // // // // // import { assets } from '../assets/assets';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import { ArrowRight } from 'lucide-react';
// // // // // // // import { useClerk, UserButton } from '@clerk/clerk-react';

// // // // // // // const Navbar = () => {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { user, openSignIn } = useClerk();

// // // // // // //   return (
// // // // // // //     <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
// // // // // // //       {/* Logo */}
// // // // // // //       <img
// // // // // // //         src={assets.logo}
// // // // // // //         alt="DevIQon Logo"
// // // // // // //         className='w-32 sm:w-44 cursor-pointer'
// // // // // // //         onClick={() => navigate('/')}
// // // // // // //       />

// // // // // // //       {/* Auth Buttons */}
// // // // // // //       {
// // // // // // //         user ? (
// // // // // // //           <UserButton />
// // // // // // //         ) : (
// // // // // // //           <button
// // // // // // //             onClick={openSignIn}
// // // // // // //             className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
// // // // // // //           >
// // // // // // //             Get started <ArrowRight className='w-4 h-4' />
// // // // // // //           </button>
// // // // // // //         )
// // // // // // //       }
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;










// // // // // // import React from 'react';
// // // // // // import { assets } from '../assets/assets';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { ArrowRight } from 'lucide-react';
// // // // // // import { useClerk, UserButton } from '@clerk/clerk-react';

// // // // // // const Navbar = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const { user, openSignIn } = useClerk();

// // // // // //   return (
// // // // // //     <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
// // // // // //       {/* Logo */}
// // // // // //       <img
// // // // // //         src={assets.logo}
// // // // // //         alt="DevIQon Logo"
// // // // // //         className='w-32 sm:w-44 cursor-pointer'
// // // // // //         onClick={() => navigate('/')}
// // // // // //       />

// // // // // //       {/* Auth Buttons */}
// // // // // //       {
// // // // // //         user ? (
// // // // // //           <UserButton />
// // // // // //         ) : (
// // // // // //           <button
// // // // // //             onClick={openSignIn}
// // // // // //             className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
// // // // // //           >
// // // // // //             Get started <ArrowRight className='w-4 h-4' />
// // // // // //           </button>
// // // // // //         )
// // // // // //       }
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;













// // // // // import React from 'react';
// // // // // import { assets } from '../assets/assets';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { ArrowRight } from 'lucide-react';
// // // // // import { useClerk, UserButton } from '@clerk/clerk-react';

// // // // // const Navbar = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const { user, openSignIn } = useClerk();

// // // // //   return (
// // // // //     <div className='fixed z-50 w-full backdrop-blur-md flex justify-between items-center py-2 px-4 sm:px-12 shadow-sm'>
// // // // //       {/* Logo - Smaller width */}
// // // // //       <img
// // // // //         src={assets.logo}
// // // // //         alt="DevIQon Logo"
// // // // //         className='w-24 sm:w-32 cursor-pointer'
// // // // //         onClick={() => navigate('/')}
// // // // //       />

// // // // //       {/* Auth Buttons */}
// // // // //       {
// // // // //         user ? (
// // // // //           <UserButton />
// // // // //         ) : (
// // // // //           <button
// // // // //             onClick={openSignIn}
// // // // //             className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-1.5'
// // // // //           >
// // // // //             Get started <ArrowRight className='w-4 h-4' />
// // // // //           </button>
// // // // //         )
// // // // //       }
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Navbar;










// // // // import React from 'react';
// // // // import { assets } from '../assets/assets';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { ArrowRight } from 'lucide-react';
// // // // import { useClerk, UserButton } from '@clerk/clerk-react';

// // // // const Navbar = () => {
// // // //   const navigate = useNavigate();
// // // //   const { user, openSignIn } = useClerk();

// // // //   return (
// // // //     <div className='fixed z-50 w-full backdrop-blur-md flex justify-between items-center py-2 px-4 sm:px-12 shadow-sm'>
// // // //       {/* Logo - Smaller width */}
// // // //       <img
// // // //         src={assets.logo}
// // // //         alt="DevIQon Logo"
// // // //         className='w-24 sm:w-32 cursor-pointer'
// // // //         onClick={() => navigate('/')}
// // // //       />

// // // //       {/* Auth Buttons */}
// // // //       {
// // // //         user ? (
// // // //           <UserButton
// // // //             appearance={{
// // // //               elements: {
// // // //                 avatarBox: {
// // // //                   width: '48px',
// // // //                   height: '48px',
// // // //                 },
// // // //               },
// // // //             }}
// // // //           />
// // // //         ) : (
// // // //           <button
// // // //             onClick={openSignIn}
// // // //             className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-1.5'
// // // //           >
// // // //             Get started <ArrowRight className='w-4 h-4' />
// // // //           </button>
// // // //         )
// // // //       }
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;





// // // import React from 'react';
// // // import { assets } from '../assets/assets';
// // // import { useNavigate } from 'react-router-dom';
// // // import { ArrowRight } from 'lucide-react';
// // // import { useClerk, UserButton } from '@clerk/clerk-react';

// // // const Navbar = () => {
// // //   const navigate = useNavigate();
// // //   const { user, openSignIn } = useClerk();

// // //   return (
// // //     <div className='fixed z-50 w-full backdrop-blur-md flex justify-between items-center py-2 px-4 sm:px-12 shadow-sm'>
// // //       {/* Enlarged Logo */}
// // //       <img
// // //         src={assets.logo}
// // //         alt="DevIQon Logo"
// // //         className='w-36 sm:w-48 cursor-pointer' // increased from w-24 sm:w-32
// // //         onClick={() => navigate('/')}
// // //       />

// // //       {/* Auth Buttons */}
// // //       {
// // //         user ? (
// // //           <UserButton
// // //             appearance={{
// // //               elements: {
// // //                 avatarBox: {
// // //                   width: '48px',
// // //                   height: '48px',
// // //                 },
// // //               },
// // //             }}
// // //           />
// // //         ) : (
// // //           <button
// // //             onClick={openSignIn}
// // //             className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-1.5'
// // //           >
// // //             Get started <ArrowRight className='w-4 h-4' />
// // //           </button>
// // //         )
// // //       }
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;







// import React from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { useClerk, UserButton } from '@clerk/clerk-react';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, openSignIn } = useClerk();

//   return (
//     <div className='fixed z-50 w-full backdrop-blur-md flex justify-between items-center py-1 px-2 sm:px-6 shadow-sm'>
//       {/* Logo */}
//       <img
//         src={assets.logo}
//         alt="DevIQon Logo"
//         className='w-36 sm:w-48 cursor-pointer'
//         onClick={() => navigate('/')}
//       />

//       {/* Auth Buttons */}
//       {
//         user ? (
//           <UserButton
//             appearance={{
//               elements: {
//                 avatarBox: {
//                   width: '48px',
//                   height: '48px',
//                 },
//               },
//             }}
//           />
//         ) : (
//           <button
//             onClick={openSignIn}
//             className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-1.5'
//           >
//             Get started <ArrowRight className='w-4 h-4' />
//           </button>
//         )
//       }
//     </div>
//   );
// };

// export default Navbar;




import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, openSignIn } = useClerk();

  return (
    <div className="fixed z-10 w-full backdrop-blur-2xl flex justify-between items-center py-2 px-4 sm:px-6 md:px-10">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="DevIQon Logo"
        className='w-36 sm:w-48 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {/* Auth Buttons */}
      {
        user ? (
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: '48px',
                  height: '48px',
                },
              },
            }}
          />
        ) : (
          <button
            onClick={openSignIn}
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-1.5'
          >
            Get started <ArrowRight className='w-4 h-4' />
          </button>
        )
      }
    </div>
  );
};

export default Navbar;
