const { default: axios } = require("axios");

// const  axios = require("axios");

console.log('welcome to axios');
axios.get('/user', {
    params: {
        ID: 12345
    }
})
.then(function(response) {
    //console.log(response);
    console.log('amir');
})
.catch(function (error) {
    //console.log(error)
    console.log('rasooli');
})
.then(function () {

});