function del(){
  let a = document.querySelector('a.time');
  a.innerHTML = '';
}

function add(){
      date = new Date();
      hours = date.getHours();
      min = date.getMinutes();
      sec = date.getSeconds();
      if ( hours >= 0 && hours <= 9){
        hours = '0' + hours;
      }
      if ( min >= 0 && min <= 9){
        min = '0' + min;
      }
      if ( sec >= 0 && sec <= 9){
        sec = '0' + sec;
      }
      a = document.querySelector('a.time');
      a.innerHTML = hours + ':' + min + ':' + sec;
}

function go(){
  del()
  add()
  setTimeout( () => go(), 1);
}
