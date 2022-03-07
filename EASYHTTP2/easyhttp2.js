class EasyHttp{
    // Make an HTTP GET Request
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>rejct(err))

        }) 
    }

    //Make http post
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
        }) 
    }
    //Put 
     put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
        }) 
    }

    //Delete
     delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
        .then(res=>res.json())
        .then(()=>resolve('Resource deleted'))
        .catch(err=>reject(err))

        }) 
    }
}