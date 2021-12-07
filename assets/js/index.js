const remote = require('electron').remote;
const path = require('path');
const os = require('os');
const fs = require('fs');

const dialog = remote.dialog;

function edit(event){
  window.location.href = "./pages/ep.html"
}

function launch(event){
  window.location.href = "./pages/loading.html"
}

function o2(){
  document.getElementById('overlay2').style.display ='block';
}

function mj(event){
  window.location.href = "./pages/mj.html"
}
function st(event){
  window.location.href = "./pages/streamer.html"
}

document.getElementById("app").addEventListener('drop', (event) => {
  event.preventDefault();
  event.stopPropagation();

  for (const f of event.dataTransfer.files) {
    fs.readFile(f.path, 'utf-8', (err, data) => {
      if (err) {
        alert("Erreur lors de la lecture du fichier :" + err.message);
        return;
      }

      local = localStorage;
      local.setItem("party", data)
    });
  }

  document.getElementById('overlay').style.display ='block';

});

document.getElementById("app").addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});

document.getElementById("lpt").addEventListener('click', (e) => {
  dialog.showOpenDialog({
    title: 'Où est donc ta partie ?',
    defaultPath: path.join(__dirname, `${os.homedir()}`),
    buttonLabel: 'Ouvrir la partie',
    filters: [
      {
        name: 'LambdaDrop Parties',
        extensions: ['bite']
      },],
    properties: []
  }).then(file => {
    if (!file.filePaths[0]) {
      return;
    } else {
      fs.readFile(file.filePaths[0], 'utf-8', (err, data) => {
        if (err) {
          alert("Erreur :" + err.message);
          return;
        }

        local = localStorage;
        local.setItem("party", data)
        window.location.href = "./pages/loading.html"
      });
    }
  })
});

document.getElementById("ept").addEventListener('click', (e) => {
  dialog.showOpenDialog({
    title: 'Où est donc ta partie ?',
    defaultPath: path.join(__dirname, `${os.homedir()}`),
    buttonLabel: 'Ouvrir la partie',
    filters: [
      {
        name: 'LambdaDrop Parties',
        extensions: ['bite']
      },],
    properties: []
  }).then(file => {
    if (!file.filePaths[0]) {
      return;
    } else {
      fs.readFile(file.filePaths[0], 'utf-8', (err, data) => {
        if (err) {
          alert("Erreur :" + err.message);
          return;
        }

        local = localStorage;
        local.setItem("party", data)
        window.location.href = "./pages/ep.html"
      });
    }
  })
});