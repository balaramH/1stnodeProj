//welcome this is navigator page.......
const express = require('express');
const app = express();
const port = 8000;
app.get("/", (req, res) => {
    res.write("<h1>welcome to my home page..........</h1>");
    res.write("<h1>welcome to my  again home page..........</h1>");
    // res.end();
    res.send(); // res.send used for just end ..... 
});
app.get("/about", (req, res) => {
    // res.send("welcome to my about page..........");
    res.status(200).send("<h1>welcome to my about page..........</h1>");

});
app.get("/contact", (req, res) => {
    res.send("welcome to my contact page..........");
    // res.status(200).send("welcome to my contact page..........");

});
app.get("/temp", (req, res) => {
    // res.send("welcome to my contact page..........");
    // res.send([{
    //         id: 1,
    //         name: "balaram "

    //     },
    //     {
    //         id: 2,
    //         name: "Subhadra "

    //     },
    // ]);

    res.json([{
            id: 1,
            name: "balaram "
        },
        {
            id: 2,
            name: "Subhadra "

        }, {
            id: 3,
            name: "Jagannath "

        },
    ]);
    // res.status(200).send("welcome to my contact page..........");

});
//if the method are identical when an object and are passed but res.json() will also convert non object, such as null and undefined ,  which are not valid json  
app.listen(port, "", () => {
    console.log(`listening to the port number ${port}`)
});