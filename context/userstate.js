import UserContext from './userContext';
import { useState ,useEffect} from 'react';
import React from 'react';
import { data } from '@/data/products';

const Userstate = (prop) => {

   const [isLoading, setLoading] = useState(true);
  
  const [search, setSearch] = useState()
  
  useEffect(() => {
   
    if(search){
    
      FilterdData=data.filter((product)=>{return product.name.includes(search)})
      console.log(FilterdData)

    }

  }, [search]);

  useEffect(() => {

    console.log("Ia ma use Effect...")
   
  },[]);

  return (
    <UserContext.Provider value={{search,setSearch}}>
      {prop.children}
    </UserContext.Provider>
   
  );
}

export default Userstate;
