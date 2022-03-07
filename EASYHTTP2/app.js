const http = new EasyHttp;

//Get Users
// const users=http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));


//user Data

const data = {
    name:'John DOE',
    username:'johnDoe',
    email:'jdoe@gmail.com'
}

//Create Post
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//uPDATE pOST
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/1',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));
