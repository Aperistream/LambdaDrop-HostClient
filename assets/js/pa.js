const remote = require('electron').remote;
const path = require('path');
const os = require('os');
const fs = require('fs');

const dialog = remote.dialog;

local = localStorage
local.clear()

document.getElementById("lp").addEventListener('drop', (event) => {
  event.preventDefault();
  event.stopPropagation();

  for (const f of event.dataTransfer.files) {
    fs.readFile(f.path, 'utf-8', (err, data) => {
      if(err){
          alert("Je n'ai pas réussi à lire ce fichier !" + err.message);
          return;
      }

      local = localStorage;
      local.setItem("party",data)
      window.location.href = "./pages/loading.html"
  });
  }
  //window.location.href = "./pages/loading.html";
});

document.getElementById("lp").addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});

document.getElementById("lp").addEventListener('click', (e) => {
  dialog.showOpenDialog({
    title: 'Où est donc ta partie ?',
    defaultPath: path.join(__dirname, `${os.homedir()}`),
    buttonLabel: 'Ouvrir la partie',
    filters: [
        {
            name: 'LambdaDrop Parties',
            extensions: ['bite']
        }, ],
    properties: []
  }).then(file => {
    fs.readFile(file.filePaths[0], 'utf-8', (err, data) => {
      if(err){
          alert("An error ocurred reading the file :" + err.message);
          return;
      }

      local = localStorage;
      local.setItem("party",data)
      window.location.href = "./pages/loading.html"
  });
  })
});


document.getElementById("lp").addEventListener('dragenter', (event) => {
  document.getElementById("lp").style.backgroundColor = "#2FB0FF"
});

document.getElementById("lp").addEventListener('dragleave', (event) => {
  document.getElementById("lp").style.backgroundColor = "rgba(128, 128, 128, 0.4)";
});