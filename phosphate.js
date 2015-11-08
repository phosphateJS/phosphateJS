javascript:
p = document.getElementById("player");
i = document.createElement('iframe');
i.src = 'https://phosphatejs.github.io/phosphorus/embed.html?id=' + data.project.id;
i.style.width = p.offsetWidth + "px";
i.style.height = p.offsetHeight + 'px';
p.innerHTML = '';
p.appendChild(i);



