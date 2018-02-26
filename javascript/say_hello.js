function over(){
  document.write("Mouse over");
}

function out(){
  document.write("Mouse Out");
}

function Redirect(){
  window.location = "http://google.com";
}

// chuyen trang
// document.write("Ban se bi chuyen trang trong 10s tiep");
// setTimeout('Redirect()', 10000);

// lua chon trinh duyet
// var browserName = navigator.appName;
// if(browserName == "Netscape"){
//   window.location = "http://google.com"
// }
// else if(browserName == "Microsoft Internet Explorer"){
//   window.location = "http://yahoo.com"
// }else{
//   window.location = "http://facebook.com"
// }

/* hop thoai */
// function Warn(){
//   alert("This is a warning message!");
//   document.write("This is a warning message!");
// }

// function getConfirmation(){
//   var retVal = confirm("Do you want continue ?");
//   if(retVal == true){
//     document.write("User want to continue!");
//     return true;
//   }else{
//     document.write("User does not want to continue!");
//     return false;
//   }
// }

// function getValue(){
//   var retVal = prompt("Enter your name: ", "your name here");
//   // prompt nhan vao hai tham so, label hien thi + chuoi mac dinh
//   document.write("You have entered: "+ retVal);
// }

/* object */
// var book = new Object();
// book.subject = "Perl";
// book.author = "Lai Van Hai";
// document.write("Book name is: "+book.subject+ "<br>");
// document.write("Book author is: "+ book.author + "<br>")

// function addPrice(amount){
//   with(this){
//     price = amount;
//   }
// }
// function book(title, author){
//   this.title = title;
//   this.author = author;
//   this.price = 0;
//   this.addPrice = addPrice;
// }
// var myBook = new book("Perl", "Lai Van Hai");
// myBook.addPrice(100);
// document.write("Book name is: "+myBook.subject+ "<br>");
// document.write("Book author is: "+ myBook.author + "<br>");
// document.write("Book price is: "+ myBook.price + "<br>");

/* String */
// var val = new String("Lai Van Hai");
// document.write(val.fontsize(50));

/* Array */
// var fruits = new Array("apple", "orange", "mango");
// var fruits2 = ["apple", "orange", "mango"];

/* DOM */
document.getElementById("main-content").innerHTML = "Hello";
