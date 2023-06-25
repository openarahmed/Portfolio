import React from 'react';
import banner from './../../asset/banner portfolio final.png'
import Header from './Header/Header';
import MyJob from './MyJob/MyJob';
import MyProjects from './MyProjects/MyProjects';
import Services from './Services/Services';
import SpecialSkills from './SpecialSkills/SpecialSkills';
import { FaBeer, FaDownload } from 'react-icons/fa';

const Home = () => {
    return (
        <div className=' text-white'>
            <section className='bg-[#242734]'>
                <Header></Header>
                <div className=' font-primary max-w-[1480px] mx-auto grid grid-cols-2 justify-center items-center'>
                    <div className='grid justify-center'>
                        <h1 className='text-[80px] text-white'>Hello! I’m</h1>
                        <h1 className='text-[105px] font-bold'>Shakil Ahmed</h1>
                        <h1 className='text-2xl'>MERN Stack Web Developer</h1>
                        <div>
                            <button className=' text-2xl border mt-12 p-6 px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Get Resume <FaDownload></FaDownload></span></button>
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-[1000px] mx-auto' src={banner} alt="" />
                    </div>
                </div>
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