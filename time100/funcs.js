function info(){
  document.body.innerHTML = '';
  back = document.createElement('button');
  back.className = 'back';
  back.innerHTML = 'назад';
  back.setAttribute('onclick', 'nazad()');
  document.body.append(back);
}

function nazad(){
// document.location.reload();
  let text = document.getElementById('text');
  text.innerHTML = '';
//  document.write(ns);
  vrem = document.createElement('a');
  vrem.className = 'time';
  vrem.setAttribute('data-tz', 'Europe/Moscow');
  vrem.setAttribute('data-format', '%s');
  vrem.innerHTML = 'время';
  document.body.append(vrem);
  
}
