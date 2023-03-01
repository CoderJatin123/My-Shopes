import React from 'react';
import { useRouter } from 'next/router';

const category = () => {
  
  const router=useRouter();
  
  const categories = [{ name: "Groceries", img: "https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1978733351.jpg",tag:"grocery" },

  { name: "Electronic", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHw3cgLUBVBm9FwRbC6pajyghdR1IrwjdRBRUuDi5Qrw&s", tag:"electronic" },
 

  { name: "Footwears", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_rStrWB2MHv8LKEkr-giP1SAIuHyFECw0z3ViHQ&s",tag:"Footwears" },

  { name: "Sports", img: "https://t4.ftcdn.net/jpg/00/17/33/59/360_F_17335975_wezHs72ORL3CY2dFLVi9XtLx4XDOgZBT.jpg" ,tag:"sports"},

  { name: "Buety Products", img: "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=",tag:"buety" }
  ]

  const handleCatagory=(tag)=>{
    router.push({pathname:'/products/products',query:{tags:["hp"]}})
  }

  return (
    <div className='w-full h-full flex flex-col'>

   
      <h2 className='my-4 text-3xl text-primary font-semibold py-3'>Categories</h2>
      {/* <div className='grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-5 mb-10'>
      
        {categories.map((item,index)=>{
            return(

                <div key={index} className='  flex flex-col  bg-card justify-between my-1 p-1 hover:bg-green-100 hover:-translate-y-2 duration-300'>

                    <div className='grow flex flex-col justify-center aspect-h-3 aspect-w-4'>
                      <img className='object-cover p-3  w-full' src={item.img} />
                    </div>
                    <h5 className='text-lg lg:text-lg tracking-tight text-primary font-semibold my-2 px-4'>
                      {item.name}
                    </h5>
                  </div>
            )
        })}

        </div> */}
       
      <div className=' md:grid-cols-3 lg:flex lg:flex-row my-2 gap-2 grid grid-cols-2 '>

        {/* All cards */}


        {
          categories.map((item, index) => {
            return (
              <div key={index} className='  flex flex-col lg:w-72 bg-card justify-between my-1 p-2 hover:bg-green-100 hover:-translate-y-2 duration-300' onClick={(e)=>{handleCatagory(item.tag)}} >

                <div className='grow flex flex-col justify-center aspect-w-4 aspect-h-3'>
                  <img className='object-cover p-1  w-full' src={item.img} />
                </div>
                <h5 className='text-xl tracking-tight text-primary font-medium my-2 px-1'>
                  {item.name}
                </h5>
              </div>
            )
          })
        }
      </div>


    </div>
  );
}

export default category;
