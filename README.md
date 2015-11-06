# phosphateJS
A chrome extension that will revolutionize scratch.
Just add this text to a bookmark and go!


javascript: (function () { 
  	var jsCode = document.createElement('script');
  	var jQuery = document.createElement('script');  
    jsCode.setAttribute('src', 'cdn.jsdelivr.net/phosphatejs/Basalisk-0.3/phosphate.js');
    jQuery.setAttribute('src', 'https://code.jquery.com/jquery-1.11.3.min.js');                  
  document.body.appendChild(jsCode);
 }());
