import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import UserContext from '@/context/userContext';
import { useContext } from 'react';
import { trending } from '@/data/products';

const Topbar = () => {

  const { search, setSearch ,onSearch ,tags} = useContext(UserContext)
  const router = useRouter();

  const handleTrending = () => {
    router.push({ pathname: `/products/trending`,query:{tags:trending} })
  }


  const handleLogin = () => {
    router.push({ pathname: `/login` })
  }

  const handleCart = () => {
    router.push({ pathname: `/Mycart/cart` })
  }
  const handleCategory = () => {
    router.push({ pathname: `/categories` })
  }

  const changeSerach = (value) => {
   setSearch(value)

  }

  const handleKeyPress=(e)=>{

    var key=e.keyCode || e.which;
    if (key==13){
      handleSearch();
    }
  }

  const handleSearch=()=>{
    onSearch(search);
  }

  return (

    <div className='grid grid-cols-2 sm:grid-cols-8 justify-between items-center py-1 place-content-between md:bg-cyan-4001  sm:bg-yellow-4001 pt-5 sm:pt-1 sm:px-2  text-primary mx-6 sm:mx-5'>

      <div className='sm:col-span-2  ml-1 flex flex-row items-center flex-shrink sm:order-1 cursor-pointer'
        onClick={(e) => router.push('/')}
      >

        {/* logo and brand name */}
        <Image src={'/my-shops.svg'} width={30} height={30} alt="Logo" />
        <h3 className='ml-4 text-xl font-semibold w-full text-primary-dark '>My Shops</h3>
      </div>


      <div className='w-full rounded-sm my-6 sm:my-2 sm:col-span-2 flex flex-row justify-end sm:order-2 col-span-2 order-3'>
        {/* searchbar */}

        <div className=' bg-card h-full w-full sm:px-3 sm:py-2 py-3 px-5 rounded-lg sm:rounded-md'>

          <input id="search" type={'text'} className=' hover:outline-none outline-none  bg-card sm:text-base text-xl font-medium w-full ' placeholder='Search here' onChange={(e) => { changeSerach(e.target.value) }} name={search} list='searchList' onKeyDown={(e)=>handleKeyPress(e)} />

          <datalist id='searchList'>
            {
              tags.map((item,index)=>{
                return(
                  <option key={index}>{item}</option>
                )
              })

            }
         
          </datalist>
        </div>


        <button className='bg-primary focus:outline-none rounded-r-lg sm:rounded-r-md hover:bg-primary-dark' onClick={(e)=>{handleSearch()}}>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 mx-4 md:mx-2 text-gray-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </button>



      </div>

      <div className='px-1 place-self-center justify-start sm:justify-end flex flex-row  font-medium  sm:col-span-3 col-span-2 sm:order-3 order-4 w-full text-xl sm:text-base '>

        {/* all options */}

        <div className='flex flex-row sm:w-full  md:ml-10 w-full lg:w-2/3 justify-between font-medium '>
          <h3 className='cursor-pointer' onClick={(e)=>handleCategory()}>Category</h3>


          <button onClick={() => { handleTrending() }}>Trending</button>

          {/* cart */}
          <div className='flex flex-row cursor-pointer' onClick={(e) => { handleCart() }}>

            <h5 className='text-subtitle  font-medium'>(0)</h5>
            <Image className='mx-1' src={'/my-shops.svg'} width={20} height={20} alt="Logo" />
          </div>
          <h3 className='cursor-pointer' >Help</h3>
        </div>
      </div>
      <div className='sm:order-4 order-2 w-full flex justify-end sm:justify-center text-primary-dark text-end px-1 sm:text-center  sm:font-medium text-2xl font-semibold sm:text-base  '>

        <button className='py-1 rounded-md sm:rounded-sm px-2' onClick={(e) => { handleLogin() }} >Login</button>
      </div>


    </div>
  );
}

export default Topbar;
