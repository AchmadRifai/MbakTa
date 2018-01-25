const express = require('express')
const app = express()
const mysql = require('mysql')
const ip = require('ip')
const confMysql = {host:'localhost',database:'roti',user:'root',password:''}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

if(ip.address())app.listen(2101, ip.address(), () => console.log('Example app listening on port 2101!'))
else app.listen(2101, () => console.log('Example app listening on port 2101!'))
