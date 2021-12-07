const request = require('request');
const dialog = require('electron').remote.dialog;

let fail = 0
party = localStorage.getItem('party')
options = JSON.parse(localStorage.getItem('options'))

try {
    party = JSON.parse(party)
} catch {
    fail = 1
    dialog.showMessageBox({
        type: 'error',
        title: 'Erreur : Imposible de lancer la partie',
        message: 'Impossible d\'ouvrir le fichier de jeu !',
        detail: 'Si tu reçois cette erreur il est possible que ta sauvegarde soit corrompue.\nMerci de réessayer avec un autre fichier. Si cela ne fonctionne toujours pas, contactes Mocha.',
    }).then(box => {
        window.location.href = "../index.html"
    })
}

function menu() {
    window.location.href = "../index.html"
}

if (fail == 1) {
    console.log("Une erreur s'est produite.")
} else {

    document.getElementById("loadingtitle").innerHTML = "Vérification de l'état des serveurs"
    request.get({ url: `${options.url_server}/ping` }, (err, res, body) => {
        if (err) {
            dialog.showMessageBox({
                type: 'error',
                title: 'Erreur : Imposible de lancer la partie',
                message: `${err}`,
                detail: 'Merci de réessayer plus tard. Si cela ne fonctionne toujours pas, contactes Mocha.',
            }).then(box => {
                window.location.href = "../index.html"
            })
        } else {

            document.getElementById("loadingtitle").innerHTML = "Envoi de la partie au serveur"
            request.post(`${options.url_server}/party?t=${options.token}&p=pty`, { json: true, body: party }, (err, res, body) => {

                if (err) {
                    dialog.showMessageBox({
                        type: 'error',
                        title: 'Erreur : Imposible de lancer la partie',
                        message: `Une erreur innatendue s\'est produite.`,
                        detail: 'Merci de réessayer plus tard. Si cela ne fonctionne toujours pas, contactes Mocha.',
                    }).then(box => {
                        window.location.href = "../index.html"
                    })
                } else {
                    if (res.statusCode !== 200){
                        dialog.showMessageBox({
                            type: 'error',
                            title: 'Erreur : Imposible de lancer la partie',
                            message: `${res.body}`,
                            detail: 'Merci de réessayer plus tard. Si cela ne fonctionne toujours pas, contactes Mocha.',
                        }).then(box => {
                            window.location.href = "../index.html"
                        })
                    } else {
                        document.getElementById('load').style.display='none';
                        document.getElementById('over').style.display='block';
                        console.log("ok")
                    }
                }
            });

        }
    });
}