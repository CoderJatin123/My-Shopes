import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const Card = ({product,category}) => {

  //console.log("🚀 ~ file: card.js:6 ~ Card ~ product", product)

  const router=useRouter();

  const handleProduct=(pid) => {
   // console.log("🚀 ~ file: card.js:10 ~ handleProduct ~ pid", pid,category)   
    router.push({pathname:'/Product/product',query:{pid,category}})
  }
  return (
  

      <div className='bg-card flex flex-col px-4 py-4   hover:bg-secondary hover:bg-opacity-30  hover:-translate-y-3 duration-200 sm:py-5 justify-between rounded-md' onClick={(e)=>handleProduct(product.pid,product.category)}>
               
               {/* product image */}
               <div className='aspect-w-4 aspect-h-3'>
               <Image className='object-cover px-2' fill={true} src={product.image} alt="Product image"/>
               </div>

               {/* product description */}
               
               {/* title of product */}
               <div className='px-1'>
                
               <h3 className='text-lg leading-5 pb-1 font-medium mb-2 mt-6'>{product.name.substring(0,80)+"..."}</h3>
               
               {/* price and rating of product */}
               <div className='flex flex-row justify-between mb-2'>
       
                  <h4 className='text-2xl font-semibold'>{product.price.toLocaleString()}<span className='px-1 font-bold '>₹</span></h4>
                  <h4 className='text-red-600 text-base  text-center'>
                    {product.rating}★
         
                  </h4>

                  </div>
            </div>
    </div>
  );
}

export default Card;
