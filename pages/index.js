import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Shops</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/my-shops.svg" />
      </Head>
      <main className='h-full w-full px-5'>

        <div className='bg-cyan-3001 flex flex-col sm:flex-row justify-around mt-10'>


          <div className='flex flex-col '>

            <h1 className='text-xl font-extrabold text-primary py-4 mt-2'>
              {/* Initial discount */}
              Get <span className='text-red-500 px-1'> 70%</span>off on first purchase.
            </h1>
            <div className='bg-red-light my-6'>
              <h3 className='text-primary-dark text-base py-6 pl-5 font-semibold'>
                Diwali festival starts from 12 oct
              </h3>
            </div>
          </div>

          <div className='flex flex-col my-6 items-center'>
            
            <div>
            <Image width={200} height={200} src='/samsung.png' />
            </div>
            <h3 className='text-base font-bold text-primary-dark my-6'>
              Samsung S22 PRO MAX
              <br/>
              <span className='text-red-500'>10% OFF</span>
            </h3>

          </div>

        </div>


      </main>
    </>
  )
}
