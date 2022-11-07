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