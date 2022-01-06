// ........................... async function()...............

// function hello() { return "Hello" };
// console.log(hello());    //op is Hello

// async function hello() { return "Hello" }; //try async function
// console.log(hello()); //op is {'Hello'}

// let hello = async function() { return "Hello" }; //async function expression
// console.log(hello());     //op is {'Hello'}

// let hello = async() => "Hello"; //arrow function
// console.log(hello());  //op is promises {'Hello'}

// let hello = async() => "Hello"; //arrow function with .then()
// hello().then((value) => console.log(value)) //op is Hello

// let hello = async() => "Hello"; //arrow function with .then()
// hello().then(console.log); //shorthand   //op is Hello

// console.log(hello().then(console.log)); //shorthand promice wait

// ........................... await function()...............
// async function hello() {
//     return await Promise.resolve("Hello");
//     // return await ("Hello"); //reurn same output

// };
// // hello().then(alert);
// hello().then(console.log); //op is Hello


// fetch('coffie.jpg')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.blob();
//     })
//     .then(myBlob => {
//         let objectURL = URL.createObjectURL(myBlob);
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     })
//     .catch(e => {
//         console.log('There has been a problem with your fetch operation: ' + e.message);
//     });



// async function myFetch() {
//     let response = await fetch('coffee.jpg');

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     let myBlob = await response.blob();

//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }

// myFetch()
//     .catch(e => {
//         console.log('There has been a problem with your fetch operation: ' + e.message);
//     });



// async function myFetch() {
//     let response = await fetch('coffee.jpg');
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.blob();

// }

// myFetch().then((blob) => {
//     let objectURL = URL.createObjectURL(blob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
// }).catch(e => console.log(e));

// async function myFetch() {
//     try {
//         let response = await fetch('coffee.jpg');

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         let myBlob = await response.blob();
//         let objectURL = URL.createObjectURL(myBlob);
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);

//     } catch (e) {
//         console.log(e);
//     }
// }

// myFetch();

// async function myFetch() {
//     let response = await fetch('coffee.jpg');
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.blob();

// }

// myFetch().then((blob) => {
//         let objectURL = URL.createObjectURL(blob);
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     })
//     .catch((e) =>
//         console.log(e)
//     );




// ........................... recurtion..................
// function cd(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const arr = cd(n - 1);
//         arr.unshift(n);
//         console.log(arr);
//         return arr;
//     }
// }
// cd(5);
// output 
// [ 1 ]
// [ 2, 1 ]
// [ 3, 2, 1 ]
// [ 4, 3, 2, 1 ]
// [ 5, 4, 3, 2, 1 ]

function rangenum(st, end) {
    if (st > end) {
        return [];
    } else {
        // console.log(st++)
        // const arr = rangenum(st + 1, end)// why does not st++ is used
        const arr = rangenum(++st, end) // why does not st++ is used

        arr.unshift(st);
        console.log(arr);
        return arr;
    }
}
rangenum(1, 6);