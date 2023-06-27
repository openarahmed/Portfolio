import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutMeDetails = () => {
    return (
        <section className='bg-[#242734]  text-white text-xl'>
            <div className='max-w-[1480px] mx-auto'>
                <div className='text-center mb-16'>
                    <h1 className='pt-[60px] mb-10 font-primary text-xl text-[#848792]'>|| About Me</h1>
                    <h1 className='text-6xl  font-primary font-bold'>About Me</h1>
                    <div> 
                        <Link to='https://drive.google.com/file/d/1gWNzyJrELswogpJ7Dn-Aj6J0hOiPlDFV/view?usp=sharing'> <button className=' text-2xl border mt-12 p-6 px-12 rounded-full bg-[#242734] hover:bg-[#2e303c] text-white'><span className='flex gap-4 items-center'>Get Resume <FaDownload></FaDownload></span></button></Link>
                    </div>
                </div>
                <div className='max-w-[850px] mx-auto pb-32'>
                    <p>
                        Hello, I'm Shakil Ahmed. It's a pleasure to meet  you. As an aspiring MERN stack developer, I'm excited to embark on this journey of web development. While I may not have professional experience yet, I am dedicated to learning and growing in this field.
                    </p>

                    <p className='my-10'>
                        My primary focus is on the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. These technologies allow for the development of robust and interactive web applications. I have invested significant time and effort into studying and practicing these technologies to build a strong foundation.
                    </p>

                    <h1 className='text-3xl my-5 font-primary'>My Skills:</h1>

                    <h3 className='text-2xl font-bold mb-5'>Frontend Development:</h3>

                    <p> Proficient in HTML5, CSS3, and JavaScript
                        Familiarity with modern frontend frameworks like React.js</p>
                    <p className='my-7'>Understanding of responsive design principles for creating user-friendly interfaces
                    </p>
                    <h3 className='text-2xl font-bold my-5'>Backend Development:</h3>

                    <p>Knowledge of server-side programming using Node.js
                        Familiarity with the Express.js framework for building RESTful APIs</p>
                    <p className='my-5'> Basic understanding of working with MongoDB, a NoSQL database</p>
                    <h1 className='text-3xl font-primary my-5'>Additional Skills:</h1>

                    <p>Version control using Git and GitHub
                        Familiarity with command-line tools and basic UNIX-like environment</p>
                    <p className='my-5'>
                        Basic knowledge of working with APIs
                        I have a strong passion for learning and continuously strive to enhance my skills and keep up with the latest trends and best practices in web development. I am a motivated and committed individual, always eager to take on new challenges and push myself to grow as a developer.
                    </p>

                    <p>
                        While I may be new to the industry, I approach my work with enthusiasm and attention to detail. I strive to write clean and well-structured code, and I am open to feedback and constructive criticism to improve my skills and deliver high-quality work.
                    </p>

                    <p className='my-5'>
                        Collaboration and effective communication are important to me. I believe that working as a team and exchanging ideas lead to better results. I am excited about the opportunity to work with experienced professionals and contribute my skills to create exceptional web applications.
                    </p>

                    <p>
                        If you are looking for a dedicated and enthusiastic MERN stack developer, I would be thrilled to be a part of your team. Please feel free to reach out to me. Let's work together to bring ideas to life and create amazing digital experiences!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMeDetails;