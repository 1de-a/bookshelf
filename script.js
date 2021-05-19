
let myLibrary = [];
let emptyText = "";
let i;
let p;
let idNamer;
let para;
let main;
let newDiv;

document.getElementById("info").innerText = "In your bookshelf you have "+myLibrary.length +" books.";

function total() {
document.getElementById("info").innerText = "In your bookshelf you have "+myLibrary.length +" books.";
};

function Book() {

   this.title = title;
   this.author = author;
   this.info = function(){
      return (title + " by "+ author + ", published by "+ publisher + ", "+ isRead);
      
   }

}
 
 Book.prototype.publisher = this.publisher;
 Book.prototype.isRead = this.isRead;



function bookForm() {
   document.getElementById("formContainer").style.visibility = "visible";                                   // Assures that the new window gets focus 
}

function addNewBook() {

   title = document.getElementById("inputTitle").value;
   document.getElementById("inputTitle").value = emptyText;
   author = document.getElementById("inputAuthor").value;
   document.getElementById("inputAuthor").value = emptyText;
   publisher = document.getElementById("inputPublisher").value;
   document.getElementById("inputPublisher").value = emptyText;
   isRead = document.getElementById("inputRead").checked;
   document.getElementById("inputRead").checked = false;

   myLibrary.push({title,author,publisher,isRead});

   document.getElementById("formContainer").style.visibility = "hidden";
   
   organize();
   total();


}



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


   // i = (myLibrary.length-1);

   // idNamer = "book"+(Math.floor(Math.random() * (6) + 1));
   // newDiv = document.createElement("div");
   // newDiv.id = idNamer;
   // newDiv.className = "book";
   // document.getElementById("main").appendChild(newDiv);

   // idNamer = "title"+(1+i);
   // para = document.createElement("p");
   // para.className = "title";
   // para.id = idNamer;
   // para.innerText = myLibrary[myLibrary.length-1].title;
   // newDiv.appendChild(para);

   // idNamer = "author"+(1+i);
   // para = document.createElement("p");
   // para.className = "author";
   // para.id = idNamer;
   // para.innerText = myLibrary[myLibrary.length-1].author;
   // newDiv.appendChild(para);

   // idNamer = "publisher"+(1+i);
   // para = document.createElement("p");
   // para.className = "publisher";
   // para.id = idNamer;
   // para.innerText = myLibrary[myLibrary.length-1].publisher;
   // newDiv.appendChild(para);

   // idNamer = "read"+(1+i);
   // para = document.createElement("p");
   // para.className = "read";
   // para.id = idNamer;
   // para.innerText = "Not read yet";
   // newDiv.appendChild(para);

   // idNamer = "markButton";
   // para = document.createElement("button");
   // para.id = idNamer;
   // para.innerText = "Mark as Read";
   // newDiv.appendChild(para);

   // idNamer = "rmvButton";
   // para = document.createElement("button");
   // para.id = idNamer;
   // para.innerText = "Remove";
   // newDiv.appendChild(para);

function removeBook(a) {

   myLibrary.splice(a,1);
   organize();
}


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

organize()

}

