let express = require('express');
let app = express();
let zod = require('zod');
let schema = zod.array(zod.number()); //[1,2,3]
app.use(express.json());

let schema2 = zod.object({
    email: zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal('IN').or(zod.literal('US'))
})
app.post('/auth' , (req,res)=>{
    let resp = schema2.safeParse(req.body.auth)
    if(!resp.success){
        return res.status(500).json({msg:"invalid data"})
    }else{
        res.status(200).send(resp.data)
    }
})


// app.post('/worldcup' , (req,res)=>{
//     let resp = schema.safeParse(req.body.worldcup)
//     // console.log(resp)
//     if(!resp.success){
//         return res.status(500).json({msg:"invalid data"})
//     }else{
//         res.status(200).send(resp.data)
//     }
// })



app.listen(8080 , ()=>{
    console.log(`server connected at port 8080`)
})













