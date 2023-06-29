/*
	Express static.js
	author: George Tsang
	
	Demonstrates the syntax and usage of Express object static method.
	
	This is a built-in middleware function in Express that serves static files.
	Static files are files with content (e.g. HTML) that remains stable and not generated dynamically by the web server.

	To test this app, one should
		1.	run this progam in the integrated terminal
		2.	open browser and enter URLs
			"127.0.0.1:3000"
			"127.0.0.1:3000/images/cat.jpg"
			"127.0.0.1:3000/test express static.txt"

	Framework:
		Express

	npm: 
		npm install express --save

	References:

        https://expressjs.com/en/4x/api.html#express.static

	Note:
		__dirname is a string variable that contains the directory name where the current executing program resides.
		__dirname is NOT a global object.
		
*/

const HTTP_PORT = process.env.PORT || 3000;

const express = require("express");											//	Use "require" to bring in the Express module
const app = express();														//	Assign an instance of Express to variable app

app.use("/", express.static("public"));										//	Set the public subfolder as the default folder
app.use("/images", express.static(__dirname + "/images"));					//	Set the images subfolder as the default folder for the /images route

const server = app.listen(HTTP_PORT, function() {							//	Starts Express server and listening for requests via 
	console.log(`Listening on port ${HTTP_PORT}`);							//	predetermined environmental port or port 3000
});