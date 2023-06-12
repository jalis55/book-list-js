//Ui elements
let form=document.querySelector("#book-form")
let bookList=document.querySelector("#book-list")






//Book class

class Book{
    constructor(title,author,isbn){
        this.title=title
        this.author=author
        this.isbn=isbn
    }
}

//UI class
class UI{
    
    addToBookList(book){
        let bookList=document.querySelector("#book-list");
        let row=document.createElement("tr");

        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td><a class="delete" href="#">X</td>
        `
        bookList.appendChild(row)



    }
    
    clearField(title,author,isbn){
    document.querySelector("#title").value="";
    document.querySelector("#author").value="";
    document.querySelector("#isbn").value="";
    }
    showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);

    }
    deleteFromBook(target) {
    if (target.hasAttribute('href')) {
        target.parentElement.parentElement.remove();
        // Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
        this.showAlert('Book Removed!', 'success');
    }
}
}
//add book
form.addEventListener('submit',newbook)

//delete book
bookList.addEventListener('click',removeBook)
function newbook(e){
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let isbn=document.querySelector("#isbn").value;

    let book=new Book(title,author,isbn);
    let ui=new UI();
    if (title === '' || author === '' || isbn === '') {

        ui.showAlert("Please fill all the fields!", "error");
    }
    else{
        
    ui.addToBookList(book)
    ui.clearField(title,author,isbn)
    ui.showAlert("Book Added!", "success");
    }


    e.preventDefault()
}

function removeBook(e){
    e.preventDefault()
    let ui=new UI();
    ui.deleteFromBook(e.target);
    e.preventDefault();
}