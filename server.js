const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const users = [
    {email : 'manvi@gmail.com',password = '1234'},
];

const port = 8080;


app.get('/' ,(req,res) => {
    res.send('Hi , user!!');
})

app.put('/user',async(req,res)=>{
    try{

        const {email,password} = req.body;
        for(let key in users){
            if(users[key].email==email){
                users[key]={...users[key],...update};
                update =true;
                return res.send.status(200).json({
                    msg : 'user data updated',
                    success : true
                })
                
            }
            else {
                return res.status()
            }
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
    try{
        const {email} = req.body;
        if(email){
            
        }
        const del=await users
    }
    
   
})

app.listen(port , () => {
    console.log(`server running at $[port]`);
});
