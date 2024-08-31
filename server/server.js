const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["https://localhost:5173"]
}

app.get("/api",(req,res)=>{
    res.json({"data":["item1","item2","item3"]});
})

app.listen('8000', ()=>{
    console.log("server started on port 8000");
})