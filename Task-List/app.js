// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listners
loadEventListners();

//Load all event listeners
function loadEventListners(){
    document.addEventListener('DOMContentLoaded',getTasks)
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',deleteTask);
    clearBtn.addEventListener('click',clearTask);
    filter.addEventListener('keyup',filterTask);
}

function getTasks(){
    var tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks =JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task)=>{
    //Create Li element 
    const li = document.createElement('li');
    //Add Class 
    li.className = 'collection-name'
    //Create TextNode and append
    li.appendChild(document.createTextNode(task));
    //Create new link element 
    const link = document.createElement('a');

    //Add Class 
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link)
    //Append li to ul
    taskList.appendChild(li);

    })
}
//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Please provide a data');
        return null;
    }
    //Create Li element 
    const li = document.createElement('li');
    //Add Class 
    li.className = 'collection-name'
    
    //Create TextNode and append
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link element 
    const link = document.createElement('a');

    //Add Class 
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link to li
    li.appendChild(link)
    //Append li to ul
    taskList.appendChild(li);
    //Store in  local Storage
    storeTaskInLocalStorage(taskInput.value);

    //Clear Input
    taskInput.value='';

    
    e.preventDefault();
}

//Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks =JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}
//Remove Task
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        taskList.removeChild(e.target.parentElement.parentElement);

        //Remove from Ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
}

function removeTaskFromLocalStorage(taskItem){
    var tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }
    else{
        tasks =JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task,index)=>{
        if(taskItem.textContent=== task){
            tasks.splice(index,1)
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
//Clear
function clearTask(){
    taskList.innerHTML='';
    clearTaskFromLocalStorage();
}

//Clear TASK

function clearTaskFromLocalStorage(){
    localStorage.clear()
}
function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-name').forEach((task)=>{
        const item = task.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }
        else{
            task.style.display='none';
        }
    }) ;


}

