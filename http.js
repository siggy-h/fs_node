var http = require('http'); // do not change this line

// create a server just like in the first exercise
// as shown in the examples, you are asked to respond to various requests in different ways

// examples which serve as a specification for the required features:
//   http://localhost:8080/missing should return a status code 404 with 'your princess is in another castle' in plain text
//   http://localhost:8080/redirect should redirect the request to '/redirected' by using 302 as the status code
//   http://localhost:8080/cache should return 'cache this resource' in plain text and set the cache max age to a day
//   http://localhost:8080/cookie should return 'i gave you a cookie' in plain text and set 'hello=world' as a cookie
//   http://localhost:8080/check should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie