import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-900 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/62faeff4-9354-4998-8236-f95a9e8186e3" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-blue-400 text-white hover:text-blue-400'>Contact</p>
                <p className=' pt-6 text-gray-300 py-3'>submite the form below or shoot me an email - prabhathxdissanayake@gmail.com</p>
            </div>
            <input className='bg-[#273561] p-2 text-white'  type="text" placeholder='Your Name' name='name' />
            <input className='my-4 bg-[#273561] p-2 text-white' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-[#273561] p-2 text-white' placeholder='Message' name="message" id=""  rows="7"></textarea>
            <button className='text-white border-2 hover:border-blue-400 hover:bg-blue-400 px-4 py-3 mx-auto items-center my-8 duration-300'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact