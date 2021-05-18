
let myLibrary = [];
let emptyText = "";
let i;
let classNamer;
let para;
let output;

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
   


   myLibrary.push({title,author,publisher})  ;
   shelf(); 
}

addNewBook.prototype = Object.create(Book.prototype);

// add books to shelves

function shelf(){
   
   i = (myLibrary.length-1)%6;
   console.log(i);
   console.log(myLibrary[i].title);
   idNamer = "title"+(1+i);
   
   document.getElementById(idNamer).innerText = myLibrary[myLibrary.length-1].title;

   idNamer = "author"+(1+i);
   document.getElementById(idNamer).innerText = myLibrary[myLibrary.length-1].author;

   idNamer = "publisher"+(1+i);
   document.getElementById(idNamer).innerText = myLibrary[myLibrary.length-1].publisher;

   idNamer = "book"+(1+i);
   document.getElementById(idNamer).style.visibility = "visible";
  
   
}

