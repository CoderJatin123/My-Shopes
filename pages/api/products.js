import { data,FullData1,data1 } from "@/data/products"

export default function handler(req, res) {

    const { code } = req.query;

    if (req.method == 'GET') {

        if (code == 'getProductById') {
            const reqPid = req.query.pid;
            const category=req.query.category;

            const {success,product,suggestions}=getproductByid(reqPid,category)

            // const product = FullData.find(({ pid }) => pid == reqPid)

            // let TAG = product.tag;

            // const suggestions = data.filter((pro) => {
            //     return (pro.tag.some(A => TAG.includes(A)) && pro.pid != reqPid)
            // })

          
            if(success)  {
                res.status(200).json({ success: true, product, suggestions })
            }
            else{
                res.status(206).json({ success: false, msg:"Pid or category not defined."})
            }
        }
         
        else if(code=='getproductsBycatgory'){
        const {category}=req.query
        
        const {data}=data1.find((CATEGORY)=>
        CATEGORY.category==category
      )
        
      if(data){
          res.status(200).json({success:true,data})
      }
      else{
        res.status(206).json({success:false,msg:"Category not available"})
      }
           
        }
        else {
            res.status(206).json({ success: false, msg: "Code missing." })
        }
    }

    else if (req.method == 'POST') {

        if (code == 'searchByTags') {

            const tags = JSON.parse(req.body.tags);

            const products = data.filter((pro) => {
                return (pro.tag.some(A => tags.includes(A.toLowerCase()) || tags.includes(A)))
            })

           // console.log("🚀 ~ file: products.js:46 ~ productList ~ productList", productList)

            res.status(200).json({ success: true ,products})

        }
    }

    else {

        res.status(500).json({ name: 'You are at wrong position' })
    }




}
const getproductByid=(Pid,category)=>{
    
    if(Pid && category){

    // data is list of all items that belongs to given category

    const {data}= FullData1.find((Catagories)=>
       Catagories.category==category
     )
    
    // now fetch product full detail from main data list using pid
    const product=data.find(({pid})=>pid==Pid)


    // now finding related productes

    const suggestions = data.filter((pro) => {
        return (pro.tag.some(A => product.tag.includes(A)) && pro.pid != Pid)
    })
    return {success:true,product,suggestions}
    }
    else{
        return {success:false, msg:"Pid or category not defined."}
    }
    
   }