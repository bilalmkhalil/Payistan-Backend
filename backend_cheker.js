const axios = require('axios');



// axios.get('http://localhost:3333/api/users').then(res => {
//     console.log(res.data);
// });

let payload = {
    email: "bilal@mail.com",
    password: "khankhail"
}

const url = "http://localhost:3333/api/users/login";

axios.post(url, payload )
    .then(res => {
        const result = res.data;
        console.log(result["message"]);
    })
    .catch(err => {
        console.log(err);
    });


