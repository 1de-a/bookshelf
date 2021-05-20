
let myLibrary = [];
let i;
let idNamer;
let para;
let newDiv;

//look for previous storage saves and load them

const myArrayFromLocalStorage = localStorage.getItem('mem');
if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
myLibrary = JSON.parse(myArrayFromLocalStorage);
organize()
}

// use the total function to write the total book amount

total();

// function to calculate total book amount and puts it in a text

function total() {
document.getElementById("info").innerText = "In your bookshelf you have "+myLibrary.length +" books.";
};

//constractor function

function Book() {

   this.title = title;
   this.author = author;
   this.info = function(){
      return (title + " by "+ author + ", published by "+ publisher + ", "+ isRead);
      
   }

}
 
//adds new data to constractor

 Book.prototype.publisher = this.publisher;
 Book.prototype.isRead = this.isRead;

// makes the book adding form visible

function bookForm() {
   document.getElementById("formContainer").style.visibility = "visible";                             
}

// function to take form input and store it in myLibrary array
// also cleans and hides the form. Then organizes the shelf, uses the total
// and store functions to keep and show new data

function addNewBook() {

   title = document.getElementById("inputTitle").value;
   document.getElementById("inputTitle").value = "";
   author = document.getElementById("inputAuthor").value;
   document.getElementById("inputAuthor").value = "";
   publisher = document.getElementById("inputPublisher").value;
   document.getElementById("inputPublisher").value = "";
   isRead = document.getElementById("inputRead").checked;
   document.getElementById("inputRead").checked = false;

   myLibrary.push({title,author,publisher,isRead});

   document.getElementById("formContainer").style.visibility = "hidden";
   
   organize();
   total();
   store();


}

// organize function takes myLibrary array and puts the info into the newly
// created shelves 

function organize() {   

   document.getElementById("main").innerHTML = "" 

      for(i=0;i<myLibrary.length;i++) {

   

   idNamer = "book"+(Math.floor(Math.random() * (6) + 1));
   newDiv = document.createElement("div");
   newDiv.id = idNamer;
   newDiv.className = "book";
   document.getElementById("main").appendChild(newDiv);

   idNamer = "title"+(1+i);
   para = document.createElement("p");
   para.className = "title";
   para.id = idNamer;
   para.innerText = myLibrary[i].title;
   newDiv.appendChild(para);

   idNamer = "author"+(1+i);
   para = document.createElement("p");
   para.className = "author";
   para.id = idNamer;
   para.innerText = myLibrary[i].author;
   newDiv.appendChild(para);

   idNamer = "publisher"+(1+i);
   para = document.createElement("p");
   para.className = "publisher";
   para.id = idNamer;
   para.innerText = myLibrary[i].publisher;
   newDiv.appendChild(para);

   idNamer = "read"+(1+i);
   para = document.createElement("p");
   para.className = "read";
   para.id = idNamer;
   if (myLibrary[i].isRead == true) { (para.innerText = "Read") }
   else  { (para.innerText = "Not read yet")};
   
   newDiv.appendChild(para);

   idNamer = i;
   para = document.createElement("button");
   para.className = "markButton"
   para.id = idNamer;
   para.setAttribute("onclick","makeRead(this.id)");
   if (myLibrary[i].isRead == true) { (para.innerText = "Mark as Not Read") }
   else  { (para.innerText = "Mark as Read")};
   newDiv.appendChild(para);

   idNamer = i;
   para = document.createElement("button");
   para.id = idNamer;
   para.className = "rmvButton";
   para.setAttribute("onclick","removeBook(this.id)");
   para.innerText = "Remove";
   newDiv.appendChild(para);



      } }

// removes books from myLibrary

function removeBook(a) {

   myLibrary.splice(a,1);
   organize();
   store();
   total();
}


// marks books as read or unmarks

function makeRead(a) {


  if (myLibrary[a].isRead == true) {
     myLibrary[a].isRead = false;
   //   idNamer = "markButton"+(a+1);
   //   document.getElementById(idNamer).innerText = "Mark as Read";
   

}
else if (myLibrary[a].isRead == false) {
   myLibrary[a].isRead = true;
   // idNamer = "markButton"+(a+1);
   // document.getElementById(idNamer).innerText = "Mark as Not Read";
 

}

organize();
store();

}

// function to store the data in local storage

function store() {

   
  localStorage.setItem('mem', JSON.stringify(myLibrary));
   
}