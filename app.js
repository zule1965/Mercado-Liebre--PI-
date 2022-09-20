const express= require('express');
const { dirname } = require('path');
const path= require ('path');
const app= express();

app.listen(3030,()=>
    console.log('servidor corriendo')
);
app.get ('/'), (requ,res)=>{
    res.sendFile(path.join(--dirname,'/views/index.html'))
}
