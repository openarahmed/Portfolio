import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-[#242734] font-primary text-white max-w-[1280px] mx-auto'>
            <div className=''>
                <div className="navbar pt-20">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#242734] rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>

                            </ul>
                        </div>
                        <a href='' className="hedermain text-5xl">Shakil</a>
                    </div>
                    <div className="navbar-center text-[#848792] flex gap-20 text-[25px]">
                        <a className='hedermain' href="">Home</a>
                        <a className='hedermain' href="">Service</a>
                        <a className='hedermain' href="">Blog</a>
                        <a className='hedermain' href="">Contact</a>
                        
                    </div>
                    <div className="navbar-end">
                        <a className=" border text-2xl p-5 px-12 rounded-full hover:bg-[#363636] text-white'">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;