import React, {useState} from 'react'
import Logo from '../assets/bat.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] bg-gray-900 flex justify-between items-center px-4 text-gray-300'>
        <div className='flex items items-center cursor-pointer'>
            <img className='w-[40px]' src={Logo} alt="" />
            <h1 className='text-blue-400 font-bold uppercase px-4 text-2xl'>Batman</h1>
        </div>

        {/* normal screen */}

        <div>
            <div>
                <ul className='md:flex hidden'>
                    <li>profile</li>
                    <li>about</li>
                    <li>skills</li>
                    <li>work</li>
                    <li>contact</li>
                </ul>
            </div>            
        </div>

        {/* medium size screen */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* small screen */}
        
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>profile</li>
                <li className='py-6 text-3xl'>about</li>
                <li className='py-6 text-3xl'>skills</li>
                <li className='py-6 text-3xl'>work</li>
                <li className='py-6 text-3xl'>contact</li>
            </ul>
        
        {/* social links */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-xl'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400 hover:bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        LinkedIn<FaLinkedin size={30}/> 
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 hover:bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        GitHub<FaGithub size={30}/> 
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400 hover:bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        Mail<HiOutlineMail size={30}/> 
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 hover:bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        Resume<BsFillPersonLinesFill size={30}/> 
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar