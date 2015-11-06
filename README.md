# phosphateJS
A bookmarklet that will help scratch.
Just add this text to a bookmark and go!


javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bjavascript%3A%20(function%20()%20%7Bvar%20jsCode%20%3D%20document.createElement('script')%3BjsCode.setAttribute('src'%2C%20'https%3A%2F%2Fcdn.jsdelivr.net%2Fphosphatejs%2FBasalisk-0.3%2Fphosphate.js')%3Bdocument.body.appendChild(jsCode)%3B%7D())%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
