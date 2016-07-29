var http = require('http'); // do not change this line

// create a server just like in the first exercise
// as shown in the examples, you are asked to respond to various requests in different ways
// you will need to use a stream to retrieve the post data

// examples which serve as a specification for the required features, note that they have an order:
//   http://localhost:8080/form should return the form as shown below
//   http://localhost:8080/new should retrieve the post data, save the name / message and return 'thank you for your message' in plain text
//   http://localhost:8080/list should return the stored messages 'name: message' in plain text
//   http://localhost:8080/form should return the form as shown below
//   http://localhost:8080/new should retrieve the post data, save the name / message and return 'thank you for your message' in plain text
//   http://localhost:8080/list should return the stored messages 'name: message\nanother name: another message' in plain text
//   [the server restarts and looses all messages]
//   http://localhost:8080/list should return '' in plain text

/*
// myNotes -- need to get the post data.

res.writeHead(200, {
	'Content-Type': 'text/html'
});

res.write('<!DOCTYPE html>');
res.write('<html>');
	res.write('<body>');
		res.write('<form action="/new" method="post">');
			res.write('<input type="text" name="name">');
			res.write('<input type="text" name="message">');
			res.write('<input type="submit" value="submit">');
		res.write('</form>');
	res.write('</body>');
res.write('</html>');

res.end();
*/
