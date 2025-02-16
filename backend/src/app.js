const express=require('express')
const airoutes=require('../src/routes/ai.routes')
const app=express()
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(cors())
app.use(express.json())
app.use('/ai',airoutes)

module.exports=app;