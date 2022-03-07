// Book Constructor
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

// UI Constructor
function UI(){}
//Event Listners

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //Create tr element
    const row = document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class="delete">X</a></td>
    `;
    list.appendChild(row);
}

UI.prototype.clearFields=()=>{
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

UI.prototype.showAlert = function(message,className){
    //Create div
    const div = document.createElement('div');
    //Add Classes
    div.className=`alert ${className}`
    //Add Text node
    div.appendChild(document.createTextNode(message))
    //Get parent 
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');
     
    //Insert Before
    container.insertBefore(div,form);

    //TimeOut after 3 sec
    setTimeout(()=>{
        document.querySelector('.alert').remove()
    },3000)
}
UI.prototype.deleteBook=(target)=>{
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}

document.getElementById('book-form').addEventListener('submit',(e)=>{
    //Get form Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
     
    //Instantiate book
    const book = new Book(title,author,isbn);
    //Instantiate Ui
    const ui = new UI();

    if(title===''||author===''||isbn===''){
        ui.showAlert('Please enter the input values','error')
    }
    else{
        ui.addBookToList(book);
        //Show sucess 
        ui.showAlert('Book Added','success');
        ui.clearFields();
    }
    e.preventDefault();
})

//Event Listner for delete 
document.getElementById('book-list').addEventListener('click',(e)=>{
    const ui = new UI
    ui.deleteBook(e.target)//
    //Showalert
    ui.showAlert('Book Removed','success')
    e.preventDefault()
})