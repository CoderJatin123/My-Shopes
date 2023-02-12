import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'


const login = () => {

  const router = useRouter();

  const [data, setdata] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [isOk, setOk] = useState(false);

  const setFieldValue = ({ name, value }) => {

    setdata({ ...data, [name]: value })

    if(!isOk && name=="password" && data.password.length ==7){
      setOk(true)    
    }
    else{
      setOk(false)
    }
  }


  const handlelogin = async () => {

  const {email,password}=data;
  
   if(email==""){
    setErr("Please enter correct email.")
    return
   }
   else if(password==""||password.length<8 ){
    setErr("Please enter password with 8 character")
    return
   }
   else{

    setErr("");
   } 
  }

  const handleSignup=()=>{
    router.push({pathname:('/signup')})
  }

  return (
    <div className='h-full  flex-col w-full flex-wrap flex justify-center content-center'>

      <div className='px-16 sm:px-20 py-16 justify-center flex-col flex-shrink text-center items-center content-center bg-card mt-36 mb-64  sm:my-16 text-primary rounded-lg'>

        <div className='text-left pb-4 text-primary'>
          <h1 className='text-3xl font-bold '>
            Sign In
          </h1>
        </div>

        <div className=' flex justify-center my-2 text-lg leading-9'>

          <div className='flex flex-col  w-min'>

            <label className='my-1 text-left font-medium'>Email</label>

            <input type={'email'} className='my-1 w-80 mx-1 px-2 py-1 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='email' value={data.email} onChange={(e) => setFieldValue(e.target)} />
          </div>

        </div>

        <div className=' flex justify-center my-2 text-lg font-semibold leading-9'>

          <div className='flex flex-col  w-min'>

            <label className='my-1 text-left  font-medium'>Password</label>

            <input type={'password'} className='my-1 w-80 mx-1 py-1 px-2 focus:outline-none bg-white ring-2 ring-transparent rounded-md focus:ring-gray-300' name='password' value={data.password} onChange={(e) => setFieldValue(e.target)} />
          </div>

        </div>

        <button className={`bg-secondary-dark text-white w-80 text-xl font-semibold py-2 px-3 leading-8 my-5 rounded-md tracking-wider duration-200 hover:bg-green-500`} onClick={handlelogin}
        >Sign In</button>


        <h5 className='text-lg text-primary mt-5'>New user ? <span className='font-medium hover:cursor-pointer' onClick={(e)=>handleSignup()}>Create new account.</span></h5>
  
      </div>
     
    </div>
  );
}

export default login;
