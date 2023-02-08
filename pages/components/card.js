import { useRouter } from 'next/router';
import React from 'react';

const Card = ({product}) => {


  const router=useRouter();

  const handleProduct=(pid)=>{
    router.push(`/Product/${pid}`)
  }
  
  return (
  

      <div className='bg-card flex flex-col px-7 py-4  hover:bg-green-100 hover:-translate-y-2 duration-300 sm:py-5 justify-between rounded-md' onClick={(e)=>handleProduct(product.pid)}>
               
               {/* product image */}
               <div className='aspect-w-4 aspect-h-3'>
               <img className='object-cover' src={product.img}/>
               </div>

               {/* product description */}
               
               {/* title of product */}
               <div>
               <h3 className='text-base leading-5 pb-1 font-medium mb-2 mt-6'>{product.name}</h3>
               
               {/* price and rating of product */}
               <div className='flex flex-row justify-between'>
       
                  <h4 className='text-xl font-semibold'>{product.price.toLocaleString()}<span className='px-1 font-bold '>₹</span></h4>
                  <h4 className='text-red-600 text-base sm:text-base text-center'>
                    {product.rating}★
         
                  </h4>

                  </div>
            </div>
    </div>
  );
}

export default Card;
