// express js is a api framework.
//to produce stucture MVC(model view controller.)
//help to rreduce time consume 
//why require  ... help to apis
//produce some code to utilize in common program....

// var express = require('express');
// const { route } = require('express/lib/application');
// var app = express()
// const port = 8000;
// //test 1
// app.use(function(req, res, next) {
//     console.log('Time:', Date.now())
//     next() //call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
// })

//test 2
// app.use('/user/:id', function(req, res, next) {
//         console.log('Request Type:', req.method);
//         res.send('this is application layer..'); //show some output on the browser msg
//         next()
//     })

//test 3 for send some msg for id 
// app.get('/user/:id', function(req, res, next) {
//     res.send('USER')
// })

//test 4
// app.use('/user/:id', function(req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, function(req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//     res.send('msg used for handleing error.')
//         // console.log(); //here i want a msg in browser console..
// })

// test 5 multiple route handles
// app.get('/user/:id', function(req, res, next) {
//     console.log('ID:', req.params.id)
//     next()
// }, function(req, res, next) {
//     res.send('User Info')
// })

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', function(req, res, next) {
//     res.send(req.params.id)
// })



//test 6 
//NPOTED : To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route. NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.

// app.get('/user/:id', function(req, res, next) {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//         // otherwise pass the control to the next middleware function in this stack
//     else next()
// }, function(req, res, next) {
//     // send a regular response
//     res.send('regular')
// })

// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', function(req, res, next) {
//     res.send('special')
// })

// test 6 : Middleware can also be declared in an array for reusability.

// function logOriginalUrl(req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }

// function logMethod(req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// }

// var logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff, function(req, res, next) {
//     res.send('User Info')
//         // console.log(logStuff);
// })








// //this is used for show some msg for for server connection
app.listen(port, "", () => {
    console.log(`listening to the port number ${port}`)
});