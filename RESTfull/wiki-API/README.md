# Prerequisite (what is asynchronous code and synchronous code?)

Synchronous code is executed in sequence, one line at a time, and each line of code has to wait for the previous line to complete before it can be executed. In other words, the program will not move on to the next line of code until the current line of code has been completed. Here's an example of synchronous code:

```javascript
console.log('Start');
console.log('Middle');
console.log('End');
```
Asynchronous code, on the other hand, allows multiple tasks to be executed simultaneously, without waiting for each task to complete before moving on to the next one. This is typically achieved through the use of callbacks, promises, or async/await syntax. In asynchronous code, the program will not wait for a task to complete before moving on to the next line of code.

Here's an example of asynchronous code using callbacks:

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Middle');
}, 2000);

console.log('End');

```
In the above example, the setTimeout() function is used to delay the execution of the callback function for 2 seconds. While the program is waiting for the callback to execute, it moves on to the next line of code, which outputs "End". Once the 2 seconds have passed, the callback function is executed, and "Middle" is output to the console.

Asynchronous code is often used when dealing with long-running operations, such as network requests or file I/O, as it allows the program to continue executing while waiting for the operation to complete, improving the overall performance and user experience

# REST (Representational State Transfer)

Here is a simple flow chart:

```mermaid
flowchart LR

A[CLIENT] -->|APIs| B[SERVER]

```





In simple terms REST is an architectural style for designing API's.The main concept of this achitectural style is all websites accross web would use same structure for building complex functionalities in them. 






### How exactly do we make our API RESTfull?

Two most important rules to make our APIs RESTfull are :

1. Using HTTP request *verbs*
2. Using specific pattern of Routes/End point URLs

1.HTTP Request Verbs :- 



Below is a table summarizing recommended return values of the primary HTTP methods in combination with the resource URIs:

<img width="1192" alt="Screenshot 2023-03-22 at 2 05 18 PM" src="https://user-images.githubusercontent.com/99420269/226845614-256542ff-0fa4-4353-909d-a402d052c744.png">


# GET



```javascript
app.get(route , function (req , res ){


// callback function
//Callbacks: A callback is a function that is passed as an argument to another function and is called by that function when it has completed its task. Callbacks are often used in asynchronous programming to handle the result of an operation when it becomes available.

});


```

example:-

```javascript

app.get("/articles", function (res, req) {
  Article.find(function (err, foundArticles) {
    // res.send(foundArticles);
    console.log(foundArticles);
  });
});

```

And behind the scenes what we are doing is reading from data base.

But there is a slight problem with the above snippet of code. You will get an error message when u go to "localhost:3000/articles" :-

```console
MongooseError: Model.find() no longer accepts a callback
    at Function.find (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/mongoose/lib/model.js:2041:11)
    at /Users/shahima/dev/web/APIs/RESTfull/wiki-API/app.js:26:11
    at Layer.handle [as handle_request] (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/layer.js:95:5)
    at /Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/index.js:346:12)
    at next (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/express/lib/router/index.js:280:10)
    at urlencodedParser (/Users/shahima/dev/web/APIs/RESTfull/wiki-API/node_modules/body-parser/lib/types/urlencoded.js:91:7)
```

The reason for this is ,the error message "MongooseError: Model.find() no longer accepts a callback" is that , there is a problem with the syntax of the find() method in Mongoose.

Prior to Mongoose version 6.0, the find() method could be called with a callback function as a parameter to handle the results. However, in Mongoose version 6.0 and later, the find() method no longer accepts a callback function. Hence alternatively, we can use the *Promise - object* and *Async/await -  syntax* :


### Async/await: 

async/await is a modern syntax for writing asynchronous code in JavaScript. It allows you to write asynchronous code that looks like synchronous code, making it easier to read and write. With async/await, you can use the await keyword to wait for the result of an asynchronous operation, and you can use try/catch blocks to handle errors.
An async function is a function that always returns a Promise. It allows you to write asynchronous code that looks like synchronous code. Inside an async function, you can use the await keyword to wait for a Promise to resolve before moving on to the next line of code.

```javascript 
const MyModel = require('./MyModel');

async function query() {
  try {
    const docs = await MyModel.find();
    // do something with the result
  } catch (err) {
    // handle the error
  }
}

query();


```

### Promises: 
A Promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future. It has a then() method that can be used to register callbacks to be called when the value is available. A promise can either be resolved (successfully) or rejected (with an error).



```javascript 

const MyModel = require('./MyModel');

MyModel.find()
  .then(docs => {
    // do something with the result
  })
  .catch(err => {
    // handle the error
  });


```
Applying these in our code:-

Async/await
```javascript
app.get("/articles", async function (req, res) {
  try {
    const foundArticles = await Article.find();
    res.send(foundArticles);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

```
In this code, the async keyword is used to mark the route handler function as an asynchronous function. Inside the route handler, the Article.find() method is called using the await keyword to wait for the Promise to resolve or reject before continuing with the next line of code. If the Promise resolves successfully, the foundArticles variable is assigned the resolved value and sent back as a response using the res.send() method. If the Promise is rejected, an error message is logged to the console and a 500 Internal Server Error response is sent back using the res.status().send() method.


Promise
```javascript
app.get("/articles", function (req, res) {
  Article.find()
    .then(foundArticles => {
      res.send(foundArticles);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});


```
In this code, the Article.find() method is called, and the then() method is used to handle the resolved Promise. If the Promise resolves successfully, the foundArticles variable is assigned the resolved value and sent back as a response using the res.send() method. If the Promise is rejected, an error message is logged to the console and a 500 Internal Server Error response is sent back using the res.status().send() method.

