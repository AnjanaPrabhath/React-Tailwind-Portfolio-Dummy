import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gray-900'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto flex flex-col px-8 justify-center h-full text-white'>
        <p className='text-xl text-blue-400'>Hi, my name is</p>
        <h1 className='md:text-6xl text-4xl font-bold text-gray-200 py-4 hover:text-blue-400 duration-300'>Anjana Prabhath</h1>
        <h2 className='md:text-5xl text-3xl text-gray-400 font-bold'>I am a Full Stack Developer</h2>
        <p className='w-[1000px] py-[30px] text-justify'>I am a highly motivated undergraduate student pursuing a BSc (Hons) in Information Technology, driven by a passion for ensuring the highest standards of software quality. With a strong foundation in software development, I am eager to embark on a Quality Assurance Engineering Internship to further develop my skills and contribute to enhancing product reliability. Additionally, I possess strong communication skills, leadership experience, and a reputation for being hardworking and friendly. I am excited to leverage my academic knowledge and work ethic, along with these qualities, to make meaningful contributions as a Quality Assurance Engineering Intern. </p>
        <div className='ml-0 py-3'>
          <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-blue-400 hover:border-blue-400 duration-300'>View Work <HiArrowNarrowRight className='ml-5 group-hover:rotate-90 duration-300'/> </button>
        </div>
      </div>
    </div>
  )
}

export default Home