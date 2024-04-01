const express = require('express');
const app = express();



//testing api

app.get('/', (req, res)=>{
    res.json({message: 'active api'})
})


//port

const PORT = process.env.PORT || 3000

//

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})