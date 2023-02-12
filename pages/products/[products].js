import React from 'react';
import Card from '../components/card';
import { data } from '@/data/products';

const products = () => {

  return (
    <div className='flex justify-center'>

    
    <div className='w-full h-full flex flex-col md:mx-0 md:w-11/12 lg:w-10/12 content-center mb-10'>

      {/* Heading */}
      <h2 className='my-4 text-3xl text-primary font-semibold py-3'>Results</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:sm:grid-cols-3  lg:grid-cols-4 font-medium text-primary gap-3 sm:gap-3'>

        {data.map((item,index)=>{
          return(
             <Card product={item}/>
          )
        })}

      </div>
      
    </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const { products } = context.query;
  // console.log("🚀 ~ file: [products].js:14 ~ getServerSideProps ~ query", products)

  
  return { props: { products } }

}

export default products;
