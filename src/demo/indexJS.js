const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
//build in middlewire

const staticPath = path.join(__dirname, '../public');
// const staticPath1 = path.join(__dirname, '../views');

// const staticPath = path.join(__dirname, '../src/hw');
app.set('view engine', "hbs"); // view enginge is a type of static template engine
app.get("/", (req, res) => {
    res.render("index", {
        msg: 'hi this is a msg from index',
    });
});
// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//     res.send("hi this is express here");
// });

app.get("/about", (req, res) => {
    res.render("about");
    // res.send("hi this is express here");
});
app.get("*", (req, res) => {
    res.render('404', {
        errorComment: 'oop! page not found...',
    });
})


app.listen(port, "", () => {
    console.log(`server call port is ${port}`);
})






// app.get("index", (req, res) => {
//     // res.send('index', {
//     res.render('index', {
//         msg: 'hi this is a msg in index',
//     });
// });