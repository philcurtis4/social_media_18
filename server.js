const express = require('express');

const db = require('./config/connection ');

const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => {
	console.log('DB connection established');
	//start express server
	app.listen(PORT, () => {
		console.log('Express server started on port', PORT);
	});

});