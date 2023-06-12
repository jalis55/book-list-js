//Ui elements
let form=document.querySelector("#book-form")





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
        

    }
}

form.addEventListener('submit',newbook)

function newbook(e){
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let isbn=document.querySelector("#isbn").value;

    let book=new Book(title,author,isbn);
    let ui=new UI();
    ui.addToBookList(book)

    e.preventDefault()
}