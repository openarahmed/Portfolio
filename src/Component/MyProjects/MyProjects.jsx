import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const MyProjects = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <div className='text-white max-w-[1280px] mx-auto pb-[150px]'>
            <h1 className=' pt-[150px] text-xl font-primary text-[#848792]'>||  My Projects</h1>
            <h1 className='text-6xl pt-10 pb-[150px] font-primary font-bold'>My Complete Projects.</h1>
            {/* <div className='py-[120px] flex justify-center items-center gap-10'>
               
               
               
            </div> */}
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <div className=" w-[1200px] h-[400px] bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <h1 className='text-3xl my-10'>See Details</h1>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className=" w-[1200px] h-[400px] bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <h1 className='text-3xl my-10'>See Details</h1>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <div className=" w-[1200px] h-[400px] bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <h1 className='text-3xl my-10'>See Details</h1>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <div className=" w-[1200px] h-[400px] bg-[#292C39] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <h1 className='text-3xl my-10'>See Details</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;