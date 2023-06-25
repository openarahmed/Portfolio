import React from 'react';
import { FaDownload } from 'react-icons/fa';

const SpecialSkills = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='py-[150px] flex justify-center items-center gap-20'>
                <div>
                    <h1 className='font-primary text-xl text-[#848792]'>||  My Special Skills</h1>
                    <h1 className='text-[55px] mt-5 font-bold font-primary'>My Special Skills. <br /> Field Here.</h1>
                    <div>
                        <button className='font-primary text-2xl border mt-12 p-6 px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Get Resume <FaDownload></FaDownload></span></button>
                    </div>
                </div>
                <div className='grid gap-5'>
                    <div className="card w-[600px] h-36 bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                        </div>
                    </div>
                    <div className="card w-[600px] h-36 bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                        </div>
                    </div>
                    <div className="card w-[600px] h-36 bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                        </div>
                    </div>
                    <div className="card w-[600px] h-36 bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialSkills;