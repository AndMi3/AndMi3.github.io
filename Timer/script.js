let interval = setInterval(reload, 1000);

let date = {
  'fdtto': `${document.querySelector('span#fdtto').innerText}`
}

function reload(){
  data.realtime = document.querySelector('span.time')[0].innerText;
  console.log(date.realtime);                         
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
