import React from 'react';
import { useRouter } from 'next/router';

const Minicard = ({product,category}) => {

  const router=useRouter();

  const handleProduct=(pid)=>{
    router.push({pathname:'/Product/product',query:{pid,category}})
  }

  return (
    <div className="bg-card flex flex-col px-1 py-3 w-44 md:w-full  hover:bg-secondary hover:bg-opacity-30 rounded-md hover:-translate-y-3 duration-200" onClick={(e)=>{handleProduct(product.pid)}}>

    {/* image of product */}
    <div className="aspect-w-4 aspect-h-3 ">
    <img className="object-cover px-3 " src={product.image} />
    </div>

    {/* product description */}
    <h5 className="my-2 text-base font-semibold  px-3">{product.name.substring(0,60)+"..."}</h5>
  </div>
  );
}

export default Minicard;
