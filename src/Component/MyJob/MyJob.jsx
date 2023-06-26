import React from 'react';
import fav from './../../../asset/web-development-svgrepo-com.svg'



const MyJob = () => {
    return (
        <div className='text-white max-w-[1480px] mx-auto'>
            <h1 id='services' className='pt-[150px] text-xl font-primary text-[#848792]'>||  Services Provide</h1>
            <h1 className='text-6xl mt-10  font-primary font-bold'>Service Provide For My Clients.</h1>
            <div className='py-[120px] flex justify-center items-center gap-10'>
                <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-primary mt-1">Web Application Development</h2>
                        <hr className='my-5' />
                        <p className='text-xl'>We build custom web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). This includes designing the architecture, implementing features, integrating APIs, and deploying the application.</p>

                    </div>
                </div>
                <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-primary mt-10">FrontEnd Development</h2>
                        <hr className='my-5' />
                        <p className='text-xl'>Our frontend development service with React offers cutting-edge solutions to build dynamic and interactive user interfaces. With our expertise in React, we create responsive and high-performance web applications that provide an exceptional user experience.</p>

                    </div>
                </div>
                <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-primary mt-10">Responsive Design</h2>
                        <hr className='my-5' />
                        <p className='text-xl'>We ensure your application is fully responsive and optimized for various devices and screen sizes. Our team implements responsive design techniques using CSS frameworks, media queries, and flexible layouts to provide a seamless user experience across desktop, tablets, and mobile devices.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyJob;