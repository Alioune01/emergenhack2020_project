var express = require('express');
var app = express();
app.use(express.static("./.."));

app.get('/', (req, res)=>{res.sendFile('index.html', { root:  __dirname});});
//dirname should actually be whatever you put in app.use(); __dirname is just the current directory
//which is not always the case
app.listen(8080, function()
{
	console.log("Server Started");
});
