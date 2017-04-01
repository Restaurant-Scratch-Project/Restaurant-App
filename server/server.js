// var express = require('express');
// var path = require('path');
// const bodyParser = require('body-parser');
// var app = express();



// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // app.use(express.static(__dirname +'./../')); //serves the index.html

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname+'./../index.html'));
// });

// app.get('/build/webpack-bundle.js', (req, res) => {
//     res.sendFile(path.join(__dirname+'./../build/webpack-bundle.js'));
// })


// var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; 
// var authToken = 'your_auth_token'; 
 
// //require the Twilio module and create a REST client 
// var client = require('twilio')(accountSid, authToken); 
// app.get('/testtwilio', function(req, res){
// 	client.sendMessage({
// 		to: '+18175264051',
// 		from: '+18176591086',
// 		body: 'we are sending a message form the dinner app'
// 	}, function(err, data){
// 		if(err)
// 			console.log(err);
// 		console.log(data);
// 	});
// });


// app.listen(3000); //listens on port 3000 -> http://localhost:3000/

