import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { AiFillAccountBook, AiFillHtml5 } from "react-icons/ai";
import { DiBootstrap, DiCss3 } from "react-icons/di";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";

const Services = () => {

    return (
        <div className='text-white max-w-[1480px] mx-auto'>
            <h1 className='pt-[150px] mb-10 font-primary text-xl text-[#848792]'>|| My Skills</h1>
            <h1 className='text-6xl  font-primary font-bold'>My Skills and Tools.</h1>
            <div className='py-[120px] flex justify-center items-center gap-10'>
                {/* <img src={fav} alt="" /> */}

                <div className='flex gap-5'>
                    <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                        <div className="card-body">
                            <h2 className="font-primary text-4xl mb-5 mt-5">Expertise</h2>
                            <hr className='mb-5'/>
                            <p className='flex items-center text-2xl gap-2'><AiFillHtml5 className='text-2xl'></AiFillHtml5> HTML</p>
                            <p className='flex items-center text-2xl gap-2'><DiCss3></DiCss3> CSS</p>
                            <p className='flex items-center text-2xl gap-2'><DiBootstrap></DiBootstrap> Bootstrap</p>
                            <p className='flex items-center text-2xl gap-2'><BiLogoTailwindCss></BiLogoTailwindCss> TailWind</p>
                            <p className='flex items-center text-2xl gap-2'><BiLogoReact></BiLogoReact> React js</p>
                            <p className='flex items-center text-2xl gap-2'><SiExpress></SiExpress> Express js</p>
                            <p className='flex items-center text-2xl gap-2'><SiMongodb></SiMongodb> MongoDB</p>

                        </div>

                    </div>
                    <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                        <div className="card-body">
                            <h2 className="font-primary text-4xl mb-5 mt-5 ">Comfortable</h2>
                            <hr className='mb-5'/>
                            <p className='flex items-center text-2xl gap-2'>JavaScript</p>
                            <p className='flex items-center text-2xl gap-2'>Firebase</p>
                            <p className='flex items-center text-2xl gap-2'>JWT</p>
                            <p className='flex items-center text-2xl gap-2'>Stripe</p>

                        </div>

                    </div>
                    <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                        <div className="card-body">
                            <h2 className="font-primary text-4xl mb-5 mt-5">Familiar</h2>
                            <hr className='mb-5'/>
                            <p className='flex items-center text-2xl gap-2'>Node js</p>
                            <p className='flex items-center text-2xl gap-2'>Next js</p>

                        </div>

                    </div>
                    <div className=" w-[350px] h-[500px] bg-[#242734] shadow-xl">
                        <div className="card-body">
                            <h2 className="font-primary text-4xl mb-5 mt-5">Tools</h2>
                            <hr className='mb-5'/>
                            <p className='flex items-center text-2xl gap-2'>VS Code</p>
                            <p className='flex items-center text-2xl gap-2'>GitHub</p>
                            <p className='flex items-center text-2xl gap-2'>Figma</p>
                            <p className='flex items-center text-2xl gap-2'>Photoshop</p>
                            <p className='flex items-center text-2xl gap-2'>Netlify</p>
                            <p className='flex items-center text-2xl gap-2'>Vercel</p>

                        </div>
                    </div>
                </div>


                {/* HTML | CSS | Bootstrap | Tailwind | React | Express js | MongoDB */}

            </div>
        </div>
    );
};

export default Services;