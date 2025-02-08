import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react'

const HeroPage = () => {
  return (
    <div className='h-full'>
      <div className="bg-white text-black h-full">

        {/* Header Section */}
        <header className="flex justify-center items-center px-6 py-4 bg-slate-50 text-black">


          <div className='flex flex-col justify-center items-center'>
            <Button variant="outline" className="text-black border-white">Hello Nike App</Button>
            <p className="text-sm mt-2">Download the app to access everything Nike. Get Your Great</p>
          </div>
        </header>

        <div className='flex justify-center'>
          <img src='/Picture.png' alt='shoes' />
        </div>


        {/* Nike Air Max plus */}
        <section className="relative">
          <div className="absolute inset-36 flex flex-col items-center justify-center text-center">
            <h1 className="text-1xl font-extrabold">Frist Look</h1>
            <h1 className="text-6xl font-extrabold pt-2">NIKE AIR MAX PULSE</h1>
            <p className="text-lg mt-2 max-w-lg ">
              Taking cushioning, hyper durability, and power to new heights. The Nike Air Max Pulse reimagines the past to bring you comfort that never goes out of style.
            </p>
            <div className="mt-4 flex gap-4">
              <Button variant="default">Notify Me</Button>
              <Button variant="default">Shop Air Max</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Best of Air Max Section */}


      <div className='pt-72 '>

        <section className="bg-white text-black px-6 py-10 ">
          <div className=' items-center'>
            <ul className='flex justify-start font-bold text-xl'>
            <h2  >Best of Air Max</h2>
            </ul>
            <ul className='flex justify-end  '>
            <h1 className='text-end text-2xl font-bold'>Shop</h1> 
            <li className='hover:bg-gray-400 rounded-full items-center'>
            <ChevronLeft size={40}/>
            </li>
            <li className='hover:bg-gray-400 rounded-full items-center'>
            <ChevronRight size={40} />
            </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg text-center">
              <img src="/image.png" alt="Product 1" className="w-full object-cover mb-4 rounded" />
              <p className="font-bold">Nike Air Max Pulse</p>
              <p className="text-sm">Men's Shoes</p>
              <p className="font-bold mt-2">₹13,995</p>
            </div>
            <div className="rounded-lg text-center">
              <img src="/image1.png" alt="Product 2" className="w-full object-cover mb-4 rounded" />
              <p className="font-bold">Nike Air Max Pulse</p>
              <p className="text-sm">Women's Shoes</p>
              <p className="font-bold mt-2">₹13,995</p>
            </div>
            <div className="rounded-lg text-center ">
              <div>
                <img src="/image2.png" alt="Product 3" className="w-full object-cover h mb-4 rounded" /></div>
              <p className="font-bold">Nike Air Max 97 SE</p>
              <p className="text-sm">Men's Shoes</p>
              <p className="font-bold mt-2">₹16,495</p>
            </div>
          </div>

          {/* Featured Section */}


          <div>

            <section className="bg-white text-black px-6 py-10">
              <div className="text-start text-2xl font-bold mb-6">Featured </div>
              <img src='/Feature.png' alt='running man' />
              <h2 className="text-center text-4xl font-bold mt-8 mb-6">Step Into What Feels Good</h2>
              <h1 className='text-center mt-4 mb-6'>Cause everyone should know the feeling of running in that perfect pair.</h1>
              <div className="text-center">
                <Button variant="default">Find Your Shop</Button>
              </div>
            </section>
          </div>

          {/* Gear Up Section */}

          <div>

            <section className="bg-white text-black px-6 py-10">
              <h2 className="text-start text-2xl font-bold mb-6">Gear Up</h2>

              <ul className='flex pb-3 justify-between '>

              <li className='flex items-center ml-80'>
              <h1> Shop Men's </h1><ChevronLeft size={40}/><ChevronRight size={40}/>
              </li>


              <li className='flex items-center rounded-full mr-12 '>
              <h1> Shop Womens's </h1><ChevronLeft size={40}/><ChevronRight size={40}/>
              </li>
              </ul>


              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <img src="/image3.png" alt="Gear 1" className="w-full object-cover mb-4 rounded" />
                  <p className="font-bold">Nike Dri-FIT Top</p>
                  <p className="text-sm">Men's Running Top</p>
                  <p className="font-bold mt-2">₹1,995</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <img src="/image4.png" alt="Gear 2" className="w-full object-cover mb-4 rounded" />
                  <p className="font-bold">Nike Challenger Shorts</p>
                  <p className="text-sm">Men's Versatile Shorts</p>
                  <p className="font-bold mt-2">₹2,495</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <img src="/image5.png" alt="Gear 3" className="w-full object-cover mb-4 rounded" />
                  <p className="font-bold">Nike Dri-FIT Division</p>
                  <p className="text-sm">Women's Running Top</p>
                  <p className="font-bold mt-2">₹3,795</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <img src="/image6.png" alt="Gear 4" className="w-full object-cover mb-4 rounded" />
                  <p className="font-bold">Nike Fast Leggings</p>
                  <p className="text-sm">Women's Running Leggings</p>
                  <p className="font-bold mt-2">₹3,795</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* Don't Miss Section */}
      <div>
        <h2 className="text-start text-2xl font-bold mb-6 px-6 py-10 ml-6">Don't Miss</h2>
        <img src="/dontmiss.png" alt="Don't Miss 1" className="rounded items-center ml-10" />
        <section className="bg-white text-black w-full px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">


            </div>
          </div>
        </section>

      </div>

      <div>

        <div className="flex justify-center ">
          <div className="text-center text-6xl font-bold px-2 py-6">Flight Essentials</div>
        </div>
        <div className="text-center text-lg font-bold">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</div>
        <div className='text-center px-2 py-4'>
          <Button variant="default" className='rounded-full'>Shop</Button>
        </div>
      </div>

      {/* Essentials Section */}
      <div>
        <div>

          <section className="bg-white text-black px-6 py-10">
            <h2 className="text-center text-2xl font-bold mb-6">The Essentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Replace these divs with image cards */}
              <img src='/last1.png' alt='' />
              <img src='/last2.png' alt='' />
              <img src='/last3.png' alt='' />
            </div>

          </section>
        </div>
      </div>

      <div>



        <div>

        </div>

        <div className="flex justify-center gap-32 px-4 py-10">
          <ul >
            <li className="pb-4 font-bold">Icon</li>
            <li className="pt-2 text-gray-400">Air Force 1</li>
            <li className="pt-2 text-gray-400">Huarache</li>
            <li className="pt-2 text-gray-400">Air Max 90</li>
            <li className="pt-2 text-gray-400">Air Max 95</li>
          </ul>
          <ul>
            <li className="pb-4 font-bold">Shoes</li>
            <li className="pt-2 text-gray-400">All Shoes</li>
            <li className="pt-2 text-gray-400">Custom Shoes</li>
            <li className="pt-2 text-gray-400">Jordan Shoes</li>
            <li className="pt-2 text-gray-400">Running Shoes</li>
          </ul>
          <ul>
            <li className="pb-4 font-bold">Clothing</li>
            <li className="pt-2 text-gray-400">All Clothing</li>
            <li className="pt-2 text-gray-400">Modest Wear</li>
            <li className="pt-2 text-gray-400">Hoodies & Pullovers</li>
            <li className="pt-2 text-gray-400">Shirts & Tops</li>
          </ul>
          <ul>
            <li className="pb-4 font-bold">Kids'</li>
            <li className="pt-2 text-gray-400">Infant & Toddler Shoes</li>
            <li className="pt-2 text-gray-400">Kids' Shoes</li>
            <li className="pt-2 text-gray-400">Kids' Jordan Shoes</li>
            <li className="pt-2 text-gray-400">Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default HeroPage;
