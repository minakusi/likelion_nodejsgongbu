const express = require('express')
const fs = require('fs')

const app = express()
const port = 5000

app.use(express.static('static'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', function(req, res){
    fs.readFile('htmls/home.html', function(error, data){
        if(error) console.log(error);
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/user/login', function(req, res){
    fs.readFile('htmls/login.html', function(error, data){
        if(error) console.log(error);
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/user/signup', function(req, res){
    fs.readFile('htmls/signup.html', function(error, data){
        if(error) console.log(error);
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/postings', function(req, res){
    fs.readFile('htmls/postings.html', function(error, data){
        if(error) console.log(error);
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

app.get('/postings/write', function(req, res){
    fs.readFile('htmls/write.html', function(error, data){
        if(error) console.log(error);
        else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});