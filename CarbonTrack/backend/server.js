const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let path='./HTML/';
    switch(req.url)
    {
        case '/index.html':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/index1.html':
            path+='index1.html';
            res.statusCode=200;
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.end(data);
        }
    })
});
server.listen(3000,'localhost',()=>{
    console.log('Listening for request on port 3000');
});