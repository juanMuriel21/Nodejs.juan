const express = require("express")
const app = express()


app.use(require("./routers/index.router"))

app.listen(8081, () =>{
    console.log("servidor esta listo")
}) 

