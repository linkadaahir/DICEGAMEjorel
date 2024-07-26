// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="py-2 px-6 bg-purple-800 flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <Link to="/" className="flex items-center pb-4 border-b border-b-gray-800 bg-white p-4 z-50">
                <h2 className="font-bold text-2xl">JEU DE <span className="bg-purple-800 text-white px-2 rounded-md">DÉS</span></h2>
            </Link>
            <ul className="ml-auto flex items-center">
                <li className="dropdown ml-3">
                    <button type="button" className="dropdown-toggle flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                                <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt=""/>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-2 md:block text-left">
                            <h2 className="text-sm font-semibold text-white">Pseudo</h2>
                            <p className="text-xs text-white">Administrateur</p>
                        </div>                
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                        <li>
                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profil</a>
                        </li>
                        <li>
                            <form method="POST" action="">
                                <Link to="/login" role="menuitem" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer">
                                    Déconnexion
                                </Link>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
