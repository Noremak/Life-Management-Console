var textEntry = "";
var listUi = "ls ui";
var listNui = "ls nui";

// command interpret
function comInt() {
    textEntry = document.getElementById('console').value;
    if (textEntry.includes(listUi)) {
        var uiText = textEntry.slice(listUi.length + 1);
        document.getElementById('ui').innerHTML = "<li>" + uiText + "</li>";
    } else if (textEntry.includes(listNui)) {
        var nuiText = textEntry.slice(listUi.length + 1);
        document.getElementById('nui').innerHTML = "<li>" + nuiText + "</li>";
    }
}



// function submitCommand() {
//     textEntry = document.getElementById('console').value;
//     if (textEntry == 'lists') {
//         document.getElementById('main').innerHTML = "<h3>Lists</h3><ul><li>Books to read</li><li>Movies to watch</li></ul>";
//     } else if (textEntry == 'home') {
//         document.getElementById('main').innerHTML = 'home';
//     } else if (textEntry == 'url') {
//         window.location.href = 'file:///Users/kameronkeller/google_drive/GitHub/Life-Management-Console/dashboard.html';
//         document.getElementById('console').value = "";
//     } else if (textEntry.startsWith("listUi")) {
//         uiText = textEntry.slice(listUi.length);
//         document.getElementById('ui').innerHTML = "<li>" + listText + "</li>";
//     }
    // document.getElementById("main").innerHTML = textEntry + "<br>";    
// };

 //pressing 'enter' runs code
 addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        comInt();
        document.getElementById('console').value = "";
    }
});



