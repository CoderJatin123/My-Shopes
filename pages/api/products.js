import { FullData, data } from "@/data/products"

export default function handler(req, res) {

    const { code } = req.query;

    if (req.method == 'GET') {

        if (code == 'getProductById') {
            const reqPid = req.query.pid;
            const product = FullData.find(({ pid }) => pid == reqPid)

            let TAG = product.tag;

            const suggestions = data.filter((pro) => {
                return (pro.tag.some(A => TAG.includes(A)) && pro.pid != reqPid)
            })

            res.status(200).json({ success: true, product, suggestions })
        }

        else {
            res.status(206).json({ success: false, msg: "Code missing." })
        }
    }

    else if (req.method == 'POST') {

        if (code == 'searchByTags') {


            const tags = JSON.parse(req.body.tags)

            const products = data.filter((pro) => {
                return (pro.tag.some(A => tags.includes(A)))
            })

           // console.log("🚀 ~ file: products.js:46 ~ productList ~ productList", productList)

            res.status(200).json({ success: true ,products})

        }
    }

    else {

        res.status(500).json({ name: 'You are at wrong position' })
    }




}
