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

let myLibrary = ["Hobbit", "Harry Potter"];

// Constructor
function Book() {
  
}
// function
function addBookToLibrary() {
const bookDetail = prompt("What book do you want to add?") //Gets info from user
console.log(typeof(bookDetail))
myLibrary.push(bookDetail) //pushes info into array
}

function bookInfo() { //Loops through array then places into p element
    const bookList = document.querySelector("#book");
    for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
        book.className = "book"
        book.textContent = myLibrary[i];
        console.log(book.textContent);

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