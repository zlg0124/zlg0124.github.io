//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//document.querySelector('html').onclick = function() {
//    alert('别戳我，我怕疼。');
//}
//document.querySelector('html').addEventListener('click', () => {
//  alert('别戳我，我怕疼。');
//});
//let myImage = document.querySelector('img');

//myImage.onclick = function() {
//   let mySrc = myImage.getAttribute('src');
//    if(mySrc === 'images/柯基.jpg') {
//      myImage.setAttribute('src', 'images/金毛.jpeg');
//   } else {
//      myImage.setAttribute('src', 'images/柯基.jpg');
//    }
//}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}
//function setUserName() {
//  let myName = prompt('请输入你的名字。');
//  localStorage.setItem('name', myName);
//  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
//}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}
