import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import cartImg from '../assets/shoppingcart01.png'
import dotImg from '../assets/group-5.png'
// import './App.css'

function App() {

  return (
    <>
                          {/* Navbar Section */}
                          
    <div  className='flex justify-between items-center mt-4 mr-50 mb-4 ml-50 p-6'>
      <div>
        <h1 className='font-bold text-[#4f39f6] text-3xl'>DigiTools</h1>
      </div>
      <div className='text-[#101727] cursor-pointer flex justify-between items-center gap-3.5'> 
          <div>Products</div>
          <div> Features</div>
          <div>Pricing</div>
          <div>Testimonials</div>
          <div>FAQ</div>
      </div>
      <div  className='flex justify-between items-center gap-3.5'> 
        <div> 
          <img className='cursor-pointer' src={cartImg} alt="" />
        </div>
        <div> 
          <p className='text-[#101727] hover:animate-[float_0.6s_ease-in-out_infinite] transition'>Login</p>
        </div>
        <div> 
          <button className='text-[#FFFFFF] bg-[#4f39f6] rounded-[1000px] px-4 py-2 cursor-pointer hover:bg-blue-900 hover:animate-[float_0.6s_ease-in-out_infinite] transition'>Get Started</button>
        </div>
      </div>
    </div>
    <hr className='opacity-10 h-[0.00000000000000000000000000000000000000000000000000001px]' />

    <section className='flex justify-between items-center mt-15 mr-48 mb-15 ml-48'>
      <div className='flex flex-col gap-6'> 
        <div className='flex items-center gap-2 bg-[#e1e7ff] w-fit rounded-full px-3 py-2 cursor-pointer'> 
           <span className="w-4 h-4 bg-purple-500 rounded-full "></span>
           <p className='text-[#4f39f6]'>
            New: AI-Powered Tools Available
           </p>
        </div>
        <div> 
          <h1 className='text-6xl font-semibold'>Supercharge Your <br />Digital Workflow</h1>
        </div>
        <div> 
          <p className='text-[#101727] text-xl'>
            Access premium AI tools, design assets, templates, and productivity<br />
            software—all in one place. Start creating faster today.<br />Explore Products
          </p>
        </div>
        <div> 
          <button className='mr-3.5 text-[#ffffff] bg-[#4f39f6] rounded-[100px] px-5 py-2.5 cursor-pointer'>Explore Products

          </button>

          <button className='border-[#4f39f6] border text-[#4f39f6] rounded-[100px] px-5 py-2.5 cursor-pointer'>
            <span><i className="fa-solid fa-play"></i></span> Watch Demo
          </button>
        </div>
      </div>
      <div> 
          <img src="./assets/banner.png" alt="" />
      </div>
    </section>

    </>
  )
}
export default App
