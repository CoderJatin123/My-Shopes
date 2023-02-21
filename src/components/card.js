import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const Card = ({product}) => {

  const router=useRouter();
  const handleProduct=(pid)=>{
    router.push(`/Product/${pid}`)
  }
  
  return (
  

      <div className='bg-card flex flex-col px-5 py-4   hover:bg-secondary hover:bg-opacity-30  hover:-translate-y-3 duration-200 sm:py-5 justify-between rounded-md' onClick={(e)=>handleProduct(product.pid)}>
               
               {/* product image */}
               <div className='aspect-w-4 aspect-h-3'>
               <Image className='object-cover px-1' fill src={product.image}/>
               </div>

               {/* product description */}
               
               {/* title of product */}
               <div className='px-1'>
                
               <h3 className='text-lg leading-5 pb-1 font-medium mb-2 mt-6'>{product.name.substring(0,80)+"..."}</h3>
               
               {/* price and rating of product */}
               <div className='flex flex-row justify-between'>
       
                  <h4 className='text-xl font-semibold'>{product.price.toLocaleString()}<span className='px-1 font-bold '>₹</span></h4>
                  <h4 className='text-red-600 text-base  text-center'>
                    {product.rating}★
         
                  </h4>

                  </div>
            </div>
    </div>
  );
}

export default Card;
