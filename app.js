console.log("JavaScript is alive");


var greetingNode = document.getElementById("greeting");
greetingNode.innerHTML = "Hi Planet Earth"

var listItems =document.getElementsByTagName('li');




for(var i=0; i < listItems.length; i++)
  {
  listItems[i].style.color = "yellow";
}

for (var i = 0; i < array.length; i++) {
  listItems[i]
}


// var buttonNode = document.getElementsByTagName('input')[0];
//
// buttonNode.onclick = function(){
//   var newElement = document.createElement('li');
//   newElement.innerHTML = "YO";
//   document.querySelector('#essentials > ul').appendChild(newElement);
// }






// #### EVENT LISTENER

// var greetingNode = document.getElementById("greeting");
// greetingNode.addEventListener('click', function() {
//   alert('hello the first time');
// })
// greetingNode.addEventListener('click',function() {
//   alert('hello the second time');
// })







// var listItems =document.getElementsByTagName('li');   (already above)

// var numClicks = 0;
//
// for (var i=0; i < listItems; i++ ){
//   listItems[i].addEventListener('click', function(){
//     this.style.textDecoration = 'line-through';
//   });
//
//   listItems[i].addEventListener('click', function(){
//     numClicks++;
//     alert(numClicks);
//   });
// }





// window.onload = doStuff;
// #leave off the () here because it would call it right there but you want javascript to call it AFTER the html has finished loading all the way
