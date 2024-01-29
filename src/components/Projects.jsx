import React from 'react'
import RealEstate from '../assets/projects/realestate.jpg'
import WorkImg from '../assets/projects/workImg.jpeg'
import threeIdiots from '../assets/projects/3idiots.png'
import LoginImg from '../assets/projects/loginImg.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-white bg-gray-900'>
        <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>

            {/* header */}
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-b-blue-400 hover:text-blue-400'>Projects</p>
                <p className='text-2xl py-4'>here are some of my top projects</p>
            </div>

            {/* projects */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* card container - in the card container 'content-div' is a personnaly declared a class. It use in index.css */}

                {/* project 1*/}
                <div style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-gray-950 group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                    <div className='opacity-0 group-hover:opacity-100 '>

                        <span className='text-2xl font-bold text-white text-center mx-auto flex flex-col '>
                            ReactJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'>Demo</button>
                            </a>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'> Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* project 2*/}
                <div style={{backgroundImage: `url(${RealEstate})`}}
                className='shadow-lg shadow-gray-950 group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                    <div className='opacity-0 group-hover:opacity-100 '>

                        <span className='text-2xl font-bold text-white text-center mx-auto flex flex-col '>
                            ReactJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'>Demo</button>
                            </a>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'> Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* project 3*/}
                <div style={{backgroundImage: `url(${threeIdiots})`}}
                className='shadow-lg shadow-gray-950 group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                    <div className='opacity-0 group-hover:opacity-100 '>

                        <span className='text-2xl font-bold text-white text-center mx-auto flex flex-col '>
                            ReactJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'>Demo</button>
                            </a>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'> Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* project 4*/}
                <div style={{backgroundImage: `url(${LoginImg})`}}
                className='shadow-lg shadow-gray-950 group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                    <div className='opacity-0 group-hover:opacity-100 '>

                        <span className='text-2xl font-bold text-white text-center mx-auto flex flex-col '>
                            ReactJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'>Demo</button>
                            </a>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'> Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* project 5*/}
                <div style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-gray-950 group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                    <div className='opacity-0 group-hover:opacity-100 '>

                        <span className='text-2xl font-bold text-white text-center mx-auto flex flex-col '>
                            ReactJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'>Demo</button>
                            </a>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'> Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                {/* project 6*/}
                <div style={{backgroundImage: `url(${RealEstate})`}}
                className='shadow-lg shadow-gray-950 group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                    <div className='opacity-0 group-hover:opacity-100 '>

                        <span className='text-2xl font-bold text-white text-center mx-auto flex flex-col '>
                            ReactJs Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'>Demo</button>
                            </a>
                            <a className='px-8' href="/">
                                <button className='text-center rounded-md px-4 py-3 bg-blue-400 text-lg font-bold'> Code</button>
                            </a>
                        </div>

                    </div>
                </div>                
                
            </div>

        </div>


    </div>
  )
}

export default Projects