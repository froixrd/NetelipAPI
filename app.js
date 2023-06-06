const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
  
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const data = querystring.parse(body);

      
      const dataString = body;
      const startIndex = dataString.indexOf('{');
      const endIndex = dataString.lastIndexOf('}');
      const jsonStr = dataString.substring(startIndex, endIndex + 1);

      // Manejar el JSON
      try {
        console.log(jsonStr);
        //const jsonData = JSON.parse(jsonStr);
        //console.log(jsonData);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //res.end(JSON.stringify(jsonData));
      } 
      catch (error) 
      {
        console.error('Error al analizar el JSON:', error);
        res.statusCode = 400;
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});


server.listen(port);


//app.use(express.json());
//
//// Ruta para hacer la llamada
//var https = require('follow-redirects').https;
//var fs = require('fs');
//
//var options = {
//  'method': 'POST',
//  'hostname': 'api.netelip.com',
//  'path': '/v1/voice',
//  'headers': {
//    'Authorization': 'Bearer 3d9dbd0d29f3e4584e68bb698b0a9ae4323b94a103b41234271741b3e090d5b4'
//  },
//  'maxRedirects': 20
//};

//var req = https.request(options, function (res) {
//  var chunks = [];
//
//  res.on("data", function (chunk) {
//    chunks.push(chunk);
//  });
//
//  res.on("end", function (chunk) {
//    var body = Buffer.concat(chunks);
//    console.log(body.toString());
//  });
//
//  res.on("error", function (error) {
//    console.error(error);
//  });
//});

//var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n3d9dbd0d29f3e4584e68bb698b0a9ae4323b94a103b41234271741b3e090d5b4\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"api\"\r\n\r\nAPI 288aa\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"src\"\r\n\r\n34822255534\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"dst\"\r\n\r\n103\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"typedst\"\r\n\r\nextension\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"duration\"\r\n\r\n50\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"userdata\"\r\n\r\n0034685223686\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

//req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');
//
//req.write(postData);
//
//req.end();

