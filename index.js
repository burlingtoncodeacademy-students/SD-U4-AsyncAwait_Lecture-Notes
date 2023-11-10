import { returnData } from './promise.js'; //! DO NOT REMOVE THIS LINE

//! Async/Await
/* 
    - Introduced in ES8 in 2017
    - Can make any function an async function simply by denoting as such
    - Helps reduce the need for Callback Functions
    - CANNOT be used in loops!
    - ALWAYS returns a promise.

*   Keyword
        - async
            - denotes the type of function
        - await
            - calls a process to "wait" for a result
*/

//* syntax concepts
async function asyncFunDeclaration() {
    // code block...
}

let funcExpression = async function() {
    // code block...
}

let arrowFunc = async() => {
    // code block...
}

async function getName() {
    return "Gandalf"
};

// getName().then(data => console.log(data));

//? Await

async function extraData() {
    let info = await returnData();
    return(`${info} in the cloud...`)
}

extraData().then(data => console.log(data));
