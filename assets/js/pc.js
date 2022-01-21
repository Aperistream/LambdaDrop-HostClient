const remote = require('electron').remote;
const path = require('path');
const os = require('os');
const fs = require('fs')

const dialog = remote.dialog;

function exitApp() {
    const remote = require('electron').remote
    let w = remote.getCurrentWindow()
    w.close()
}

function menu() {
    window.location.href = "../index.html"
}

function partyCreate(event) {
    var overlay = document.getElementById('overlay');

    dialog.showSaveDialog({
        title: 'À quel endroit la partie doit être sauvegardée ?',
        defaultPath: path.join(__dirname, `${os.homedir()}/party.bite`),
        buttonLabel: 'Créer la partie',
        filters: [
            {
                name: 'LambdaDrop Parties',
                extensions: ['bite']
            },],
        properties: []
    }).then(file => {
        if (!file.canceled) {
            fs.writeFile(file.filePath.toString(), `{"team1":
{
    "q1": {
        "th1": {
            "thname": "${document.getElementById('q1th1').value}",
            "question": "${document.getElementById('tq1t1').value}",
            "rep1": "${document.getElementById('r1q1t1').value}",
            "rep2": "${document.getElementById('r2q1t1').value}",
            "rep3": "${document.getElementById('r3q1t1').value}",
            "rep4": "${document.getElementById('r4q1t1').value}",
            "correp": ${document.getElementById('q1th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('q1th2').value}",
            "question": "${document.getElementById('tq1t2').value}",
            "rep1": "${document.getElementById('r1q1t2').value}",
            "rep2": "${document.getElementById('r2q1t2').value}",
            "rep3": "${document.getElementById('r3q1t2').value}",
            "rep4": "${document.getElementById('r4q1t2').value}",
            "correp": ${document.getElementById('q1th2rep').value}
        }
    },
    "q2": {
        "th1": {
            "thname": "${document.getElementById('q2th1').value}",
            "question": "${document.getElementById('tq2t1').value}",
            "rep1": "${document.getElementById('r1q2t1').value}",
            "rep2": "${document.getElementById('r2q2t1').value}",
            "rep3": "${document.getElementById('r3q2t1').value}",
            "rep4": "${document.getElementById('r4q2t1').value}",
            "correp": ${document.getElementById('q2th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('q2th2').value}",
            "question": "${document.getElementById('tq2t2').value}",
            "rep1": "${document.getElementById('r1q2t2').value}",
            "rep2": "${document.getElementById('r2q2t2').value}",
            "rep3": "${document.getElementById('r3q2t2').value}",
            "rep4": "${document.getElementById('r4q2t2').value}",
            "correp": ${document.getElementById('q2th2rep').value}
        }
    },
    "q3": {
        "th1": {
            "thname": "${document.getElementById('q3th1').value}",
            "question": "${document.getElementById('tq3t1').value}",
            "rep1": "${document.getElementById('r1q3t1').value}",
            "rep2": "${document.getElementById('r2q3t1').value}",
            "rep3": "${document.getElementById('r3q3t1').value}",
            "rep4": "${document.getElementById('r4q3t1').value}",
            "correp": ${document.getElementById('q3th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('q3th2').value}",
            "question": "${document.getElementById('tq3t2').value}",
            "rep1": "${document.getElementById('r1q3t2').value}",
            "rep2": "${document.getElementById('r2q3t2').value}",
            "rep3": "${document.getElementById('r3q3t2').value}",
            "rep4": "${document.getElementById('r4q3t2').value}",
            "correp": ${document.getElementById('q3th2rep').value}
        }
    },
    "q4": {
        "th1": {
            "thname": "${document.getElementById('q4th1').value}",
            "question": "${document.getElementById('tq4t1').value}",
            "rep1": "${document.getElementById('r1q4t1').value}",
            "rep2": "${document.getElementById('r2q4t1').value}",
            "rep3": "${document.getElementById('r3q4t1').value}",
            "rep4": "${document.getElementById('r4q4t1').value}",
            "correp": ${document.getElementById('q4th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('q4th2').value}",
            "question": "${document.getElementById('tq4t2').value}",
            "rep1": "${document.getElementById('r1q4t2').value}",
            "rep2": "${document.getElementById('r2q4t2').value}",
            "rep3": "${document.getElementById('r3q4t2').value}",
            "rep4": "${document.getElementById('r4q4t2').value}",
            "correp": ${document.getElementById('q4th2rep').value}
        }
    }
},
"team2": {
    "q1": {
        "th1": {
            "thname": "${document.getElementById('e2q1th1').value}",
            "question": "${document.getElementById('e2tq1t1').value}",
            "rep1": "${document.getElementById('e2r1q1t1').value}",
            "rep2": "${document.getElementById('e2r2q1t1').value}",
            "rep3": "${document.getElementById('e2r3q1t1').value}",
            "rep4": "${document.getElementById('e2r4q1t1').value}",
            "correp": ${document.getElementById('e2q1th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('e2q1th2').value}",
            "question": "${document.getElementById('e2tq1t2').value}",
            "rep1": "${document.getElementById('e2r1q1t2').value}",
            "rep2": "${document.getElementById('e2r2q1t2').value}",
            "rep3": "${document.getElementById('e2r3q1t2').value}",
            "rep4": "${document.getElementById('e2r4q1t2').value}",
            "correp": ${document.getElementById('e2q1th2rep').value}
        }
    },
    "q2": {
        "th1": {
            "thname": "${document.getElementById('e2q2th1').value}",
            "question": "${document.getElementById('e2tq2t1').value}",
            "rep1": "${document.getElementById('e2r1q2t1').value}",
            "rep2": "${document.getElementById('e2r2q2t1').value}",
            "rep3": "${document.getElementById('e2r3q2t1').value}",
            "rep4": "${document.getElementById('e2r4q2t1').value}",
            "correp": ${document.getElementById('e2q2th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('e2q2th2').value}",
            "question": "${document.getElementById('e2tq2t2').value}",
            "rep1": "${document.getElementById('e2r1q2t2').value}",
            "rep2": "${document.getElementById('e2r2q2t2').value}",
            "rep3": "${document.getElementById('e2r3q2t2').value}",
            "rep4": "${document.getElementById('e2r4q2t2').value}",
            "correp": ${document.getElementById('e2q2th2rep').value}
        }
    },
    "q3": {
        "th1": {
            "thname": "${document.getElementById('e2q3th1').value}",
            "question": "${document.getElementById('e2tq3t1').value}",
            "rep1": "${document.getElementById('e2r1q3t1').value}",
            "rep2": "${document.getElementById('e2r2q3t1').value}",
            "rep3": "${document.getElementById('e2r3q3t1').value}",
            "rep4": "${document.getElementById('e2r4q3t1').value}",
            "correp": ${document.getElementById('e2q3th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('e2q3th2').value}",
            "question": "${document.getElementById('e2tq3t2').value}",
            "rep1": "${document.getElementById('e2r1q3t2').value}",
            "rep2": "${document.getElementById('e2r2q3t2').value}",
            "rep3": "${document.getElementById('e2r3q3t2').value}",
            "rep4": "${document.getElementById('e2r4q3t2').value}",
            "correp": ${document.getElementById('e2q3th2rep').value}
        }
    },
    "q4": {
        "th1": {
            "thname": "${document.getElementById('e2q4th1').value}",
            "question": "${document.getElementById('e2tq4t1').value}",
            "rep1": "${document.getElementById('e2r1q4t1').value}",
            "rep2": "${document.getElementById('e2r2q4t1').value}",
            "rep3": "${document.getElementById('e2r3q4t1').value}",
            "rep4": "${document.getElementById('e2r4q4t1').value}",
            "correp": ${document.getElementById('e2q4th1rep').value}
        },
        "th2": {
            "thname": "${document.getElementById('e2q4th2').value}",
            "question": "${document.getElementById('e2tq4t2').value}",
            "rep1": "${document.getElementById('e2r1q4t2').value}",
            "rep2": "${document.getElementById('e2r2q4t2').value}",
            "rep3": "${document.getElementById('e2r3q4t2').value}",
            "rep4": "${document.getElementById('e2r4q4t2').value}",
            "correp": ${document.getElementById('e2q4th2rep').value}
        }
    }
},
"finalq": {
    "th1": {
        "thname": "${document.getElementById('qfth1').value}",
        "question": "${document.getElementById('tqft1').value}",
        "rep1": "${document.getElementById('r1qft1').value}",
        "rep2": "${document.getElementById('r2qft1').value}",
        "correp": ${document.getElementById('qfth1rep').value}
    },
    "th2": {
        "thname": "${document.getElementById('qfth2').value}",
        "question": "${document.getElementById('tqft2').value}",
        "rep1": "${document.getElementById('r1qft2').value}",
        "rep2": "${document.getElementById('r2qft2').value}",
        "correp": ${document.getElementById('qfth2rep').value}
    }
}
}`, function (err) {
                if (err) {
                    console.log(err);
                    document.getElementById('popup').innerHTML = "<h1>Une erreur s'est produite ! Relancez l'application !</h1>";
                }
                document.getElementById('popup').innerHTML = "<table> <thead> <tr> <th> <h1>Youhou ! Partie créée !</h1> </th> </tr> </thead> <tbody> <tr> <td> <center><button>Jouer</button> <button onClick=\"JavaScript:menu()\">Retour au Menu</button> <button onClick=\"JavaScript:exitApp()\">Quitter l'App</button> </center> </td> </tr> </tbody> </table>";
            });

        } else {
            overlay.style.display = 'none';
            document.body.style.overflowY = "visible"
        }

    }).catch(err => {
        console.log(err)
        document.getElementById('popup').innerHTML = "<h1>Une erreur s'est produite ! Relancez l'application !</h1>";
    });
    overlay.style.display = 'block';
    document.body.style.overflowY = "hidden"
}