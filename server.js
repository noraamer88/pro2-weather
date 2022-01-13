// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const port = 5501;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server


const server = app.listen(port,listening);

function listening() {
    console.log("server running");
    console.log(`running on localhostP${port}`);
}

app.get("/all",(req,res) => {
    res.send (projectData);
    projectData = [];
});

//callback function


//post route
app.post("/add",(req,res) =>{
    console.log(req.body);
});
 
newEntary = {
    data: req.body.data,
    temp:req.body.temp,
    content: req.body.cotent
}
projectData.push(newEntary)

