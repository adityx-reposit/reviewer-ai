require('dotenv').config()
const app=require('./src/app')

app.get('/',(req,res)=>{
    res.send("test hit")
})

app.listen(3000,()=>{
    console.log("server running on 3000 port");
    
});