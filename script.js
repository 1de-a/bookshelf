
let myLibrary = [];
let emptyText = "";
let cleaner = document.createTextNode("");
let clean;

function Book() {

   this.title = title;
   this.author = author;
   this.info = function(){
      return (title + " by "+ author + ", published by "+ publisher + ", "+ isRead);
      
   }

}
 
 Book.prototype.publisher = this.publisher;
 Book.prototype.isRead = this.isRead;

function addNewBook() {
   title = document.getElementById("inputTitle").value;
   document.getElementById("inputTitle").value = emptyText;
   author = document.getElementById("inputAuthor").value;
   document.getElementById("inputAuthor").value = emptyText;
   publisher = document.getElementById("inputPublisher").value;
   document.getElementById("inputPublisher").value = emptyText;
   


   myLibrary.push({title,author,publisher})   
}

addNewBook.prototype = Object.create(Book.prototype);

