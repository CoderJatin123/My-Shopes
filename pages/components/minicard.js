import React from 'react';

const Minicard = ({product}) => {
  return (
    <div className="bg-card flex flex-col p-4 w-72 sm:w-auto hover:bg-secondary hover:bg-opacity-30 rounded-md hover:-translate-y-3 duration-200">

    {/* image of product */}
    <div className="aspect-w-4 aspect-h-3 ">
    <img className="object-cover p-2" src={product.img} />
    </div>

    {/* product description */}
    <h5 className="my-2 leading-6 text-lg font-medium px-2">{product.name}</h5>

  </div>
  );
}

export default Minicard;
