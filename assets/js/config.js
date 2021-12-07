local = localStorage;

document.getElementById('url').value = JSON.parse(localStorage.getItem('options')).url_server
document.getElementById('token').value = JSON.parse(localStorage.getItem('options')).token

function exitApp(){
    const remote = require('electron').remote
    let w = remote.getCurrentWindow()
    w.close()
}

function saveConfig(event){
    var overlay = document.getElementById('overlay');

    local.setItem("options",`{
        "url_server": "${document.getElementById('url').value}",
        "token": "${document.getElementById('token').value}"
}`)
    document.body.style.overflowY = "hidden"
    window.location.href = "../index.html"
}