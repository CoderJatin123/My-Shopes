import { useRouter } from 'next/router';
import React from 'react';

const Card = ({product}) => {


  const router=useRouter();

  const handleProduct=(pid)=>{
    router.push(`/Product/${pid}`)
  }
  
  return (
  

      <div className='bg-card flex flex-col px-6 py-4  hover:bg-green-100 hover:-translate-y-2 duration-300 sm:py-5 justify-between' onClick={(e)=>handleProduct(product.pid)}>
               
               {/* product image */}
               <div className='aspect-w-4 aspect-h-3'>
               <img className='object-cover' src={product.img}/>
               </div>

               {/* product description */}
               
               {/* title of product */}
               <div>
               <h3 className='text-sm pt-3 pb-1 '>{product.name}</h3>
               
               {/* price and rating of product */}
               <div className='flex flex-row justify-between'>
       
                  <h4 className='text-lg'>{product.price.toLocaleString()}<span className='px-1 font-bold text-base'>₹</span></h4>
                  <h4 className='text-yellow-600 text-base sm:text-base text-center'>
                    {product.rating}★
         
                  </h4>

                  </div>
            </div>
    </div>
  );
}

export default Card;
