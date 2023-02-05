import React from 'react';
import Image from 'next/image';

const Fotter = () => {
  return (
    <div className='bg-primary w-full py-5'>

        <div className='flex flex-col sm:flex-row w-full flex-grow text-white text-sm justify-center text-center sm:justify-center items-start 
        px-8 sm:px-1
        '>
           

           <div className='grow flex  flex-row justify-center '>

                <div className='flex flex-col text-left leading-5'>
           
                  <h2 className='text-base font-semibold my-2'>Connect with Us</h2>
                  <h4>Instagram</h4>
                  <h4>Facebook</h4>
                  <h4>Tweeter</h4>

                 </div>
            </div>
             
            <div className='flex flex-row justify-center grow mt-5  sm:mt-0'>
                <div className='flex flex-col text-left leading-5'>
                   <h2 className='text-base font-semibold my-2'>About Us</h2>
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
  );
}

export default Fotter;
