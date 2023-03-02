import React from 'react';
import { useRouter } from 'next/router';

const Minicard = ({product,category}) => {

  const router=useRouter();

  const handleProduct=(pid)=>{
    router.push({pathname:'/Product/product',query:{pid,category}})
  }

  return (
    <div className="bg-card flex flex-col p-4 w-72  hover:bg-secondary hover:bg-opacity-30 rounded-md hover:-translate-y-3 duration-200" onClick={(e)=>{handleProduct(product.pid)}}>

    {/* image of product */}
    <div className="aspect-w-4 aspect-h-3 ">
    <img className="object-contain px-3 " src={product.image} />
    </div>

    {/* product description */}
    <h5 className="my-2 leading-6 text-lg font-medium px-3">{product.name.substring(0,99)+"..."}</h5>

  </div>
  );
}

export default Minicard;
