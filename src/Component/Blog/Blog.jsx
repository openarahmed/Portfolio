import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { BiComment, BiUser } from 'react-icons/bi';
import logo from './../../../asset/man.png'
import token from './../../../asset/token.jpeg'
import sql from './../../../asset/maxresdefault.jpeg'
import express from './../../../asset/express and nest.png'
import mongo from './../../../asset/mongo.png'
import './Blog.css'


const Blog = () => {
    return (
        <section className='bg-[#292C39] text-white'>
            <div className='max-w-[1480px] mx-auto'>
                <div>
                    <h1 className='text-6xl text-center font-bold font-primary pt-32'>Blog List</h1>
                <h1 className='pt-12 text-center text-xl font-primary text-[#848792]'> Blog  ||  Blog List</h1>
                </div>
                <div className=''>
                    <div className='bg-[#242734]  h-[280px] w-[1000px] mx-auto mt-20'>
                        <div className='blogmain items-center px-10'>
                            <div className='mt-12'>
                                <img className='w-[180px] h-[200px]' src={token} alt="" />
                            </div>
                            <div className=''>
                                <h1 className='flex text-xl gap-8'>
                                    <h1>Technology</h1>
                                    <h1>- 07 February 2022</h1>
                                </h1>
                                <h1 className='text-3xl font-primary my-7'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                                <h1 className='flex gap-8 text-xl'>
                                    <h1 className='flex items-center gap-1'><BiUser></BiUser> Jhon Adam</h1>
                                    <h1 className='flex  items-center gap-1'><AiFillLike></AiFillLike>  2k</h1>
                                    <h1 className='flex items-center gap-1'><BiComment className=''></BiComment> 644</h1>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#242734] h-[280px] w-[1000px] mx-auto mt-20 blogmain items-center px-10 '>
                        <div className='bg-'>
                            <img className='w-[180px] h-[200px]' src={sql} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='flex text-xl gap-8'>
                                <h1>Technology</h1>
                                <h1>- 07 February 2022</h1>
                            </h1>
                            <h1 className='text-3xl font-primary my-7'>Compare SQL and NoSQL databases?</h1>
                            <h1 className='flex gap-8 text-xl'>
                                <h1 className='flex items-center gap-1'><BiUser></BiUser> Jhon Adam</h1>
                                <h1 className='flex  items-center gap-1'><AiFillLike></AiFillLike>  2k</h1>
                                <h1 className='flex items-center gap-1'><BiComment className=''></BiComment> 644</h1>
                            </h1>
                        </div>
                    </div>
                    <div className='bg-[#242734] h-[280px] w-[1000px] mx-auto mt-20 blogmain items-center px-10'>
                        <div className='bg-'>
                            <img className='w-[180px] h-[200px]' src={express} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='flex text-xl gap-8'>
                                <h1>Technology</h1>
                                <h1>- 07 February 2022</h1>
                            </h1>
                            <h1 className='text-3xl font-primary my-7'>What is express js? What is Nest JS</h1>
                            <h1 className='flex gap-8 text-xl'>
                                <h1 className='flex items-center gap-1'><BiUser></BiUser> Jhon Adam</h1>
                                <h1 className='flex  items-center gap-1'><AiFillLike></AiFillLike>  2k</h1>
                                <h1 className='flex items-center gap-1'><BiComment className=''></BiComment> 644</h1>
                            </h1>
                        </div>
                    </div>
                    <div className='bg-[#242734] h-[280px] w-[1000px] mx-auto mt-20 blogmain items-center px-10'>
                        <div className='bg-'>
                            <img className='w-[180px] h-[200px]' src={mongo} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='flex text-xl gap-8'>
                                <h1>Technology</h1>
                                <h1>- 07 February 2022</h1>
                            </h1>
                            <h1 className='text-3xl font-primary my-7'>What is MongoDB aggregate and how does it work</h1>
                            <h1 className='flex gap-8 text-xl'>
                                <h1 className='flex items-center gap-1'><BiUser></BiUser> Jhon Adam</h1>
                                <h1 className='flex  items-center gap-1'><AiFillLike></AiFillLike>  2k</h1>
                                <h1 className='flex items-center gap-1'><BiComment className=''></BiComment> 644</h1>
                            </h1>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Blog;