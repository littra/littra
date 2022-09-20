const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');


const app = express();

// app.get('*.js', function (req, res, next) {
//     req.url = req.url + '.gz';
//     res.set('Content-Encoding', 'gzip');
//     res.set('Content-Type', 'application/javascript');
//     console.log('sent')
//     next(); 
//   });

  app.use("/", expressStaticGzip(__dirname + '/dist'));
  app.use(express.static(__dirname + '/dist'));
  app.use("/static", express.static(__dirname+ '/public'));


app.get("/*", (req, res) => {
   
    res.sendFile(path.join(__dirname, "dist", "index.html"));
   });


app.listen("3000", ()=> console.log("react server started on port 3000"))