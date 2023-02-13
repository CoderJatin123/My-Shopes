import React from 'react';
import Card from '../components/card';

const products = ({data}) => {

  return (

    <div className='flex justify-center'>
    
    {
      data ? 
      <div className='w-full h-full flex flex-col md:mx-0 md:w-11/12 lg:w-10/12 content-center mb-10'>
      {/* Heading */}
      <h2 className='my-4 text-3xl text-primary font-semibold py-3'>Results</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:sm:grid-cols-3  lg:grid-cols-4 font-medium text-primary gap-3 sm:gap-4'>

        {data.products.map((item,index)=>{
          return(
             <Card product={item}/>
          )
        })}

      </div>
      
    </div>

    :<h1>Some error occurred :( </h1>
    }
    </div>
  );
}


export async function getServerSideProps(context) {

const { products } = context.query;

try {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/products?code=${products}`, requestOptions)
  const data =await  response.json();

  return { props: {data} }

}
catch(err){
 
 return { props: {} }

}

}

export default products;
