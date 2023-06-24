import React from 'react';

const SpecialSkills = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='py-[150px] flex justify-center items-center gap-20'>
                <div>
                    <h1 className='text-[55px] font-bold font-primary'>My Special Skills. <br /> Field Here.</h1>
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