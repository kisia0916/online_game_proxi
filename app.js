const express = require("express")
const app = express()
const fs = require("fs")
const informationFile = fs.readFileSync("./serverURL.txt","utf-8")
const page = fs.readFileSync("./index.html","utf-8")

const serverURL = informationFile.split(",")[0]
const domain = informationFile.split(",")[1]
console.log(serverURL,domain)
app.get("/",(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(page)

    res.end()
})
app.get("/jump",(req,res)=>{
    res.writeHead(302,{
        "Location":`https://${serverURL}`

    })
    res.end()
})
app.use((req,res)=>{
    res.redirect("/")
})
app.listen(process.env.PORT||3000,()=>{
    console.log({nowdomain:domain,serverURL:serverURL})
})