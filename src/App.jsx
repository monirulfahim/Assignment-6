import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
                          {/* Navbar Section */}
                          
    <div  className='flex justify-between items-center mt-4 mr-50 mb-4 ml-50'>
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
          <img src="./assets/shoppingcart01.png" alt="" />
        </div>
        <div> 
          <p className='text-[#101727]'>Login</p>
        </div>
        <div> 
          <button className='text-[#FFFFFF] bg-[#4f39f6] rounded-[1000px] px-4 py-2 cursor-pointer hover:bg-blue-900 hover:animate-[float_0.6s_ease-in-out_infinite] transition'>Get Started</button>
        </div>
      </div>
    </div>
    <hr className='opacity-10 h-[0.00000000000000000000000000000000000000000000000000001px]' />


    </>
  )
}
export default App
