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
                <div className='text-white py-10 md:py-[150px]'>
                    <div className='text-center'>
                        <h1 className='font-primary text-xl text-[#848792]'>||  Get Latest Updates</h1>
                        <h1 className='text-5xl md:text-7xl mt-10 font-primary font-bold'>Subscribe For Newsletter</h1>
                    </div>
                    <div className='text-center mt-16 '><input placeholder='demo.example.com' className='h-16 md:w-[600px] border font-primary text-2xl rounded-full px-5 bg-[#292C39]' type="email" />
                        <button className='md:text-2xl mt-2 hover:border h-16 rounded-full w-[200px] bg-[#242734] md:ms-8'>Subscribe Now</button>
                    </div>
                    <div className='mt-10 md:mt-32 md:flex justify-around px-4'>
                        <div className='flex items-center md:gap-3 gap-1 md:text-3xl'>
                            <div className='md:border  md:w-20 md:h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <BiSolidPhoneCall className=''></BiSolidPhoneCall>
                            </div>
                            <h1 className='md:text-4xl text-lg font-primary gap-9'> 01910882903</h1>
                        </div>
                        <div className='flex items-center gap-1 md:gap-3 md:text-3xl'>
                            <div className='md:border  md:w-20 md:h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <BiLogoGmail></BiLogoGmail>
                            </div>
                            <Link ><h1 className='md:text-4xl text-xl  gap-9 font-primary '>communicates.shakil@gmail.com</h1></Link>
                            
                        </div>
                        <div className='flex items-center justify-center md:justify-start gap-3 text-3xl mt-5 md:mt-0'>
                            <Link to='https://www.facebook.com/communicate.shakil'><div className='md:border  md:w-20 md:h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaFacebook></FaFacebook>
                            </div></Link>
                           
                            <div className='md:border  md:w-20 md:h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaInstagram></FaInstagram>
                            </div>
                           <Link to='https://www.linkedin.com/in/communicates-shakil/'> <div className='md:border  md:w-20 md:h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaLinkedin></FaLinkedin>
                            </div></Link>
                            <div className='md:border  md:w-20 md:h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                <FaTwitter></FaTwitter>
                                
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <hr className='w-full' />
            <div className='text-white pb-20 max-w-[1480px] flex  justify-between mx-auto mt-8'>
                <div className='flex px-3 items-center text-sm gap-1'>
                    <AiFillCopyrightCircle></AiFillCopyrightCircle>
                    2023 Shakil Ahmed. All rights reserved.

                </div>
              
                <Link to='#arrowScroll'>
                    <div className='fixed bottom-4 right-4 z-50'>
                        <button className='text-5xl text-white] border rounded-full md:h-20 md:w-20 grid justify-center items-center shadow-2xl hover:bg-white hover:text-black '> <FaArrowUp></FaArrowUp></button>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Footer;