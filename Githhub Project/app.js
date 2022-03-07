//Search Input
const searchUser = document.getElementById('searchUser');

//Intializing github class
const github = new Github

//Intializing UI class
const ui = new UI
//Search input event Listner
searchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data=> {
            if(data.profile.message==='Not Found'){
                // User not found alert
                ui.showAlert('User not Found','alert alert-danger');
            }
            else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos)
                
            }})
    }
    else {
        //Clear Profile
        ui.clearProfile()
    }
})