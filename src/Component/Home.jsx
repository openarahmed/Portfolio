import React from 'react';
import banner from './../../asset/banner portfolio final.png'
import Header from './Header/Header';
import MyJob from './MyJob/MyJob';
import MyProjects from './MyProjects/MyProjects';
import Services from './Services/Services';
import SpecialSkills from './SpecialSkills/SpecialSkills';
import { FaBeer, FaDownload } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'
import AboutMe from './AboutMe/AboutMe';


const Home = () => {
    return (
        <div className=' text-white'>
            <section className='bg-[#242734]'>

                <div className=' font-primary max-w-[1480px] mx-auto grided justify-center items-center '>
                    <div className='grid justify-center'>
                        <h1 className=' md:text-[70px] text-white mt-5'>Hello! I’m</h1>
                        <h1 className='nameTitile md:text-[95px] font-bold'>Shakil Ahmed</h1>
                        <h1 className='text-2xl'></h1>
                        <div className='md:text-3xl'>
                            <Typewriter
                                words={['Web Developer', 'MERN Stack Web Developer', 'Front End Developer']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </div>
                        <div>
                            <Link to='https://drive.google.com/file/d/1gWNzyJrELswogpJ7Dn-Aj6J0hOiPlDFV/view?usp=sharing'> <button className=' md:text-2xl border mt-2 md:mt-12 p-2 md:p-6 md:px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Get Resume <FaDownload></FaDownload></span></button></Link>
                        </div>
                    </div>
                    <div className=''>
                        <img className='md:w-[1000px] w-[300px] mx-auto' src={banner} alt="" />
                    </div>
                </div>
            </section>
            <section className='bg-[#292C39]'>
                <AboutMe></AboutMe>
            </section>
            <section className='bg-[#292C39]'>
                <Services></Services>
            </section>
            <section className='bg-[#242734]'>
                <SpecialSkills></SpecialSkills>
            </section>
            <section className='bg-[#292C39]'>
                <MyJob></MyJob>
            </section>
            <section className='bg-[#242734]'>
                <MyProjects></MyProjects>
            </section>
        </div>
    );
};

export default Home;