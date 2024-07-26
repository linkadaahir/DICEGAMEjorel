// src/components/Inscription.js
import React from 'react';
import '../styles/Inscription.css';

const Inscription = () => {
  return (
    <div className="inscription-container">
      <h2>Inscription</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default Inscription;


// import React, { useState } from 'react';

// const Inscription = () => {
//   const [showPassword, setShowPassword] = useState(true);

//   return (
//     <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-purple-900">
//         <img src="/path/to/image/des-jeu.jpg" alt="DiceGame" className="w-full h-full object-cover bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800" />
//       </div>

//       <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
//         <div className="self-start hidden lg:flex flex-col text-gray-300">
//           <h1 className="my-3 font-semibold text-4xl">Bienvenue dans Dice Game</h1>
//           <p className="pr-3 text-sm opacity-75">Notre jeu se deroule entre un a plusieurs utilisateurs..laisser vous tenter par l'expreience.</p>
//         </div>
//       </div>

//       <div className="flex justify-center self-center z-10">
//         <div className="p-12 bg-white mx-auto rounded-3xl w-96">
//           <div className="mb-7">
//             <h3 className="font-semibold text-2xl text-gray-800">DICE GAME</h3>
//             <p className="text-gray-400">
//               Avez vous deja un compte? 
//               <a href="/login" className="text-sm text-purple-700 hover:text-purple-700">connexion</a>
//             </p>
//             <p className="text-xl text-black">Inscrivez vous!</p>
//           </div>
//           <div className="space-y-6">
//             <div>
//               <input className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Pseudo" />
//             </div>

//             <div className="relative">
//               <input placeholder="Password" type={showPassword ? 'password' : 'text'} className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400" />
//               <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
//                 <svg onClick={() => setShowPassword(!showPassword)} className={`h-4 text-purple-700 ${showPassword ? 'block' : 'hidden'}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                   <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
//                 </svg>
//                 <svg onClick={() => setShowPassword(!showPassword)} className={`h-4 text-purple-700 ${showPassword ? 'hidden' : 'block'}`} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
//                   <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
//                 </svg>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-between">
//               <div className="text-sm ml-auto">
//                 <a href="/loading" className="text-purple-700 hover:text-purple-600">Connexion mode invite</a>
//               </div>
//             </div>

//             <div>
//               <button type="submit" className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">inscription</button>
//             </div>
//             <div className="flex items-center justify-center space-x-2 my-5">
//               <span className="h-px w-16 bg-gray-100"></span>
//               <span className="text-gray-300 font-normal">ou</span>
//               <span className="h-px w-16 bg-gray-100"></span>
//             </div>
//             <div className="flex justify-center gap-5 w-full">
//               <button type="button" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500">
//                 <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
//                   <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.01 3.105C3.054 23.278 7.252 26 12 26c2.92 0 5.408-.998 7.197-2.698l-3.156-2.56Z"/>
//                   <path fill="#4A90E2" d="M20.791 24.927A12.936 12.936 0 0 0 25 13a12.94 12.94 0 0 0-4.172-9.248l-3.886 3.12c.837.89 1.485 1.99 1.885 3.208L20.79 13c0 1.498-.416 2.898-1.144 4.127l-3.063-2.516Z"/>
//                   <path fill="#FBBC05" d="M6.14 15.216A7.07 7.07 0 0 1 6 13c0-.754.12-1.482.314-2.177L2.27 7.708A12.94 12.94 0 0 0 0 13c0 2.096.512 4.078 1.416 5.827l4.724-3.611Z"/>
//                 </svg>
//                 <span>Google</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Inscription;
