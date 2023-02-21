import UserContext from './userContext';
import { useState ,useEffect} from 'react';
import React from 'react';
import { data, tagList} from '@/data/products';
import { useRouter } from 'next/router';

const Userstate = (prop) => {

   const [tags, setTags] = useState([]);
   const router=useRouter();
  
  const [search, setSearch] = useState("")
  

  const onSearch=()=>{

    if(search!=""){
      var FilterdData=tagList.filter((tag)=>{return tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())})
      setTags(FilterdData)
      
      /console.log(" Authstste ", FilterdData)
      router.push({pathname:'/products/products',query:{tags:FilterdData}})
    }
    

  }

  return (
    <UserContext.Provider value={{search,setSearch,onSearch,tags}}>
      {prop.children}
    </UserContext.Provider>
   
  );
}

export default Userstate;
