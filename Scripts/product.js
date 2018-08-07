var qString = window.location.href;
// console.log("href:", qString);

var a = qString.split("?")[1];
// console.log("parm:",a);

var b = a.split("=")[1];
// console.log("value:", b);

loadPage(b);

function loadPage(cat){
    document.title = cat + " | Top Grade Seafood";

    var num = 0;

    var row = [];
    var newSFS = {
        rows: []
    }
    
    seaFoodStore.forEach(el => {
    
        num++;
        var rem = num % 3;

        if (el.category == cat){
    
            row.push(el);
    
            if (rem == 0 || seaFoodStore.length == num){
                newSFS.rows.push({row: row});
                row = [];
            }
        }
    });
    
    var mainDiv = document.getElementById("mainDiv");
    var template = mainDiv.innerHTML;
    mainDiv.innerHTML = Mustache.render(template, newSFS)

};