import { useState } from 'react'
import { useEffect } from 'react'
import cartImg from './assets/shoppingcart01.png'
import dotImg from './assets/group-5.png'
import bannerImg from './assets/banner.png'
// import './App.css'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Assignment-6/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      {/* Navbar Section */}

      <div className='flex justify-between items-center mt-4 mr-46 mb-4 ml-46 p-6'>
        <div>
          <h1 className='font-bold text-[#4f39f6] text-4xl'>DigiTools</h1>
        </div>
        <div className='text-[#101727] cursor-pointer flex justify-between items-center gap-4'>
          <div>Products</div>
          <div> Features</div>
          <div>Pricing</div>
          <div>Testimonials</div>
          <div>FAQ</div>
        </div>
        <div className='flex justify-between items-center gap-4'>
          <div>
            <img className='cursor-pointer' src={cartImg} alt="" />
          </div>
          <div>
            <p className='text-[#101727] cursor-pointer hover:animate-[float_0.6s_ease-in-out_infinite] transition'>Login</p>
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
          <img src={bannerImg} alt="" />
        </div>
      </section>

      <section className="flex justify-around bg-[#4f39f6] pt-12 pr-48 pb-12 pl-48 text-[#FFFFFF]">
        <div>
          <p className='font-bold text-5xl mb-1'>50K+</p>
          <br />
          <p className='text-2xl text-[#FFFFFF]'>Active Users</p>
        </div>
        <div className="h-17 w-px bg-white opacity-25"></div>
        <div>
          <p className='font-bold text-5xl mb-1'>200+</p>
          <br />
          <p className='text-2xl text-[#FFFFFF]'>Premium Tools</p>
        </div>
        <div className="h-17 w-px bg-white opacity-25"></div>
        <div>
          <p className='font-bold text-5xl mb-1'>4.9</p>
          <br />
          <p className='text-2xl text-[#FFFFFF]'>Rating</p>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center mt-30 mr-43 mb-10 ml-43'>
        <div className='text-center mb-4'>
          <h1 className='font-semibold text-5xl text-[#101727] '>Premium Digital Tools</h1>
          <br />
          <p className='text-[#627382] text-xl'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
        </div>
        <div>
          <button className='text-[#FFFFFF] bg-[#4f39f6] rounded-[1000px] px-5 py-2 cursor-pointer mr-4'>Products</button>
          <button>Cart(0)</button>
        </div>
      </section>

      <section className='bg-[#FFFFFF] mt-10 mr-43 mb-32 ml-43'>
        <div className='grid grid-cols-3 gap-3'>
          {products.map(products => (
            <div key={products.id} className='border border-gray-200 rounded-2xl p-5'>
              <div className='text-right border border-gray-100 bg w-fit rounded-2xl'>{products.tag}</div>
              <div className='mb-4 border border-gray-50 bg-[#f5f5f5] w-fit rounded-[1000px] p-3.5'>
                <img src={products.image} alt="" />
              </div>
              <div className='font-semibold text-2xl mb-4 text-[#101727] '>
                <h1>{products.name}</h1>
              </div>
              <div className='mb-4 text-[#627382]'>
                <p>{products.description}</p>
              </div>
              <div className='mb-4'>
                <span className='font-bold text-2xl'>{products.price}</span>/<span>{products.type}</span>
              </div>
              <div className='mb-4'>
                <ul>
                  {products.features.map((f, i) => (

                    <li className='flex gap-2' key={i}>
                      <img src="/Assignment-6/images/Check.png" alt="" />
                      {typeof f === "string" ? f : f.text1 || f.text2 || f.text3}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button className='bg-[#4f39f6] text-white rounded-[100px] px-10 py-2 w-full cursor-pointer'>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
        ;
      </section>

    </>
  )
}
export default App
