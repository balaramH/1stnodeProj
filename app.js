// const express = require('express');
// const app = express();
// const path = require('path');
// const port = 8000;
// //build in middlewire

// // const staticPath = path.join(__dirname, '/public');
// // const staticPath1 = path.join(__dirname, '../views');

// // const staticPath = path.join(__dirname, '../src/hw');
// //to set the view engine
// // app.set('view engine', "hbs"); // view enginge is a type of static template engine
// // app.use(express.static(path.join(__dirname, "../public")));
// const templatePath = path.join(__dirname, '/templates');
// app.set('view engine', "hbs");

// app.use(express.static(__dirname + '/public'));
// app.get("/", (req, res) => {
//     res.render("index");
// });
// // app.use(express.static(staticPath));
// // app.use(express.static(staticPath1));


// app.get("/", (req, res) => {
//     res.send("hi this is express here");
// });

// app.get("/about", (req, res) => {
//     res.render("about");
//     // res.send("hi this is express here");
// });
// app.get("*", (req, res) => {
//     res.render('404', {
//         errorComment: 'oop! page not found...',
//     });
// })


// app.listen(port, "", () => {
//     console.log(`server call port is ${port}`);
// })






// // app.get("index", (req, res) => {
// //     // res.send('index', {
// //     res.render('index', {
// //         msg: 'hi this is a msg in index',
// //     });
// // });


// ................. 05-01-2022-------------
const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const hbs = require('hbs');

//........... bulid in middle ware..........
const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, '/templates/views');
const partialPath = path.join(__dirname, "/templates/partials")

//to set the view engine
app.set('view engine', "hbs");
app.set('views', templatePath); //to change folder name
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});
// app.get("/", (req, res) => {
//     res.send("hi this is express here");
// });

app.get("/about", (req, res) => {
    res.render("about");
    // res.send("hi this is express here");
});
app.get("/search", (req, res) => {
    res.render("search");
    // res.send("hi this is express here");
});
// app.get("/email", (req, res) => {
//     res.render("email");
//     // res.send("hi this is express here");
// });
app.get("/download", (req, res) => {
    res.render("download");
    // res.send("hi this is express here");
});
app.get("/contact", (req, res) => {
    res.render("contact");
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