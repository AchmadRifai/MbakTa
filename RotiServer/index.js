const express = require('express')
const app = express()
const mysql = require('mysql')
const ip = require('ip')
const confMysql = {host:'localhost',database:'roti',user:'root',password:'',port:3306}

app.get('/', (req, res) => {
  var c=mysql.createConnection(confMysql)
  c.query('select*from menunya',(e,f,r)=>{
    res.send(JSON.stringify({'f':f,'e':e,'r':r}))
  })
})

if(ip.address())app.listen(2101, ip.address(), () => console.log('Example app listening on port 2101!'))
else app.listen(2101, () => console.log('Example app listening on port 2101!'))
