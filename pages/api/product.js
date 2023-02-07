import { data } from "@/data/products"

export default function handler(req, res) {

    if(req.method=='GET'){

        const reqPid=req.query.pid;

        const {code}=req.query;

        if(code=='getProductById')
        {
        const product=data.find(({pid})=>pid==reqPid)
        res.status(200).json({success:true,product })
        }
        else{
            res.status(206).json({success:false,msg:"Code missing." })
        }

    }

    else{

        res.status(500).json({ name: 'You are at wrong position' })
    }




  }
  