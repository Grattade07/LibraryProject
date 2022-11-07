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
function Book() {
  
}
// function
function addBookToLibrary() {
const bookDetail = prompt("What is your name?") //Gets info from user

myLibrary.push(bookDetail) //pushes info into array
}
