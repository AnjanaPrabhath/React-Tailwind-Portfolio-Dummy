import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-900 text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400 hover:text-blue-400 duration-300'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8  px-4'>
                <div>
                    <p className='text-4xl font-bold text-gray-400 sm:text-right'>Hi, my name is Anjana Prabhath and you can call me AJ if you like.</p>
                </div>
                <div>
                    <p className='text-justify'>I am a highly motivated undergraduate student pursuing a BSc (Hons) in Information Technology, driven by a passion for ensuring the highest standards of software quality. With a strong foundation in software development, I am eager to embark on a Quality Assurance Engineering Internship to further develop my skills and contribute to enhancing product reliability. Additionally, I possess strong communication skills, leadership experience, and a reputation for being hardworking and friendly. I am excited to leverage my academic knowledge and work ethic, along with these qualities, to make meaningful contributions as a Quality Assurance Engineering Intern.</p
                    >
                </div>

            </div>
        </div>
    </div>
  )
}

export default About