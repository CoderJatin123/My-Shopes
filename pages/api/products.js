import { trending, FullData, data } from "@/data/products"

export default function handler(req, res) {

    if (req.method == 'GET') {

        const { code } = req.query;

        if (code == 'trending') {
            const products = trending;
            res.status(200).json({ success: true, products })

        }
        if (code == 'getProductById') {
            const reqPid = req.query.pid;
            const product = FullData.find(({ pid }) => pid == reqPid)


            let TAG=product.tag;
            
    
            const suggestions = data.filter((pro) => {
                return (pro.tag.some(A => TAG.includes(A)) && pro.pid != reqPid)
            })
            
            res.status(200).json({ success: true, product,suggestions })
        }
        else {
            res.status(206).json({ success: false, msg: "Code missing." })
        }
    }

    else {

        res.status(500).json({ name: 'You are at wrong position' })
    }




}
