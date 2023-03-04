import React from 'react';
import { useRouter } from 'next/router';

const category = () => {
  
  const router=useRouter();
  
  const categories = [{ name: "Groceries", img: "https://media.istockphoto.com/id/861188910/photo/different-types-of-food-on-rustic-wooden-table.jpg?s=1024x1024&w=is&k=20&c=_3QH87_AYm5YgcpC9L4JVmTKm49QydKDr9sJq7IvUu4=",tag:"groceries" },

  { name: "Electronic", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHw3cgLUBVBm9FwRbC6pajyghdR1IrwjdRBRUuDi5Qrw&s", tag:"electronic" },
 

  { name: "Footwears", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_rStrWB2MHv8LKEkr-giP1SAIuHyFECw0z3ViHQ&s",tag:"footwears" },

  { name: "Sports", img: "https://t4.ftcdn.net/jpg/00/17/33/59/360_F_17335975_wezHs72ORL3CY2dFLVi9XtLx4XDOgZBT.jpg" ,tag:"sports"},

  { name: "Beauty Products", img: "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=",tag:"beauty" },

  { name: "Furniture", img: "https://m.media-amazon.com/images/I/41-FuBzL0zL._SX300_SY300_.jpg",tag:"furniture" }
  ]

  const handleCatagory=(name)=>{
    const category=name.toLowerCase();
    router.push({pathname:'/products/products',query:{category}})
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
       
      <div className=' md:grid-cols-3 grid-cols-1 lg:grid-cols-5 my-2 gap-2 grid sm:grid-cols-2 '>

        {/* All cards */}


        {
          categories.map((item, index) => {
            return (
              <div key={index} className='flex flex-col bg-card justify-between my-1 p-4 hover:bg-green-100 hover:-translate-y-2 duration-300' onClick={(e)=>{handleCatagory(item.tag)}} >

                <div className='grow flex flex-col justify-center aspect-w-4 aspect-h-3'>
                  <img className='object-cover p-1  w-full' src={item.img} />
                </div>
                <h5 className='text-2xl md:text-lg tracking-tight text-primary font-medium my-2 px-1'>
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
