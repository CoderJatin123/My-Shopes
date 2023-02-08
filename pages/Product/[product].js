import React from 'react';

const Product = () => {

  const product = {
    pid: 1,
    price: 41990,
    name: 'ASUS Vivobook 14, 14.0-inch (35.56 cms) FHD, Intel Core i5-1035G1 10th Gen',
    img: 'https://m.media-amazon.com/images/I/41H42FebSmL._AC_SR400,600_.jpg',
    rating: 5,
    colors: [{ name: 'silver', colorCode: "#6e6c77" },
    { name: 'black', colorCode: '#484848' },
    ]
  }

  // console.log("🚀 ~ file: [product].js:4 ~ Product ~ data", product)

  return (

    <div className='flex justify-center'>

      <div className='mx-10  md:mx-0 md:w-11/12 lg:w-10/12 mb-10 
      grid-cols-1 md:grid-cols-12 grid-rows-6 grid mt-5 text-primary'>


        <div className='order-1 md:flex md:items-end md:pb-5 md:order-2 col-span-full row-span-1 md:row-span-2 md:col-span-6 '>

          {/* product title */}
          <h3 className='text-primary mt-9 text-2xl tracking-tight font-semibold'>{product.name}</h3>
        </div>

        <div className='order-2 md:order-1 aspect-h-3 aspect-w-4  col-span-full md:col-span-6 row-span-4 md:row-span-full  justify-center grid'>

          {/* product image */}
          <img className='object-cover px-4 md:w-9/12 my-auto ' src={product.img} />
        </div>


        <div className='order-3 row-span-1 md:row-auto md:col-span-6  text-2xl '>

          {/* second row(rating) */}

          <h4 className=' text-red-500 py-2' >{'★ '.repeat(product.rating)}
            <span className='pl-2 text-primary font-semibold text-base'>15 Rating</span>

            <div className='py-4'>

              {product.colors.map((color, index) => {

               
                return (
                  <button className={`border-2 border-gray-300 ml-1 ${'bg-['+color.colorCode.toString()+']'} rounded-full w-6 h-6 focus:outline-none`}></button>
                )
              })}

            </div >

          </h4>
        </div>


        <div className='order-4 row-span-1 md:row-span-2 md:col-span-6 flex flex-col bg-green-3001'>

          {/* price section (last row) */}

          <h2 className='text-2xl font-semibold flex items-center my-1'>₹ {product.price.toLocaleString()} <span className='text-base font-regular px-4 '>inclusive all taxes</span></h2>

          <div className='flex py-5 text-base font-regular '>

            <button className='bg-button-gray drop-shadow-xl text-white w-32 py-2 rounded-md'>Add to cart</button>
            <button className='bg-button-light drop-shadow-xl text-white w-32 py-2 rounded-md ml-5'>Buy Now</button>
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
