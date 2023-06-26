import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-animated-progress-bar';


const SpecialSkills = () => {
    return (
        <div className='max-w-[1480px] mx-auto'>
            <div className='py-[150px] flex justify-center items-center gap-20'>

                <div>
                    <h1 className='font-primary text-xl text-[#848792]'>||  My Special Skills</h1>
                    <h1 className='text-[55px] mt-5 font-bold font-primary'>My Special Skills. <br /> Field Here.</h1>
                    <div>
                        <Link to='https://drive.google.com/file/d/1gWNzyJrELswogpJ7Dn-Aj6J0hOiPlDFV/view?usp=sharing'><button className='font-primary text-2xl border mt-12 p-6 px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Get Resume <FaDownload></FaDownload></span></button></Link>
                    </div>
                </div>
                <div className='grid gap-5'>
                    <div className="card w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl">
                        <div className="">
                            <h2 className="text-2xl flex items-center gap-5 justify-between">Communication <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="#FFFFFF"
                                percentage="80"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#FFFFFF"
                                defColor={{
                                    fair: '#FFFFFF',
                                    good: '#FFFFFF',
                                    excellent: '#FFFFFF',
                                    poor: '#FFFFFF',
                                }}
                                trackBorderColor="#FFFFFF"
                            /></h2>
                        </div>
                    </div>
                    <div className="card w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl">
                        <div className="text-2xl">
                            <h2 className="text-2xl flex justify-between items-center gap-5">Leadership  <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="#FFFFFF"
                                percentage="85"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#FFFFFF"
                                defColor={{
                                    fair: '#FFFFFF',
                                    good: '#FFFFFF',
                                    excellent: '#FFFFFF',
                                    poor: '#FFFFFF',
                                }}
                                trackBorderColor="#FFFFFF"
                            /></h2>
                        </div>
                    </div>
                    <div className="card w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl">
                        <div className="text-3xl">
                            <h2 className="text-2xl flex justify-between items-center gap-5">Teamwork  <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="#FFFFFF"
                                percentage="90"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#FFFFFF"
                                defColor={{
                                    fair: '#FFFFFF',
                                    good: '#FFFFFF',
                                    excellent: '#FFFFFF',
                                    poor: '#FFFFFF',
                                }}
                                trackBorderColor="#FFFFFF"
                            /></h2>
                        </div>
                    </div>
                    <div className="card w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl">
                        <div className="text-2xl">
                            <h2 className="text-2xl flex justify-between items-center gap-5">Flexibility  <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="#FFFFFF"
                                percentage="80"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#FFFFFF"
                                defColor={{
                                    fair: '#FFFFFF',
                                    good: '#FFFFFF',
                                    excellent: '#FFFFFF',
                                    poor: '#FFFFFF',
                                }}
                                trackBorderColor="#FFFFFF"
                            /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialSkills;