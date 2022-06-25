Скрипт_1

```javascript
﻿Ai7Mg6P='';
for (i7M1bQz=0;i7M1bQz<document.images.length;i7M1bQz++)
{
Ai7Mg6P+='<a><img src='+document.images[i7M1bQz].src+' width="250px"> <a href='+document.images[i7M1bQz].src+'></a><br>'
};
if (Ai7Mg6P!='')
{
document.write('<body>'+Ai7Mg6P+'</body>');
void(document.close())
}
else
{
alert('Sorry! I found no images on this page.')
}
```
Скрипт_2

```javascript
javascript:=Array.from(document.images).sort(function(a,b){return(b.width*b.height-a.width*a.height)});if(a.length){location=a[0].src}else{window.alert('Could not find image');}
```

Скрипт_3

```javascript
javascript:(function(){function I(u){var t=u.split('.'),e=t[t.length-1].toLowerCase();return {gif:1,jpg:1,jpeg:1,png:1,mng:1}[e]}function hE(s){return s.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}var q,h,i,z=open().document;z.write('<p>Images linked to by '+hE(location.href)+':</p><hr>');for(i=0;q=document.links[i];++i){h=q.href;if(h&&I(h))z.write('<p>'+q.innerHTML+' ('+hE(h)+')<br><img src="'+hE(h)+'">');}z.close();})()
```

Скрипт_4

```javascript
javascript:;(function() {var images = [].slice.call(document.querySelectorAll('img'));try {images.forEach(function(img){downloadImage(img)})} catch (e) {alert('Download failed.');console.log('Download failed.', e)}function downloadImage(img) {var link = document.createElement('a');link.setAttribute('href', img.src);link.setAttribute('download', '');link.click()}}).call(window);
```
