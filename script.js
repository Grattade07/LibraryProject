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
const bookRead = toString(document.getElementById("read").checked) //Is book read

console.log(bookRead)

const book = new Book(bookTitle, bookAuthor, bookPages, bookRead)
myLibrary.push(book) //pushes info into array
}

const bookList = document.querySelector("#book");

function bookInfo() { //Loops through array then places into p element 
    for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    const bookTitle = document.createElement("div")
    const bookAuthor = document.createElement("div")
    const bookPages = document.createElement("div")
    const bookRead = document.createElement("div")

    bookTitle.textContent = Book.title
    bookAuthor.textContent  = Book.author
    bookPages.textContent  = Book.pages
    bookRead.textContent  = Book.read

    book.appendChild(bookTitle)
    book.appendChild(bookAuthor)
    book.appendChild(bookPages)
    book.appendChild(bookRead)

    bookList.appendChild(book);    
}
};

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
    console.log(myLibrary);
    bookList.innerHTML = "";
    bookInfo();
}) 