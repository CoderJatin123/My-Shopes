import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Topbar = () => {

  const router =useRouter();
  
  const handleTrending=()=>{
    router.push({pathname:`/products/trending`})
  }
  const handleLogin=()=>{
    router.push({pathname:`/login`})
  }

  const handleCart=()=>{
    router.push({pathname:`/Mycart/cart`})
  }

  return (

    <div className='grid grid-cols-2 sm:grid-cols-8 justify-between items-center py-1 place-content-between md:bg-cyan-4001  sm:bg-yellow-4001 pt-5 sm:pt-3 sm:px-2  text-primary mx-6 sm:mx-5'>

      <div className='sm:col-span-2  ml-1 flex flex-row items-center flex-shrink sm:order-1 cursor-pointer'
      onClick={(e)=>router.push('/')}
      > 

        {/* logo and brand name */}
        <Image src={'/my-shops.svg'} width={30} height={30} alt="Logo" />
        <h3 className='ml-4 text-xl font-semibold w-full text-primary-dark '>My Shops</h3>
      </div>


      <div className='w-full rounded-sm my-6 sm:my-2 sm:col-span-2 flex flex-row justify-end sm:order-2 col-span-2 order-3'>
        {/* searchbar */}

        <input id="search" type={'text'} className=' bg-card h-full sm:px-3 sm:py-3 py-5 px-5 hover:outline-none outline-none rounded-lg sm:rounded-md sm:text-base text-xl font-medium w-full' placeholder='Search here' />
      </div>

      <div className='px-1 place-self-center justify-start sm:justify-end flex flex-row  font-medium  sm:col-span-3 col-span-2 sm:order-3 order-4 w-full text-xl sm:text-base'>

        {/* all options */}

        <div className='flex flex-row sm:w-11/12  md:ml-10 w-9/12 lg:w-2/3 justify-between   font-medium '>
          <h3>Category</h3>
           
     
          <button onClick={()=>{handleTrending()}}>Trending</button>

           {/* cart */}
          <div className='flex flex-row cursor-pointer' onClick={(e)=>{handleCart()}}>

            <h5 className='text-subtitle  font-medium'>(0)</h5>
            <Image className='mx-1' src={'/my-shops.svg'} width={20} height={20} alt="Logo" />
          </div>
          <h3 className='cursor-pointer' >Help</h3>
        </div>
      </div>
      <div className='sm:order-4 order-2 w-full flex justify-end sm:justify-center text-primary-dark text-end px-1 sm:text-center  sm:font-medium text-2xl font-semibold sm:text-base  '>

      <button className='py-1 rounded-md sm:rounded-sm px-2'onClick={(e)=>{handleLogin()}} >Login</button>
      </div>


    </div>
  );
}

export default Topbar;
