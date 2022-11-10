/*function Book(title , author, pages , read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function() {
      return title + " by " + author + ", " + pages + " pages " + ", " + read }
  } 
  
  const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
  
  theHobbit.info()
  
  console.log(theHobbit.info()) */

let myLibrary = [];

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
    myLibrary.forEach((Book, i) => {
    
    const book = document.createElement("div");
    const title = document.createElement("div")
    const author = document.createElement("div")
    const pages = document.createElement("div")
    const read = document.createElement("div")

    title.textContent = Book.title
    author.textContent  = Book.author
    pages.textContent  = Book.pages
    read.textContent  = Book.read

    book.classList.add("book");

    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(read)

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