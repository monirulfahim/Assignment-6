import { useState } from 'react'
import { useEffect } from 'react'
import cartImg from './assets/shoppingcart01.png'
import bannerImg from './assets/banner.png'
import userImg from './assets/user.png'
import packageImg from './assets/package.png'
import rocketImg from './assets/rocket.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './App.css'

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [view, setView] = useState("products");
  

  useEffect(() => {
    fetch('/Assignment-6/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);

  const updatedProducts = products.filter(p => p.id !== product.id);
      setProducts(updatedProducts);
       toast.success(`${product.name} added to cart 🛒`);
  };

  const handleRemove = (index) => {
   const removedItem = cart[index];

  setCart(prevCart => prevCart.filter((_, i) => i !== index));

  setProducts(prevProducts =>
    [...prevProducts, removedItem].sort((a, b) => a.id - b.id)
  );
   toast.info(`${removedItem.name} removed 🚫`);
};

const handleCheckout = () => {
  if (cart.length === 0) {
    toast.error("Cart is already empty!");
    return;
  }

  setCart([]);
  toast.success("Checkout successful 🎉");
};

  return (
    <>
      {/* Navbar Section */}

      <div className='flex justify-between items-center mt-4 mr-46 mb-4 ml-46 p-6  sm:flex-row px-4 sm:px-12 py-4 gap-4'>
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


      {/* Banner Section */}

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

      {/*  Stats Section */}

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
          <button onClick={() => setView("products")} className={`px-5 py-2 rounded-[1000px] mr-4 cursor-pointer 
    ${view === "products"
              ? "bg-[#4f39f6] text-white"
              : "bg-gray-200 text-black"} 
  `}>Products</button>
          <button onClick={() => setView("cart")} className={`px-5 py-2 rounded-[1000px] cursor-pointer 
    ${view === "cart"
              ? "bg-[#4f39f6] text-white"
              : "bg-gray-200 text-black"}
  `}>Cart({cart.length})</button>
        </div>
      </section>

      {/* Product Cards Section */}
      {view === "products" && (

        <section className='bg-[#FFFFFF] mt-10 mr-43 mb-32 ml-43'>
          <div className='grid grid-cols-3 gap-3'>
            {products.map(products => (
              <div key={products.id} className='relative border border-gray-200 rounded-2xl p-5'>
                <div className={`absolute right-4  border border-gray-400 px-2 py-1 w-fit rounded-[1000px] 
                  ${products.tag === "Best Seller" ? "bg-yellow-100 text-yellow-800" : ""}
                  ${products.tag === "Popular" ? "bg-gray-200 text-gray-700" : ""}
                  ${products.tag === "New" ? "bg-green-100 text-green-600" : ""}
                `}>

                  {products.tag}

                </div>
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
                  <span className='font-bold text-2xl'>${products.price}</span>/<span>{products.type}</span>
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
                  <button onClick={() => handleAddToCart(products)} className='bg-[#4f39f6] text-white rounded-[100px] px-10 py-3 w-full cursor-pointer text-xl'>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {view === "cart" && (

        <section className='mt-10 text-center bg-[#FFFFFF] pr-28 pl-28 shadow-2xl'>

          {cart.length === 0 ? (
            <div>
              <div className='pt-40 pb-4 text-7xl'> <i class="fa-solid fa-cart-arrow-down"></i></div>
              <p className='pb-40 text-2xl'> Your cart is empty</p>
            </div>
          ) : (
            <div className="bg-[#FFFFFF] p-6 rounded-xl">
              <h2 className="text-3xl font-semibold mb-8 text-start">Your Cart</h2>

              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 p-4 bg-[#F9FAFC] rounded-2xl">
                  <div className="flex items-center gap-3">
                    <img src={item.image} className=" border border-gray-200 w-fit rounded-[500px] p-4" />
                    <div>
                      <p className="font-semibold text-xl text-[#101727]">{item.name}</p>
                      <p className='text-start mt-1'>${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 font-semibold text-xl cursor-pointer hover:text-amber-900"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex justify-between text-2xl mt-4 font-semibold pr-4 pl-4">
                <span>Total:</span>
                <span>
                  
                  ${cart.reduce((total, item) => total + Number(item.price), 0)}
                </span>
              </div>

              <button onClick={handleCheckout} className="mt-4 w-full bg-purple-600 text-white text-xl py-3 rounded-full cursor-pointer hover:text-violet-100 hover:animate-[float_0.6s_ease-in-out_infinite] transition">
                Proceed To Checkout
              </button>
            </div>
          )}

        </section>

      )}

      {/* Steps Section */}

      <section className='pt-20 pr-50 pb-30 pl-50 bg-[#F9FAFC]'>
        <div className='text-center mb-12'>
          <h1 className='font-bold text-5xl text-[#101727]'>Get Started in 3 Steps</h1>
          <br />
          <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='flex justify-around items-center gap-4'>
          <div className='border border-gray-300 p-6 rounded-xl flex flex-col  items-center bg-[#FFFFFF] shadow-xl relative'>
            <div className='absolute right-3 top-px mt-2 bg-[#4f39f6] text-white font-bold px-3 py-2 rounded-[1000000px]'>01</div>
            <div>
              <img className='mb-4 mt-16 bg-gray-200 rounded-[100000px] p-4.5' src={userImg} alt="" />
            </div>
            <div>
              <h2 className='font-semibold text-2xl mb-4 text-center text-[#101727]'>Create Account</h2>
              <p className='mb-14 text-center text-[#627382]'>Sign up for free in seconds. No credit card<br />required to get started.</p>
            </div>
          </div>
          <div className='border border-gray-300 p-6 rounded-xl flex flex-col justify-center items-center bg-[#FFFFFF] shadow-xl relative'>
            <div>
              <div className='absolute right-3 top-px mt-2 bg-[#4f39f6] text-white font-bold px-3 py-2 rounded-[1000000px]'>02</div>
              <img className='mb-4 mt-16 bg-gray-200 rounded-[100000px] p-4.5' src={packageImg} alt="" />
            </div>
            <div>
              <h2 className='font-semibold text-2xl mb-4 text-center text-[#101727]'>Choose Products</h2>
              <p className='mb-14 text-center text-[#627382]'>Browse our catalog and select the tools <br />that fit your needs.</p>
            </div>
          </div>
          <div className='border border-gray-300 p-6 rounded-xl flex flex-col justify-center items-center bg-[#FFFFFF] shadow-xl relative'>
            <div>
              <div className='absolute right-3 top-px mt-2 bg-[#4f39f6] text-white font-bold px-3 py-2 rounded-[1000000px]'>03</div>
              <img className='mb-4 mt-16 bg-gray-200 rounded-[10000px] p-4.5' src={rocketImg} alt="" />
            </div>
            <div>
              <h2 className='font-semibold text-2xl mb-4 text-center text-[#101727]'>Start Creating</h2>
              <p className='mb-14 text-center text-[#627382]'>Download and start using your premium <br />tools immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}

      <section className='mt-30 mr-50 mb-30 ml-50'>
        <div className='text-center'>
          <h1 className='text-5xl font-semibold text-[#101727]'>Simple, Transparent Pricing</h1>
          <br />
          <p className='text-[#627382] mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <div className='bg-[#F9FAFC] border border-gray-100 p-6 rounded-2xl '>
            <div className='pr-20'>
              <h1 className='text-3xl font-semibold text-[#101727] mb-1.5'>Starter</h1>
              <p className='mb-6 text-[#627382]'>Perfect for getting started</p>

              <span className='font-semibold text-3xl'>$0</span>/<span className='text-[#627382]'>Month</span>
              <ol className='mt-6'>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Basic templates</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Access to 10 free tools</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Community support</li>
                <li className='flex gap-2 mb-14'><img src="/Assignment-6/images/Check.png" alt="" />1 project per month</li>
              </ol>
            </div>
            <button className='bg-[#9514FA] text-white rounded-[100px] px-10 py-3 w-full cursor-pointer text-xl'>Get Started Free</button>
          </div>
          <div className='bg-[#4f39f6] text-[#FFFFFF] p-6 rounded-2xl shadow-[0_20px_60px_rgba(70,50,240,0.4)] relative'>
            <div><button className='bg-[#FEF3C6] text-[#BB4D00] rounded-[100px] px-2 py-1 absolute -top-3 left-1/2 -translate-x-1/2'>Most Popular</button></div>
            <div className='pr-20'>
              <h1 className='text-3xl font-semibold mb-1.5'>Pro</h1>
              <p className='mb-6'>Best for professionals</p>

              <span className='font-semibold text-3xl'>$29</span>/<span>Month</span>
              <ol className='mt-6'>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Access to all premium tools</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Unlimited templates</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Priority support</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Unlimited projects</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Cloud sync</li>
                <li className='flex gap-2 mb-14'><img src="/Assignment-6/images/Check.png" alt="" />Advanced analytics</li>
              </ol>
            </div>
            <button className='bg-white text-[#4f39f6] rounded-[100px] px-10 py-3 w-full cursor-pointer text-xl'>Start Pro Trial</button>
          </div>
          <div className='bg-[#F9FAFC] border border-gray-100 p-6 rounded-2xl'>
            <div className='pr-20'>
              <h1 className='text-3xl font-semibold text-[#101727] mb-1'>Enterprise</h1>
              <p className='mb-5 text-[#627382]'>For teams and businesses</p>

              <span className='font-semibold text-3xl'>$99</span>/<span className='text-[#627382]'>Month</span>
              <ol className='mt-6'>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Everything in Pro</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Team collaboration</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Custom integrations</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />Dedicated support</li>
                <li className='flex gap-2'><img src="/Assignment-6/images/Check.png" alt="" />SLA guarantee</li>
                <li className='flex gap-2 mb-8'><img src="/Assignment-6/images/Check.png" alt="" />Custom branding</li>
              </ol>
            </div>
            <button className='bg-[#9514FA] text-white rounded-[100px] px-10 py-3 w-full cursor-pointer text-xl'>Contact Sales</button>
          </div>
        </div>
      </section>


      {/* Footer Section */}

      <section className='bg-[#101727] text-[#FFFFFF] pt-30 pr-50 pb-8 pl-50'>
        <div className='flex justify-around'>
          <div>
            <h1 className='font-bold text-4xl '>DigiTools</h1>
            <br />
            <p className='text-gray-400'>Premium digital tools for creators,<br />professionals, and businesses. Work smarter<br />with our suite of powerful tools.</p>
          </div>
          <div>
            <ul>
              <li className='text-2xl mb-2.5'>Product</li>
              <li className='text-gray-400 mb-3'>Features</li>
              <li className='text-gray-400 mb-3'>Pricing</li>
              <li className='text-gray-400 mb-3'>Templates</li>
              <li className='text-gray-400'>Integrations</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='text-2xl mb-2.5'>Company</li>
              <li className='text-gray-400 mb-3'>About</li>
              <li className='text-gray-400 mb-3'>Blog</li>
              <li className='text-gray-400 mb-3'>Careers</li>
              <li className='text-gray-400'>Press</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='text-2xl mb-2.5'>Resources</li>
              <li className='text-gray-400 mb-3'>Documentation</li>
              <li className='text-gray-400 mb-3'>Help Center</li>
              <li className='text-gray-400 mb-3'>Community</li>
              <li className='text-gray-400'>Contact</li>
            </ul>
          </div>
          <div>
            <div>
              <p className='text-2xl'>Social Links</p>
            </div>
            <br />
            <div className='flex gap-3'>
              <span className='border border-gray-200 rounded-[1000px] p-2'><img src="/Assignment-6/images/instagram.png" alt="" /></span>
              <span className='border border-gray-200 rounded-[1000px] p-2'><img src="/Assignment-6/images/fb-icon.jpg" alt="" /></span>
              <span className='border border-gray-200 rounded-[1000px] p-2'><img src="/Assignment-6/images/twitter-icon.jpg" alt="" /></span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr className='pt-5 opacity-10' />
        <div className='flex justify-between items-center mt-6'>
          <div>© 2026 Digitools. All rights reserved.</div>
          <div className='flex gap-7'>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies</div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  )
}
export default App
