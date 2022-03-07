document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getApiData);

//Get Data
function getText(){
    fetch('test.txt').then((res)=>{
        return res.text()
    })
    .then((data)=>{
    document.querySelector('.output').innerHTML=data})
    .catch(console.log)
}

//Get JSON
function getJson(){
    fetch('post.json').then((res)=>{
        return res.json()
    })
    .then((data)=>{console.log(data);
    let output = '';
    data.forEach((val)=>{
        output+=`<li>${val.title}</li>`
    })
    document.querySelector('.output').innerHTML=output;
    })
    .catch(console.log)
}

function getApiData(){
    fetch('https://api.githu.com/users').then((res)=>{
        return res.json()
    }).then(res=>{
        if(!res.ok){
            throw new Error(res.error)
        }
    })
    .then((data)=>{console.log(data);
    let output = '';
    data.forEach((val)=>{
        output+=`<li>${val.login}</li>`
    })
    document.querySelector('.output').innerHTML=output;
    })
    .catch(console.log)
}