import UserContext from './userContext';
import { useState } from 'react';
import React from 'react';
import { tagList} from '@/data/products';
import { useRouter } from 'next/router';

const Userstate = (prop) => {

   const [tags, setTags] = useState([]);
   const router=useRouter();
  
  const [search, setSearch] = useState("")
  

  const onSearch=()=>{

    if(search!=""){
         
   
   
  router.push({pathname:'/products/products',query:{keyword:search}})
 //     router.push({pathname:'/products/products',query:{tags:FilterdData}})

    }
    

  }

  return (
    <UserContext.Provider value={{search,setSearch,onSearch,tags}}>
      {prop.children}
    </UserContext.Provider>
   
  );
}

export default Userstate;
