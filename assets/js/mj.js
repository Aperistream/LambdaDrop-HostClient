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

    if(!infos.actual || infos.options.state.question == 0) {
        document.getElementById('th').innerHTML = "Partie Terminée"
        document.getElementById('q').innerHTML = "Partie Terminée"
    } else if(infos.options.state.q_theme == 0) {
        document.getElementById('th').innerHTML = "Choix du thème en cours..."
        document.getElementById('q').innerHTML = "Choix du thème en cours..."
        document.getElementById('th1').innerHTML = infos.actual.th1.thname
        document.getElementById('th2').innerHTML = infos.actual.th2.thname
        document.getElementById('th1').disabled = false
        document.getElementById('th2').disabled = false
    } else if (infos.options.state.q_theme == 1) {
        document.getElementById('th').innerHTML = infos.actual.th1.thname
        document.getElementById('q').innerHTML = infos.actual.th1.question
        document.getElementById('th1').innerHTML = "TH1 (Sélectionné)"
        document.getElementById('th2').innerHTML = "TH2"
        document.getElementById('th1').disabled = true
        document.getElementById('th2').disabled = true
        document.getElementById('r1').innerHTML = infos.actual.th1.rep1
        document.getElementById('r2').innerHTML = infos.actual.th1.rep2
        document.getElementById('r3').innerHTML = infos.actual.th1.rep3
        document.getElementById('r4').innerHTML = infos.actual.th1.rep4
        if(infos.actual.th1.correp == 1) {
            document.getElementById('r1').style.color = "rgb(255, 153, 0)"
            document.getElementById('r2').style.color = "black"
            document.getElementById('r3').style.color = "black"
            document.getElementById('r4').style.color = "black"
        }
        if(infos.actual.th1.correp == 2) {
            document.getElementById('r1').style.color = "black"
            document.getElementById('r2').style.color = "rgb(255, 153, 0)"
            document.getElementById('r3').style.color = "black"
            document.getElementById('r4').style.color = "black"
        }
        if(infos.actual.th1.correp == 3) {
            document.getElementById('r1').style.color = "black"
            document.getElementById('r2').style.color = "black"
            document.getElementById('r3').style.color = "rgb(255, 153, 0)"
            document.getElementById('r4').style.color = "black"
        }
        if(infos.actual.th1.correp == 4) {
            document.getElementById('r1').style.color = "black"
            document.getElementById('r2').style.color = "black"
            document.getElementById('r3').style.color = "black"
            document.getElementById('r4').style.color = "rgb(255, 153, 0)"
        }
    } else if (infos.options.state.q_theme == 2) {
        document.getElementById('th').innerHTML = infos.actual.th2.thname
        document.getElementById('q').innerHTML = infos.actual.th2.question
        document.getElementById('th1').innerHTML = "TH1"
        document.getElementById('th2').innerHTML = "TH2 (Sélectionné)"
        document.getElementById('th1').disabled = true
        document.getElementById('th2').disabled = true
        document.getElementById('r1').innerHTML = infos.actual.th2.rep1
        document.getElementById('r2').innerHTML = infos.actual.th2.rep2
        document.getElementById('r3').innerHTML = infos.actual.th2.rep3
        document.getElementById('r4').innerHTML = infos.actual.th2.rep4
        if(infos.actual.th2.correp == 1) {
            document.getElementById('r1').style.color = "rgb(255, 153, 0)"
            document.getElementById('r2').style.color = "black"
            document.getElementById('r3').style.color = "black"
            document.getElementById('r4').style.color = "black"
        }
        if(infos.actual.th2.correp == 2) {
            document.getElementById('r1').style.color = "black"
            document.getElementById('r2').style.color = "rgb(255, 153, 0)"
            document.getElementById('r3').style.color = "black"
            document.getElementById('r4').style.color = "black"
        }
        if(infos.actual.th2.correp == 3) {
            document.getElementById('r1').style.color = "black"
            document.getElementById('r2').style.color = "black"
            document.getElementById('r3').style.color = "rgb(255, 153, 0)"
            document.getElementById('r4').style.color = "black"
        }
        if(infos.actual.th2.correp == 4) {
            document.getElementById('r1').style.color = "black"
            document.getElementById('r2').style.color = "black"
            document.getElementById('r3').style.color = "black"
            document.getElementById('r4').style.color = "rgb(255, 153, 0)"
        }
    }
    document.getElementById('rm1').innerHTML = infos.traps.a
    document.getElementById('rm2').innerHTML = infos.traps.b
    document.getElementById('rm3').innerHTML = infos.traps.c
    document.getElementById('rm4').innerHTML = infos.traps.d
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
        document.getElementById("gr").disabled = true;  
        document.getElementById("qp").disabled = true;   
        document.getElementById("qsuiv").disabled = true; 
        document.querySelectorAll('.ambtn').forEach(elem => {
            elem.disabled = true;
        });
        document.querySelectorAll('.qvar').forEach(elem => {
            elem.innerHTML('Partie stoppée')
        });
    }
    else if (c.state.status == 1) {
        document.getElementById('ps').className = 'pse';
        document.getElementById('ps').innerHTML = "Partie en cours"
        document.getElementById("p").disabled = false; 
        document.getElementById("gr").disabled = false;  
        document.getElementById("qp").disabled = false;   
        document.getElementById("qsuiv").disabled = false;
        document.querySelectorAll('.ambtn').forEach(elem => {
            elem.disabled = false;
        });
        if(c.state.affrep == true) {
            document.getElementById("gr").disabled = true; 
            document.querySelectorAll('.ambtn').forEach(elem => {
                elem.disabled = true;
            });
        } else {
            document.getElementById("gr").disabled = false;
        }
    }
    else {
        document.getElementById('ps').className = 'psp';
        document.getElementById('ps').innerHTML = "Partie en pause"
        document.getElementById("p").disabled = true;
        document.getElementById("s").disabled = true;
        document.getElementById("gr").disabled = true;
        document.getElementById("qp").disabled = true;
        document.getElementById("qsuiv").disabled = true;
        document.querySelectorAll('.ambtn').forEach(elem => {
            elem.disabled = true;
        });
    }
}

function as () {
    socket.emit("sc")
}

function sr () {
    socket.emit("sr")
}

function qp () {
    socket.emit("qp")
}

function qsuiv () {
    socket.emit("qs")
}

function cps () {
    res = 1
    if(document.getElementById('ps').className == 'pse') {
        res = 0
    }
    socket.emit("ps",res)
}

function thcd (nb) {
    socket.emit("tc",nb)
}

function cp (ad,r) {
    socket.emit("cp",ad,r)
}

function pp () {
    socket.emit("ps",2)
}

socket.on("connected", (p) => {
    update_party(p)
    update_config(p.options)
})

socket.on("pm", (r) => {
    update_party(r)
    update_config(r.options)
})

socket.on("updated", (r) => {
    update_party(r)
})

socket.on("uconf", (c) => {
    update_config(c)
})