let http = new EasyHttp;

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',(err,response)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(response)
//     }
    
// })

//Create Data

// const data ={
//     title:'Custom pOST',
//     body:'Thios is a custom post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//        if(err){
//         console.log(err)
//     }
//     else{
//         console.log(response)
//     }
// })

//Modify Data
// const data ={
//     title:'Custom pOST',
//     body:'Thios is a custom post'
// };

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//        if(err){
//         console.log(err)
//     }
//     else{
//         console.log(response)
//     }
// })

//Delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1',(err,response)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(response)
    }
    
})
