import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <section className='bg-[#292C39] text-white '>
            <h1 className='text-3xl md:text-6xl py-5 md:py-16  text-center font-bold font-primary'>Contact Me</h1>
            <div className='pb-32 max-w-[1480px] mx-auto contactMain'>
                <section className=''>
                    <div className='bg-[#242734]'>
                        <h1 className='md:h-[120px] shadow-lg md:w-[500px] md:text-2xl p-4'>
                            Address: Nikunja-2, Dhaka, Bangladesh.
                        </h1>
                    </div>
                    <div className='bg-[#242734] my-5 shadow-lg'>
                        <h1 className='md:h-[120px] shadow-lg md:w-[500px] md:text-2xl p-4'>
                            Phone:  +8801910882903
                        </h1>
                    </div>
                    <div className='bg-[#242734]'>
                        <h1 className='md:h-[120px] shadow-lg md:w-[500px] md:text-2xl p-4'>
                            Email: communicates.shakil@gmail.com
                        </h1>
                    </div>

                    <div className='bg-[#242734] mt-5 md:mt-20'>
                        <div className='md:h-[300px] text-center shadow-lg md:w-[160px] text-2xl p-4'>
                            <h1 className='text-2xl'>Follow Me</h1>
                            <div className='flex md:gap-5 justify-center md:justify-start text-3xl md:text-5xl md:mt-10'>
                                <div className='w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                    <FaFacebook></FaFacebook>
                                </div>
                                <div className='  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                    <FaInstagram></FaInstagram>
                                </div>
                                <div className='  w-20 h-20 grid justify-center items-center rounded-full hover:text-black hover:bg-white'>
                                    <FaLinkedin></FaLinkedin>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mt-5 md:mt-20 grid justify-center mx-5 md:mx-0'>
                    <h1 className='text-3xl md:text-5xl  font-primary mb-5 md:mb-10'>If you have any porject or <br />  need help Contact me.</h1>
                    <div className=''>
                        <input placeholder='Name ' className='bg-[#292C39] text-xl px-7 border h-[65px] w-full md:w-[320px]' type="text" name="" id="" />
                        <input className='bg-[#292C39] border h-[65px] w-full md:w-[320px] text-xl px-7 md:ms-7' type="text" placeholder='Email' name="" id="" />
                    </div>
                    <div className='mt-7'>
                        <input className='bg-[#292C39] text-xl px-7 border h-[65px] w-full md:w-[320px]' placeholder='Phone' type="text" name="" id="" />
                        <input placeholder='Subject' className='text-xl md:px-7 bg-[#292C39] border h-[65px] ps-7 w-full md:w-[320px] md:ms-7' type="text" name="" id="" />
                    </div>
                    <textarea placeholder='Comment' className='text-xl p-7 bg-[#292C39] md:w-[668px] h-[250px] border mt-7 ' name="" id="" cols="30" rows="10"></textarea>

                    <div className='text-center'>
                        <Link to=''> <button className=' text-2xl border mt-12 p-6 px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Submit Message </span></button></Link>
                    </div>



                </section>

            </div>
        </section>
    );
};

export default Contact;