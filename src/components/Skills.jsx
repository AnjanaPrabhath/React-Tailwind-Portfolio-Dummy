import React from 'react'
import cssImg from '../assets/css.png'
import htmlImg from '../assets/html.png'
import javaImg from '../assets/java.png'
import pythonImg from '../assets/python.png'
import ReactImg from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-900 text-white '>
        <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='font-bold inline border-b-4 border-blue-400 md:text-4xl hover:text-blue-400 duration-300'>Skills</p>
                <p className='text-2xl py-4 mt-4'>These are the technologies I have worked with...</p>
            </div>

            {/* logo or images are here */}

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {/* html */}
                <div className='shadow-md shadow-gray-950 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={htmlImg} alt="" />
                    <p className='my-4'>HTML-5</p> 
                </div>
                {/* css */}
                <div className='shadow-md shadow-gray-950 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={cssImg} alt="" />
                    <p className='my-4'>CSS</p> 
                </div>
                {/* java */}
                <div className='shadow-md shadow-gray-950 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={javaImg} alt="" />
                    <p className='my-4'>Java</p> 
                </div>
                {/* python */}
                <div className='shadow-md shadow-gray-950 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={pythonImg} alt="" />
                    <p className='my-4'>Python</p> 
                </div>
                {/* react */}
                <div className='shadow-md shadow-gray-950 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-4' src={ReactImg} alt="" />
                    <p className='my-4'>React</p> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills