// Importing express module 
const express = require("express") 
const app = express() 

// Handling GET / request 
app.use("/mahan", (req, res, next) => { 
	res.send("This is the mahan server") 
	console.log("mahan")
}) 

// Handling GET /hello request 
app.get("/hello", (req, res, next) => { 
	res.send("This is the hello response"); 
}) 

// Server setup 
app.listen(3000, () => { 
	console.log("Server is Running") 
}) 
