let res = {};

let first;

let interval = setInterval(reload, 1000);

let date = {
  'fdtto': `${document.querySelector('span#fdtto').innerText}`
}

function reload(){                   

  date.fdtto = Number(date.fdtto);
  console.log(`Отправная точка: ${date.fdtto}`);

  date.realtime = document.querySelectorAll('span.time')[0].innerText;
  date.realtime = Number(date.realtime);
  console.log(`реальное время: ${date.realtime}`);

  res.years = `${Math.trunc((date.realtime - date.fdtto) / 60 / 60 / 24 / 30 / 12)}`;
  res.month = `${Math.trunc((date.realtime - date.fdtto) / 60 / 60 / 24 / 30)}`;
  res.weeks = `${Math.trunc((date.realtime - date.fdtto) / 60 / 60 / 24 / 7)}`;
  res.days = `${Math.trunc((date.realtime - date.fdtto) / 60 / 60 / 24)}`;
  res.hours = `${Math.trunc((date.realtime - date.fdtto) / 60 / 60)}`;
  res.minutes = `${Math.trunc((date.realtime - date.fdtto) / 60)}`;
  res.seconds = `${Math.trunc(date.realtime - date.fdtto)}`;

  first = document.querySelector('span#first');
  first.innerText = `\n\nМы вмефти: \n${res.years} год/года/лет\n${res.month} месяц/месяца/месяцев\n${res.weeks} неделю/недели/недель\n${res.days} день/дня/дней\n${res.hours} час/часа/часов\n${res.minutes} минуту/минуты/минут\n${res.seconds} секунду/секунды/секунд`;

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
