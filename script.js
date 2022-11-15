//Variables
const book = document.createElement("div");
const title = document.createElement("div")
const author = document.createElement("div")
const pages = document.createElement("div")
const read = document.createElement("div")
const remove = document.createElement("button")


let myLibrary = [ {author:'you', title: 'me', pages :'2', read: 'false'}, {author:'you', title: 'me', pages :'2', read: 'true'}, {author:'you', title: 'me', pages :'2', read: 'false'}];

// Constructor
function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}
// function
function addBookToLibrary() {
const bookTitle = document.getElementById("title").value //Gets title
const bookAuthor = document.getElementById("author").value  // Gets author
const bookPages = document.getElementById("pages").value  //Gets pages
const bookRead = document.getElementById("read").checked.toString() //Is book read

const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
myLibrary.push(newBook) //pushes info into array
}

const bookList = document.querySelector("#book");

function bookInfo() { //Loops through array then places into p element 
    myLibrary.forEach((Book) => {

    const book = document.createElement("div");
    const title = document.createElement("div")
    const author = document.createElement("div")
    const pages = document.createElement("div")
    const read = document.createElement("div")
    const remove = document.createElement("button")
    
    title.textContent = Book.title
    author.textContent  = Book.author
    pages.textContent  = Book.pages
    read.textContent  = ""
    remove.textContent = "Remove"

    remove.classList.add("removeBtn")

    book.setAttribute("indexNumber", myLibrary.indexOf(Book))
    let index = parseInt(book.getAttribute("indexNumber"))

    function isRead() { //Checks if book is read
        if (Book.read == "true") {
            read.textContent = "Read"
            read.classList.add("read")
        } else {
            read.textContent = "Not Read"
            read.classList.add("notRead")
        }
    }

    isRead()

    book.classList.add("book");

    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(read)
    book.appendChild(remove)

    remove.addEventListener("click", () => { //removes book from Library array
        for (i = 0; i < myLibrary.length; i++) {
            if (index === i) {
                myLibrary.splice(i, 1)
                bookList.innerHTML = ""
                bookInfo()
            }
        }
    })

    bookList.appendChild(book);
})
};

bookInfo()

//Brings Form up when button is clicked
let form = document.getElementById("formWindow");

let btn = document.getElementById("newBook");

let span = document.getElementsByClassName("close")[0];

//Displays form
btn.onclick = function() {
    form.style.display = "block"
}

//Closes form window
span.onclick = function() {
    form.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none"
    }
}

//Prevent button from submitting form to server

let subBtn = document.getElementById("submit");

subBtn.addEventListener("click", function(event) {
    event.preventDefault()
})

//Take form info then add new book

subBtn.addEventListener("click", () => {
    addBookToLibrary();
    bookList.innerHTML = "";
    bookInfo();
}) 

//To remove book from array
