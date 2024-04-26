import http from 'http';
import fs from 'fs';
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const port = process.env.PORT || 3000

const server = http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('aj.html', function(error,data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File Not Found')
    } else{
      res.write(data)
    }
    res.end()
  })
})

server.listen(port,function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})
