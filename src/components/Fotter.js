import React, { use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Fotter = () => {

  const router=useRouter();

  return (
    <div className='bg-primary-dark w-full  text-center'>

      <h5 className='pt-6'>
      <a className=' text-white' href='#'>Back to top</a>
      </h5>
      <div className='w-full'>

        <div className='flex flex-col sm:flex-row w-full flex-grow text-white text-lg justify-center text-center sm:justify-center items-start 
        px-8 sm:px-1 py-14
        '>
           

           <div className='grow flex  flex-row justify-center '>

                <div className='flex flex-col text-left leading-5 font-regular'>
           
                  <h2 className='text-lg font-medium my-2 leading-7'>Connect with Us</h2>
                  <h4 className='leading-6'>Instagram</h4>
                  <h4 className='leading-6'>Facebook</h4>
                  <h4 className='leading-6'>Tweeter</h4>

                 </div>
            </div>
             
            <div className='flex flex-row justify-center grow mt-5  sm:mt-0'>
                <div className='flex flex-col text-left leading-6'>
                   <h2 className='text-lg font-medium my-2'>About Us</h2>
                   <h4>Business</h4>
                  <h4>Shopping</h4>
                </div>
            </div>

            <div className='flex flex-row grow justify-center sm:mt-0 mt-5'>

                <div className='flex flex-col  text-center '>
                  <Image src={'/my-shops.svg'} width={30} height={30} alt="Logo" className='my-2' />
            
                 <h5 className=''>
                 © 123-2023,myshops.com
                   limited.
                  </h5>

                </div>
            </div>


        </div>
     
        </div>
    </div>
  );
}

export default Fotter;
