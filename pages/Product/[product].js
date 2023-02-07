import React from 'react';

const Product = () => {

  const product = {
    pid: 1,
    price: 41990,
    name: 'ASUS Vivobook 14, 14.0-inch (35.56 cms) FHD, Intel Core i5-1035G1 10th Gen',
    img: 'https://m.media-amazon.com/images/I/41H42FebSmL._AC_SR400,600_.jpg',
    rating: 5,
    colors: [{ name: 'silver', colorCode: "#6e6c77" },
    { name: 'black', colorCode: "#484848" },
  ]
  }

  // console.log("🚀 ~ file: [product].js:4 ~ Product ~ data", product)

  return (

    <div className='flex justify-center'>

      <div className='mx-4 md:mx-0 md:w-11/12 lg:w-10/12 mb-10 
      grid-cols-1 md:grid-cols-12 grid-rows-6 grid mt-5 text-primary'>


        <div className='order-1 md:order-2 col-span-full row-span-1 md:row-span-2 md:col-span-6 '>

          {/* product title */}
          <h3 className='text-primary mt-9 text-lg tracking-tight font-extrabold md:row-auto'>{product.name}</h3>
        </div>

        <div className='order-2 md:order-1 aspect-h-3 aspect-w-4  col-span-full md:col-span-6 row-span-4 md:row-span-full  justify-center grid'>

          {/* product image */}
          <img className='object-cover px-4 md:w-9/12 my-auto ' src={product.img} />
        </div>


        <div className='order-3 row-span-1 md:row-auto md:col-span-6 '>
          <h4 className='text-lg text-red-500' >{'★'.repeat(product.rating)}
            <span className='pl-2 text-primary font-semibold text-base'>15 Rating</span>

            <div className='py-2'>

              {product.colors.map((color,index)=>{
                return(
                  <button className={` ml-1 bg-[${color.colorCode}] rounded-full w-5 h-5 focus:outline-none`}></button>)
              })}

            </div >

          </h4>
        </div>


        <div className='order-4 row-span-1 md:row-span-1 md:col-span-6 flex flex-col '>

          <h2 className='text-lg font-bold flex items-center'>₹ {product.price.toLocaleString()} <span className='font-normal 
          text-sm px-2'>inclusive all taxes</span></h2>
          <div className='flex my-2'>
           <button className='bg-primary'>Add to cart</button>
           <button className='bg-secondary'>Buy Now</button>
          </div>

          
        </div>






      </div>
    </div>
  );
}

//export async function getServerSideProps(context) {

// const pid = context.query.product;
// //  console.log("🚀 ~ file: [products].js:14 ~ getServerSideProps ~ query", pid)

// try {
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/product?pid=${pid}&code=getProductById`, requestOptions)
//   const {product} =await  response.json();
//   return { props: {product} }
//   //console.log("🚀 ~ file: [product].js:28 ~ getServerSideProps ~ data", data)

// }
// catch(err){
// // console.log("🚀 ~ file: [product].js:30 ~ getServerSideProps ~ err", err)
//  return { props: {} }

// }



//}
export default Product;
