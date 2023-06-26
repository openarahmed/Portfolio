import React from 'react';
import { BiSolidPhoneCall, BiLogoGmail } from "react-icons/bi";
import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiFillCopyrightCircle } from "react-icons/ai";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <section>
            <div className='max-w-[1480px] mx-auto '>
                <div className='text-white  py-[150px]'>
                    <div className='text-center'>
                        <h1 className='font-primary text-xl text-[#848792]'>||  Get Latest Updates</h1>
                        <h1 className='text-7xl mt-10 font-primary font-bold'>Subscribe For Newsletter</h1>
                    </div>
                    <div className='text-center mt-16 '><input placeholder='demo.example.com' className='h-16 w-[600px] border font-primary text-2xl rounded-full px-5 bg-[#292C39]' type="email" />
                        <button className='text-2xl hover:border h-16 rounded-full w-[200px] bg-[#242734] ms-8'>Subscribe Now</button>
                    </div>
                    <div className='mt-32 flex justify-around'>
                        <div className='flex items-center gap-3 text-3xl'>
                            <div className='border  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <BiSolidPhoneCall className=''></BiSolidPhoneCall>
                            </div>
                            <h1 className='text-4xl font-primary gap-9'> 01910882903</h1>
                        </div>
                        <div className='flex items-center gap-3 text-3xl'>
                            <div className='border  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <BiLogoGmail></BiLogoGmail>
                            </div>
                            <h1 className='text-4xl  gap-9 font-primary'>communicates.shakil@gmail.com</h1>
                        </div>
                        <div className='flex items-center gap-3 text-3xl'>
                            <div className='border  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaFacebook></FaFacebook>
                            </div>
                            <div className='border  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaInstagram></FaInstagram>
                            </div>
                            <div className='border  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaLinkedin></FaLinkedin>
                            </div>
                            <div className='border  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaTwitter></FaTwitter>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <hr className='w-full' />
            <div className='text-white pb-20 max-w-[1480px] flex justify-between mx-auto mt-8'>
                <div className='flex items-center text-xl gap-1'>
                    <AiFillCopyrightCircle></AiFillCopyrightCircle>
                    2023 Shakil Ahmed. All rights reserved.

                </div>
                <div>

                </div>
                <Link to='#arrowScroll'>
                    <div className='fixed bottom-4 right-4 z-50'>
                        <button className='text-5xl text-white] border rounded-full h-20 w-20 grid justify-center items-center shadow-2xl hover:bg-white hover:text-black '> <FaArrowUp></FaArrowUp></button>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Footer;