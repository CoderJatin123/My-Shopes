import React from "react";
import { useState } from "react";
import Minicard from "@/src/components/minicard";

const Product = ({product,suggestions}) => {

  const [isFavorite, setFavorite] = useState(false);
 

  // console.log("🚀 ~ file: [product].js:4 ~ Product ~ data", product)

  return (
    <div className="flex justify-center flex-col py-1 md:py-10 text-primary">


      {/* Product overview */}
      <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-12  items-center md:gap-1 ">

        {/* Product title */}
        <div className="order-1 md:order-2 text-2xl md:text-3xl row-span-1 font-bold md:col-span-6 md:row-span-1 mt-10">
          <h1>{product.name}</h1>
        </div>

        {/* Product image */}
        <div className="order-2 flex flex-row text-center justify-center aspect-h-5 aspect-w-7 mx-20 lg:mx-44  row-span-3 md:order-1 md:col-span-6 items-center ">
          <img className="object-contain" src={product.image} />
        </div>

        {/* Ratings and price */}
        <div className="order-3 w-full flex flex-col py-10 md:py-0 row-span-2 md:col-span-6 h-full ">
          <div className="text-yellow-500 flex flex-row my-4 md:my-2 items-center">
            {[...Array(product.rating)].map((i,index) => {
              return (
                <span  key={index} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 md:w-5 md:h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              );
            })}

            <h5 className="text-primary font-medium md:text-lg md:font-normal text-xl mx-5">
              15 Ratings
            </h5>
          </div>

          <h2 className="text-3xl md:text-2xl font-semibold my-4 md:my-2">
            ₹ {product.price.toLocaleString()}{" "}
            <span className="text-xl md:text-lg font-regular px-1">
              {" "}
              inclusive all taxes
            </span>{" "}
          </h2>

          <div className="flex flex-row my-5 text-white  text-xl md:text-base md:font-regular">
            <button className="bg-button-gray py-3 md:py-2 w-36 rounded-xl drop-shadow-md ">
              Add to cart
            </button>
            <button className="bg-button-light md:py-2  py-3 w-36 rounded-xl mx-6 drop-shadow-md">
              Buy Now
            </button>
          </div>

          <div className="my-5 text-lg md:text-base flex md:font-normal font-medium" >
            <h4>Add to favorite</h4>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? "#E35656" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#E35656"
              className="w-7 h-7 mx-2 md:mx-3 text-primary 
              "
              onClick={(e) => setFavorite(!isFavorite)}
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        </div>
      </div>

      
      {/* product detail */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-1  gap-8 md:gap-5 md:px-1 lg:px-16">

        {/* specification */}
        <div className="order-1 md:col-span-1 grow flex flex-col bg-card px-7 md:px-10 py-8 md:py-6">
          <h2 className="font-bold text-xl pb-3 text-primary">Product Detail</h2>

          {product.specification.parameter.map((item, index) => {
            return (
              <div key={index} className="grid grid-cols-2 text-xl">
                <h5 className="grow font-medium">{item.name}</h5>
                <h5 className="grow text-left">{item.value}</h5>
              </div>
            );
          })}
        </div>

        {/* product Descripition */}
        <div className="order-2 md:col-span-2 flex flex-col bg-card px-7 py-8 md:py-6 md:px-10">
          <h2 className="font-bold text-xl pb-3">Product Description</h2>

          {product.specification.description.paragraph.map((para, index) => {
            return <p key={index} className="text-xl py-1">{para}</p>;
          })}
        </div>
       
      </div>


      {/* other product suggestions */}
      <div className="md:px-1 lg:mx-16  my-10">

       <h2 className="mb-6 text-2xl font-semibold">
        Similar Products
       </h2>

       <div className="grid grid-flow-col md:grid-flow-row row-auto md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-visible no-scrollbar">
       {
         suggestions.map((product,index)=>{
           return( 
            <Minicard key={index} product={product}/>    
          )
        })
      }
      </div>
       
      </div>


    </div>
  );
};

export async function getServerSideProps(context) {

const pid = context.query.product;
//  console.log("🚀 ~ file: [products].js:14 ~ getServerSideProps ~ query", pid)

try {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/products?pid=${pid}&code=getProductById`, requestOptions)
  const {product,suggestions} =await  response.json();
  console.log("🚀 ~ file: [product].js:28 ~ getServerSideProps ~ data", product)
  return { props: {product,suggestions} }

}
catch(err){
// console.log("🚀 ~ file: [product].js:30 ~ getServerSideProps ~ err", err)
 return { props: {} }

}

}
export default Product;
