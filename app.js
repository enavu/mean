const 	express = require("express"), 
		bodyPaser = require("body-parser"), 
		path = require("path"), 
		cors = require("cors"), 
		passport = require("passport"), 
		mongoose = require("mongoose"),
		config = require("./config/database");

mongoose.connect(config.database);
mongoose.connection.on('connected',  ()=> {
	console.log('Connected to database' + config.database)
});

mongoose.connection.on('error',  ()=> {
	console.log('Error to database' + config.database)
});
const 	app = express(), 
		port = 3000, 
		users = require('./routes/users');

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyPaser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
	res.send('Invalid Response');
});

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public/index.html'));
});
 


app.listen(port, () => {
console.log('Server Started ' + port);

});