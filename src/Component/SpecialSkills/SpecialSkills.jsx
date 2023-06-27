import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-animated-progress-bar';
import './SpecialSkills.css'


const SpecialSkills = () => {
    return (
        <div className='max-w-[1480px] mx-auto px-3 md:px-0 pb-5 md:pb-0'>
            <div className=' text-center md:text-start md:py-[150px] md:flex justify-center items-center gap-20'>

                <div>
                    <h1 className='font-primary text-xl pt-5 md:pt-0 text-[#848792]'>||  My Special Skills</h1>
                    <h1 className='text-3xl md:text-6xl mt-5 font-bold font-primary'>My Special Skills. <br /> Field Here.</h1>
                    <div>
                        <Link to='https://drive.google.com/file/d/1gWNzyJrELswogpJ7Dn-Aj6J0hOiPlDFV/view?usp=sharing'><button className='font-primary  md:text-2xl border md:mt-12 p-2 md:p-6 mt-2 md:px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Get Resume <FaDownload></FaDownload></span></button></Link>
                    </div>
                </div>
                <div className='md:grid gap-5 mt-5 md-mt-0'>
                    <div className="card md:w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl md:my-0 my-3">
                        <div className="">
                            <h2 className="text-2xl flex items-center gap-5 justify-between">Communication
                                <div className='hideSpcial'>
                                    <ProgressBar
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
                                    /></div></h2>
                        </div>
                    </div>
                    <div className="card md:w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl md:my-0 my-3">
                        <div className="text-2xl">
                            <h2 className="text-2xl flex justify-between items-center gap-5 ">Leadership  <div className='hideSpcial'><ProgressBar
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
                            /></div></h2>
                        </div>
                    </div>
                    <div className="card md:w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl ">
                    <div className="text-2xl">
                            <h2 className="text-2xl flex justify-between items-center gap-5">Teamwork  <div className='hideSpcial'><ProgressBar
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
                            /></div></h2>
                        </div>
                    </div>
                    <div className="card md:w-[650px] grid items-center px-10 font-primary h-36 bg-[#292C39] shadow-xl mt-3 md:mt-0">
                    <div className="text-2xl">
                            <h2 className="text-2xl flex justify-between items-center gap-5">Flexibility  <div className='hideSpcial'><ProgressBar
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
                            /></div></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialSkills;