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
               <Image className='object-contain px-2' fill={true} src={product.image} alt="Product image"/>
               </div>

               {/* product description */}
               
               {/* title of product */}
               <div className='px-1'>
                
               <h3 className='text-lg lg:text-lg  lg:font-semibold  pb-1 font-medium mb-1 mt-4'>{product.name.substring(0,70)+"..."}</h3>
               
               {/* price and rating of product */}
               <div className='flex flex-row justify-between mb-1'>
       
                  <h4 className='text-xl font-semibold'>{product.price.toLocaleString()}<span className='px-1 font-bold '>₹</span></h4>
                  <div className=' text-lg text-center text-yellow-600 flex'>
                    <span className='text-xl mx-1'>

                    {product.rating}
                    </span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 md:w-5 md:h-5 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
         
                  </div>

                  </div>
            </div>
    </div>
  );
}

export default Card;
