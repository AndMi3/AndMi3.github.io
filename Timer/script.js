let first = document.querySelector('span#first').innerText;

let interval = setInterval(reload, 5000);

let date = {
  'fdtto': `${document.querySelector('span#fdtto').innerText}`
}

function reload(){
  date.realtime = document.querySelectorAll('span.time')[0].innerText;
  
  // console.log(date.realtime);                         

  date.fdtto = Number(date.fdtto);

  console.log(`Отправная точка: ${date.fdtto}`);

  date.realtime = Number(date.realtime);

  console.log(`реальное время: ${date.realtime}`);

  first = Number(first);

  first = date.realtime - date.fdtto;

  console.log(`результат: ${first}`);

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
