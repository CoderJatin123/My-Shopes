import React from 'react';
import Card from '@/src/components/card';
import { useRouter } from 'next/router';

const products = ( {data,category} ) => {
  const router = useRouter();
  return (

    <div className='flex justify-center'>

      {
        data ?
          <div className='w-full h-full flex flex-col md:mx-0 md:w-11/12 lg:w-10/12 content-center mb-10'>
            {/* Heading */}
            <h2 className='my-4 text-3xl text-primary font-semibold py-3'>Results</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:sm:grid-cols-3  lg:grid-cols-4 font-medium text-primary gap-3 sm:gap-4'>

              {data.map((item, index) => {
                return (
                  <Card key={index} product={item} category={category}/>
                )
              })}

            </div>

          </div>

          : <div className='w-full h-screen flex justify-center items-center text-primary text-opacity-90'>

            <div className='flex items-center flex-col lg:flex-row'>
              <div className='w-44 h-44'>
                <img src={'/no_item.png'} className='obj' fill />
              </div>

              <div className='flex flex-col'>
                <h1 className='text-2xl '>
                  Sorry, this item not available in our store.
                </h1>
                <h3 className='my-4 font-medium text-lg cursor-pointer text-secondary-dark' onClick={(e) => {
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


  const {category} = context.query
  try {

    if(category!=null)
   
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const responce=await fetch(`http://localhost:3000/api/products?code=getproductsBycatgory&category=${category}`, requestOptions)
    const Data=await responce.json();  
    
    if(Data.success){

      const {data}=Data;
      //console.log(data)
      return { props: { data,category} }
    }

    

  }
  catch (err) {

    return { props: {} }
  }
}



export default products;
