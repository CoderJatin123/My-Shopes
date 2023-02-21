import React from 'react';

const Cart = () => {

    const myCart = {
        uid: "12345", cartItems: [{ pid: 1, price: 41990, name: "ASUS Vivobook 14, 14.0-inch (35.56 cms) FHD, Intel Core i5-1035G1 10th Gen", img: "https://m.media-amazon.com/images/I/41H42FebSmL._AC_SR400,600_.jpg", rating: 2, quantity:2 },
        { pid: 1, price: 41966, name: "ES ESPINHO Maddison Solid Sal Wood Fabric Upholstered 3 Seater", img: "https://m.media-amazon.com/images/I/51cf92qyyAS.jpg", rating: 5 ,quantity:2},]
    }
    return (
        <div className=''>

            <div className=' grid grid-cols-6 lg:grid-cols-6 md:grid-cols-7 my-10 lg:my-6 mx-6 md:mx-1 text-primary'>


                {/* products in carts section */}
                <div className='md:col-span-4 mx-1 my-10  md:my-0 col-span-full order-2 md:order-1 md:mx-8 flex flex-col gap-4'>
                
                {/* title */}
                <h2 className='my-3 text-3xl text-primary font-semibold'>Your cart</h2>

                    {myCart.cartItems.map((items, index) => {
                        return (
                            <div key={index} className='bg-card flex flex-row md:flex-col px-5 py-3 justify-between items-center rounded-md  lg:flex-row'>

                                {/* image   */}
                                <div className=' w-32 md:w-full lg:w-44 mx-2 md:px-16 md:my-3 lg:my-auto lg:px-0'>
                                    <div className='aspect-h-3 aspect-w-4 '>
                                        <img className='object-cover' src={items.img} />
                                    </div>
                                </div>

                                {/* item name */}
                                <div className='font-medium text-base pl-10 my-1 lg:my-1 md:my-6'>
                                    <h2>
                                        {items.name}
                                    </h2>
                                </div>


                                {/* item price, rating and quantity*/}
                                <div className='flex flex-col md:flex-row lg:flex-col  mr-3 justify-center md:items-center items-end lg:items-end w-full'>

                                      {/* ratting and price*/}
                                    <div className='flex flex-row items-center text-xl font-semibold '>

                                        {/* ratting */}
                                        <div className='text-lg flex items-center mx-4'>
                                        <span className='px-1 leading-9 pt-1'>

                                       {`${items.rating+' '}`} 
                                            </span>
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                         {/* price */}
                                         <h3 className='min-w-full'>₹ {items.price.toLocaleString()}</h3>



                                    </div>

                                    <h5 className='font-semibold my-4 md:mx-3 mx-0 lg:mx-0'>
                                    Qty : {items.quantity}
                                    </h5>


                                </div>



                            </div>
                        )
                    })}

                </div>

                {/* payment section */}
                <div className='col-span-full order-1 md:order-2 md:col-span-3 lg:col-span-2 bg-card flex flex-col py-8 px-12 mx-1 md:px-10 lg:px-16 rounded-lg'>

                    <h2 className='text-3xl lg:text-3xl mt-3 md:mt-2 mb-2 sm:mb-5 font-semibold'>
                        Order summery
                    </h2>

                    {/* payment detail */}

                    {/* subtotal */}
                    <div className='flex flex-row my-1 justify-between text-lg'>
                        <h3 className='font-medium'>
                            Subtotal
                        </h3>
                        <h3 className=''>
                            ₹ 1100
                        </h3>
                    </div>

                    {/* value shipping */}
                    <div className='flex flex-row my-1 justify-between text-lg'>
                        <h3 className='font-medium'>
                            value shipping
                        </h3>
                        <h3 className=''>
                            ₹ 100
                        </h3>
                    </div>

                    {/* GST tax */}
                    <div className='flex flex-row my-2 justify-between text-xl'>
                        <h3 className='font-medium'>
                            GST Tax
                        </h3>
                        <h3 className=''>
                            ₹ 198
                        </h3>
                    </div>

                    {/* EST total */}
                    <div className='flex flex-row my-4 justify-between text-2xl font-semibold'>
                        <h3 className=''>
                            Est Total
                        </h3>
                        <h3 className=''>
                            ₹ 1298
                        </h3>
                    </div>

                    {/* secure payment */}
                    <div className='flex items-center my-1'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 12C15.34 12 15.67 12.04 16 12.09V9C16 8.46957 15.7893 7.96086 15.4142 7.58579C15.0391 7.21071 14.5304 7 14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C1.46957 7 0.960859 7.21071 0.585786 7.58579C0.210714 7.96086 0 8.46957 0 9V19C0 20.11 0.89 21 2 21H9.81C9.3 20.12 9 19.1 9 18C9 14.69 11.69 12 15 12ZM5 5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5V5ZM8 16C7.60444 16 7.21776 15.8827 6.88886 15.6629C6.55996 15.4432 6.30362 15.1308 6.15224 14.7654C6.00087 14.3999 5.96126 13.9978 6.03843 13.6098C6.1156 13.2219 6.30608 12.8655 6.58579 12.5858C6.86549 12.3061 7.22186 12.1156 7.60982 12.0384C7.99778 11.9613 8.39991 12.0009 8.76537 12.1522C9.13082 12.3036 9.44318 12.56 9.66294 12.8889C9.8827 13.2178 10 13.6044 10 14C10 15.11 9.11 16 8 16ZM18.5 16.25L13.75 21L11 18L12.16 16.84L13.75 18.43L17.34 14.84L18.5 16.25Z" fill="#5C6B85" />
                        </svg>

                        <h5 className='ml-2'>100 % Secure payment.</h5>

                    </div>

                    <button className='bg-secondary-dark drop-shadow-lg text-xl font-bold text-white  my-6 py-3  leading-9 rounded-md tracking-wider'>Proceed to Pay</button>

                    <h5 className='my-3 text-lg'>
                        Continue Shopping
                    </h5>

                    <h5 className='my-2 text-xl font-semibold'>
                        Need Help ?
                    </h5>



                </div>



            </div>
        </div>
    );
}

export default Cart;
