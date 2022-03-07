class UI{
    constructor(){
        this.profile = document.getElementById('profile') 
    }

    showProfile(user){
        const login = user.login;
         this.profile.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="http://www.github.com/${login}" class="btn btn-block btn-primary mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-primary">Public Gist: ${user.public_gists}</span>
                        <span class="badge bg-primary">Followers: ${user.followers}</span>
                        <span class="badge bg-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    //Show user Repos

    showRepos(repos){
        let output = '';
        repos.forEach((repo)=>{
            output+=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge bg-primary">Watchers: ${repo.watcher_count}</span>
                        <span class="badge bg-primary">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
                    
            
            </div>
            `
        })
      document.getElementById('repos').innerHTML=output

    }



    //showAlert Message
    showAlert(message,className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search);

        //Timeout after 3 sec
        setTimeout(()=>{
            this.clearAlert()
        },3000)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    //Clear Profile
    clearProfile(){
        this.profile.innerHTML='';
    }
}
