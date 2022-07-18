const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');

const users = require('./modules/users/users')
const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));
app.set ( ' view engine' , 'ejs');

const viewsPath = path.join(__dirname,'./templates/views') 
app.set('views', viewsPath)

app.get("" , (req, res) => {

res.render("index",{fullName:"yasha sadikov"});
});

// app.get("/about" , (req, res) => {

//     res.render("about",{imagesArray: images});
//     });


app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});