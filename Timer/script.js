let interval = setInterval(reload, 1);

let date = {}

function reload(){
  date.D = document.querySelectorAll('span.time')[0].innerText;      
  date.M = document.querySelectorAll('span.time')[1].innerText;
  date.Y = document.querySelectorAll('span.time')[2].innerText;
  if(date.Y != date.Y){
    console.log(date.Y);
  }
}

/*
console.log(date.D);

date.D = Number(date.D);

console.log(date.D);

date.D = date.D - 10;

console.log('-10');

console.log('=');

console.log(date.D);
*/
