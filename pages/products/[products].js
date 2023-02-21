import Image from 'next/image';
import React from 'react';
import Card from '@/src/components/card';
import { useRouter } from 'next/router';

const products = ({ data }) => {
  const router=useRouter();
  return (

    <div className='flex justify-center'>

      {
        data ?
          <div className='w-full h-full flex flex-col md:mx-0 md:w-11/12 lg:w-10/12 content-center mb-10'>
            {/* Heading */}
            <h2 className='my-4 text-3xl text-primary font-semibold py-3'>Results</h2>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:sm:grid-cols-3  lg:grid-cols-4 font-medium text-primary gap-3 sm:gap-4'>

              {data.products.map((item, index) => {
                return (
                  <Card key={index} product={item} />
                )
              })}

            </div>

          </div>

          : <div className='w-full h-screen flex justify-center items-center text-primary text-opacity-90'>

             <div className='flex items-center flex-col lg:flex-row'>
               <div className='w-44 h-44'>
                <img src={'/no_item.png'} className='obj' fill/>
               </div>

             <div className='flex flex-col'>
             <h1 className='text-2xl '>
                Sorry, this item not available in our store.
             </h1>
             <h3 className='my-4 font-medium text-lg cursor-pointer text-secondary-dark' onClick={(e)=>{
             router.replace('/')
             }}>
              Back to home
             </h3>
             </div>
             </div>
          </div>
      }
    </div>
  );
}


export async function getServerSideProps(context) {

  
  const tags = JSON.stringify(context.query.tags)
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      tags
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/products?code=searchByTags`, requestOptions)
    
    const data = await response.json()
    return { props: {data} }

  }
  catch (err) {

    return { props: {} }
  }
}



export default products;
