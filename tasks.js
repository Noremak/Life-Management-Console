var textEntry = "";
var listUi = "new ui";
var listNui = "ls nui";

$("#console").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        const taskInput = $('#console').val();
        if (taskInput.includes(listUi)) {
            var uiText = textEntry.slice(listUi.length + 1);
            document.getElementById('quad-1').innerHTML = "<li>" + uiText + "</li>";
        }
    }
});


