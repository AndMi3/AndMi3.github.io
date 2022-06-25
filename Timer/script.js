let D = document.querySelectorAll('span.time')[0].innerText;


let date = {

'D': `${D}`

}

console.log(date.D);

date.D = Number(date.D);

date.D = date.D - 10;

console.log(date.D);
