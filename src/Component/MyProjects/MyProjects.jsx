import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import one from './../../../asset/Screenshot 2023-06-27 at 12.30.20 AM.png'
import two from './../../../asset/two.png'
import './MyProject.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const MyProjects = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='text-white max-w-[1480px] mx-auto pb-[150px] text-center'>
            <h1 id='projetcs' className=' pt-5 md:pt-[150px] md:text-xl font-primary text-[#848792]'>||  My Projects</h1>
            <h1 className='text-3xl md:text-6xl pt-10 pb-10 md:pb-[150px] font-primary font-bold'>My Complete Projects.</h1>
           
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <div className="image-container md:w-[700px] md:h-[450px] bg-[#292C39] shadow-xl">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" ">
                            <img className='rounded-md image' src={one} alt="" />
                            {isHovered && <div className="hover-text">
                                <div>
                                    <h1 className='mb-5'><span className='text-2xl font-bold '>Prime Sports </span> is a full stack web application. It is an online sports academy platform that connects students with instructors.</h1>
                                    <h1 className='text-2xl font-bold '>Feauters:</h1>
                                    <p>1. The Prime Sports website has three types of users: admin, instructors, and students. Each
                                        user type has specific functionalities and access levels tailored to their roles.</p>
                                    <p>2. Prime Sports website provides strong authentication security through the use of JWT</p>
                                    <p>
                                        3. Prime Sports website features secure Google Sign Up and Login functionality by Firebase
                                    </p>
                                    <p className='mt-5'>
                                        <span className='text-2xl font-bold'>Technologies:</span> The website was built using React, Express, MongoDB, firebase
                                    </p>
                                </div>
                            </div>}


                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-9'>
                        <Link to='https://pirme-sports.web.app/'> <h1 className='md:text-xl text-center font-primary mt-4'>Visit Live Site</h1></Link>
                        <Link to='https://github.com/shakilcodes/prime-sports-client'> <h1 className='md:text-xl text-center font-primary mt-4'>Client Site Code</h1></Link>
                        <Link to='https://github.com/shakilcodes/prime-sports-server'> <h1 className='md:text-xl text-center font-primary mt-4'>Server Site Code</h1></Link>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                <div className="image-container md:w-[700px] md:h-[450px] bg-[#292C39] shadow-xl">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" ">
                            <img className='rounded-md image' src={two} alt="" />
                            {isHovered && <div className="hover-text">
                                <div>
                                    <h1 className='mb-5'><span className='text-2xl font-bold '>Toy Kingdom</span> is a full stack web application. It is an online E-commerce site where you can buy kids toy.</h1>
                                    <h1 className='text-2xl font-bold '>Feauters:</h1>
                                    <p>1. User-Friendly interface</p>
                                    <p>2. Enhanced Product Search and Filtering</p>
                                    <p>
                                        3. Any user can Add a new product
                                    </p>
                                    <p className='mt-5'>
                                        <span className='text-2xl font-bold'>Technologies:</span> The website was built using React, Express, MongoDB, firebase
                                    </p>
                                </div>
                            </div>}


                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-9'>
                        <Link to='https://toy-kingdom-11ef9.web.app/'> <h1 className='md:text-xl text-center font-primary mt-4'>Visit Live Site</h1></Link>
                        <Link to='https://github.com/shakilcodes/toy-kingdom-client'> <h1 className='md:text-xl text-center font-primary mt-4'>Client Site Code</h1></Link>
                        <Link to='https://github.com/shakilcodes/toy-kingdom-server'> <h1 className='md:text-xl text-center font-primary mt-4'>Server Site Code</h1></Link>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                <div className="image-container md:w-[700px] md:h-[450px] bg-[#292C39] shadow-xl">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" ">
                            <img className='rounded-md image' src={one} alt="" />
                            {isHovered && <div className="hover-text">
                                <div>
                                    <h1 className='mb-5'><span className='text-2xl font-bold '>Prime Sports </span> is an online sports academy platform that connects students with instructors.</h1>
                                    <h1 className='text-2xl font-bold '>Feauters:</h1>
                                    <p>1. The Prime Sports website has three types of users: admin, instructors, and students. Each
                                        user type has specific functionalities and access levels tailored to their roles.</p>
                                    <p>2. Prime Sports website provides strong authentication security through the use of JWT</p>
                                    <p>
                                        3. Prime Sports website features secure Google Sign Up and Login functionality by Firebase
                                    </p>
                                    <p className='mt-5'>
                                        <span className='text-2xl font-bold'>Technologies:</span> The website was built using React, Express, MongoDB, firebase
                                    </p>
                                </div>
                            </div>}


                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-9'>
                        <Link> <h1 className='md:text-xl text-center font-primary mt-4'>Visit Live Site</h1></Link>
                        <Link> <h1 className='md:text-xl text-center font-primary mt-4'>Client Site Code</h1></Link>
                        <Link> <h1 className='md:text-xl text-center font-primary mt-4'>Server Site Code</h1></Link>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                <div className="image-container md:w-[700px] md:h-[450px] bg-[#292C39] shadow-xl">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" ">
                            <img className='rounded-md image' src={one} alt="" />
                            {isHovered && <div className="hover-text">
                                <div>
                                    <h1 className='mb-5'><span className='text-2xl font-bold '>Prime Sports </span> is an online sports academy platform that connects students with instructors.</h1>
                                    <h1 className='text-2xl font-bold '>Feauters:</h1>
                                    <p>1. The Prime Sports website has three types of users: admin, instructors, and students. Each
                                        user type has specific functionalities and access levels tailored to their roles.</p>
                                    <p>2. Prime Sports website provides strong authentication security through the use of JWT</p>
                                    <p>
                                        3. Prime Sports website features secure Google Sign Up and Login functionality by Firebase
                                    </p>
                                    <p className='mt-5'>
                                        <span className='text-2xl font-bold'>Technologies:</span> The website was built using React, Express, MongoDB, firebase
                                    </p>
                                </div>
                            </div>}


                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-9'>
                        <Link> <h1 className='md:text-xl text-center font-primary mt-4'>Visit Live Site</h1></Link>
                        <Link> <h1 className='md:text-xl text-center font-primary mt-4'>Client Site Code</h1></Link>
                        <Link> <h1 className='md:text-xl text-center font-primary mt-4'>Server Site Code</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;