const request = require('request');

local = localStorage;
options = JSON.parse(localStorage.getItem('options'))

setInterval( function(){

    // Code mettant à jour les informations de partie

    request.get({ url: `${options.url_server}/party?t=${options.token}` }, (err, res, body) => {

        console.log(res.body)

    })

}, 150);