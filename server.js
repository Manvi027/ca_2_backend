const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const port = 8080;


app.get('/' ,(req,res) => {
    res.send('Hi , user!!');
})

app.put('/user',(req,res)=>{
    try{
        const {email,password} = req.body;

        if (email){
            const update = await
        }

        if (!email){
            res.status(400).json({
                msg : 'Email not found',
                success: false
            })
        }
    }
        catch(err){
            res.status(500).json({
                msg:'internal server error',
                success : false
            })
        }
    
})

app.get('/delete',async(req,res)=>{
    const email = req.body;
    const del=await users
})

app.listen(port , () => {
    console.log(`server running at $[port]`);
});
