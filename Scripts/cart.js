

var mainDiv = document.getElementById("mainDiv");
var template = mainDiv.innerHTML;
mainDiv.innerHTML = Mustache.render(template, data)

