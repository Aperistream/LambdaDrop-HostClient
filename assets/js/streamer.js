const request = require('request');
const { io } = require("socket.io-client");

local = localStorage;
options = JSON.parse(localStorage.getItem('options'))

const socket = io(`${options.url_server}`);

function update_party(infos) {
    document.getElementById('st1').innerHTML = infos.options.scores.team1
    document.getElementById('st2').innerHTML = infos.options.scores.team2
    document.getElementById('qs').innerHTML = `${infos.options.state.question}/9`
    document.getElementById('tm').innerHTML = infos.options.state.team
}

function update_config(c) {
    if (c.scores.show == true) {
        document.getElementById("s").disabled = true;
    } else if (c.state.status == 1) {
        document.getElementById("s").disabled = false;
    }
    if (c.state.status == 0) {
        document.getElementById('ps').className = 'psd';
        document.getElementById('ps').innerHTML = "Partie stoppée"
        document.getElementById("p").disabled = true; 
        document.getElementById("s").disabled = true; 
    }
    else if (c.state.status == 1) {
        document.getElementById('ps').className = 'pse';
        document.getElementById('ps').innerHTML = "Partie en cours"
        document.getElementById("p").disabled = false;
    }
    else {
        document.getElementById('ps').className = 'psp';
        document.getElementById('ps').innerHTML = "Partie en pause"
        document.getElementById("p").disabled = true;
        document.getElementById("s").disabled = true;  
    }
}

function cbrd() {
  var aux = document.createElement("input");
  aux.setAttribute("value", `${options.url_server}/view`);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

function as () {
    socket.emit("sc")
}

function cps () {
    res = 1
    if(document.getElementById('ps').className == 'pse') {
        res = 0
    }
    socket.emit("ps",res)
}

function pp () {
    socket.emit("ps",2)
}

socket.on("connected", (p) => {
    console.log("connected")
    update_party(p)
    update_config(p.options)
})

socket.on("updated", (r) => {
    update_party(r)
})

socket.on("uconf", (c) => {
    update_config(c)
})