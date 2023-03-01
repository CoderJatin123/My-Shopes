import React from 'react';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'


const signup = () => {

  const router = useRouter();
  const [data, setdata] = useState({ email: "",name:"", password: "",mobile:"",confirmPassword:"",pincode:"",houseNo:""});

  const [err, setErr] = useState("");

  const setFieldValue = ({ name, value }) => {

    setdata({ ...data, [name]: value })
  }

  const handleSignup = async () => {

    if (data.name == "") {
      setErr("Please Enter name.")
      return;
    }
    else if (data.email == "") {
      setErr("Please enter email.")
    }
    else if (data.password !== data.confiPass) {
      setErr("Both passsword doesn't matched !")
      return
    }
    else {
      const { name, email, password } = data;

    }
  }


  const handleLogin=()=>{
    router.push({pathname:('/login')})
  }

  return (
    <div className='h-full  flex-col  flex-wrap flex justify-center content-center'>

      <div className=' flex-col items-center content-center  w-full lg:w-auto flex-shrink bg-card py-8 rounded-lg lg:px-32 my-7 text-primary '>

        <div className='mt-1 text-center md:text-left mb-5'>
          <h1 className='text-3xl font-bold'>
            Sign Up
          </h1>
        </div>

        {/* first row */}
        <div className='flex flex-col md:flex-row md:gap-16 justify-center lg:gap-40'>


          {/* name */}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>Name</label>

              <input type={'text'} className=' w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='name' value={data.name} onChange={(e) => setFieldValue(e.target)} />
            </div>

          </div>

          {/* email */}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>Email</label>

              <input type={'email'} className='w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='email' value={data.email} onChange={(e) => setFieldValue(e.target)} />
            </div>

          </div>

        </div>

        {/* second row */}
        <div className='flex flex-col md:flex-row md:gap-16 justify-center lg:gap-40'>

          {/* mobile no */}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>Mobile No.</label>

              <input type={'number'} className=' w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='mobile' value={data.mobile} onChange={(e) => setFieldValue(e.target)} />
            </div>

          </div>

          {/* password */}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>Password</label>

              <input type={'password'} className=' w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='password' value={data.password} onChange={(e) => setFieldValue(e.target)} />
            </div>

          </div>

        </div>


        {/* 3rd row */}
        <div className='flex flex-col md:flex-row md:gap-16 justify-center lg:gap-40'>

          {/*pin code */}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>PIN code</label>

              <input type={'number'} className=' w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='pincode' value={data.pincode} onChange={(e) => setFieldValue(e.target)} />
            </div>

          </div>

          {/* confirm password */}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>Confirm Password</label>

              <input type={'password'} className=' w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='confirmPassword' value={data.confirmPassword} onChange={(e) => setFieldValue(e.target)} />
            </div>

          </div>

        </div>


        {/* 4th row */}
        

     
        <div className='flex flex-col md:flex-row md:gap-16 justify-center lg:gap-40'>

          {/* House No.*/}
          <div className=' flex justify-center my-2 text-lg leading-9'>

            <div className='flex flex-col  w-min'>

              <label className='my-1 text-left font-medium'>House No.</label>

              <input type={'password'} className=' w-72 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='confirmPassword' value={data.confirmPassword} onChange={(e) => setFieldValue(e.target)} />
            </div>
            
          </div>
          <button className={`mx-auto mt-10 drop-shadow-md bg-secondary-dark text-white w-72  text-xl font-semibold py-2 px-3 leading-8 h-min rounded-md tracking-wider duration-200 hover:bg-green-500`} onClick={handleSignup}
         >Sign Up</button>

        </div>



            
        
           
         
          

          {/* signup button */}

          <div className=' flex flex-col justify-end my-2 text-lg leading-9'>

          

        </div>

        <h5 className='text-lg text-center text-primary my-5'>Already have an account ? <span className='font-medium hover:cursor-pointer' onClick={(e)=>{handleLogin()}} >Login</span></h5>
       
      </div>
    </div>
  );
}

export default signup;
