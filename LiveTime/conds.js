if ( hours >= 0 && hours <= 5 ){
  document.body.style.backgroundColor="#000000";
  document.body.style.color="#ffffff";
  document.write( '<meta name="theme-color" content="#000000">' );
  document.write('А это значит, пора ложиться спать<br>Спокойной ночи)<br>');
  document.write( '<img style="top:' + ( width - 20 ) + 'px;" src="https://e.unicode-table.com/orig/b5/e99d01daf80e47c6e348d5b67db338.png"></img>' );
}
if ( hours >=6 && hours <= 23 ){
  document.body.style.backgroundColor="#ffffff";
  document.body.style.color="#000000";
  document.write( '<meta name="theme-color" content="#ffffff">' );
  document.write('А это значит, пора вставать<br>Доброе утречко)<br>');
  document.write( '<img class="image" src="https://e.unicode-table.com/orig/e7/21f690603272f50f0f26f27b2accd1.png"></img>' );
}
