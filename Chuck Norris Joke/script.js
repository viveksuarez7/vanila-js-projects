document.querySelector('.get-jokes').addEventListener('click',getJokes);
let jokeVal=document.querySelector('.jokes')

function getJokes(e){
    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`https://api.icndb.com/jokes/random/${number}`,true);
    
    
    xhr.onload = function(){
        if(this.status===200){
            const data = JSON.parse(this.responseText);
            console.log(data)
            let output='';           
            if(data.type==='success'){
            data.value.forEach((jokeList)=>{
            output+=`<li>${jokeList.joke}</li>`  
            })
            }
            else{
                output+=`<li>Looks Like Something Went Wrong</li>`
            }

            jokeVal.innerHTML=output
        }
    }
    xhr.send()
    e.preventDefault();
}