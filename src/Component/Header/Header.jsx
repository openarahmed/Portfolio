import React from 'react';
import { FaForward } from 'react-icons/fa';
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link';
import logo from './../../../asset/logo shakil.png'


const Header = () => {
    return (
        <div id='arrowScroll' className='bg-[#242734]  font-primary text-white max-w-[1480px] mx-auto'>
            <div className=''>
                <div className="navbar  pt-10">
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
                        <Link to='/' className="hedermain text-5xl"><img className='w-[230px]' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center text-[#848792] flex gap-20 text-[25px]">
                        <Link className='hedermain' to='/'>Home</Link>
                        <Link className='hedermain' to='#services'>Service</Link>
                        <Link className='hedermain' to='#projetcs'>Projects</Link>
                        <Link className='hedermain' to='/blog'>Blog</Link>
                        <Link className='hedermain' to='/contact'>Contact</Link>
                        <div className="flex-none">
                            
                        </div>
                    </div>
                    <div className="navbar-end">
                        <Link to='/contact' className=" border text-2xl p-5 px-12 rounded-full hover:bg-[#2e303c] text-white'"><span className='flex gap-3 items-center'>Hire Me <FaForward></FaForward></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;