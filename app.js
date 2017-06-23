const 	express = require("express"), 
		bodyPaser = require("body-parser"), 
		path = require("path"), 
		cors = require("cors"), 
		passport = require("passport"), 
		mongoose = require("mongoose");


const 	app = express(), 
		port = 3000;


app.get('/', (req, res) => {
	res.send('Yo');
});


app.listen(port, () => {
console.log('Server Started ' + port);

});