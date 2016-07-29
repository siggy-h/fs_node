var http = require('http'); // do not change this line

// myNote! -- see http.js exercise

var server = http.createServer(function(req, res) { //expects request and response
    res.writeHead(200, {
        'Content-Type': 'text/html'  //make sure to change the content to html
        'Set-Cookie': 'example=test'; // give browser a cookie. everytime you give the browser a cookie
            // it will save them (not write over them).
            // cookies are saved by key - so if you use the same key i.e. exaple=something then it will
            // overwrite the previous 'example="" '
            // When you restart the server your cookies will be gone - unless you're saving them in a persistent way.
        });

    console.log(req.headers.cookie);  // now it will say example=test

    res.write('<!DOCTYPE html><html><body>lorem ipsum</body></html>');
    res.end();
    })

})

server.listen(process.env.PORT || 8080);  //the test server's port

//run >> node file.js
// open browser and do localhost: 8080
