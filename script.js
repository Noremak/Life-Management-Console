
function submitCommand() {
    var textEntry = document.getElementById('console').value;
    if (textEntry == 'lists')
        document.getElementById('main').innerHTML = "<h3>Lists</h3><ul><li>Books to read</li><li>Movies to watch</li></ul>";
    else if (textEntry == 'home')
        document.getElementById('main').innerHTML = 'home';
    // document.getElementById("main").innerHTML = textEntry + "<br>";    
};

 //pressing 'enter' runs code
 addEventListener("keydown", function (event) {
    if (event.keyCode == 13)
        submitCommand();
});
