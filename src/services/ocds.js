export async function fetchReleases(OCID) {
    //https://openopps.com/tenders/ocds-0c46vo-0022-NOV317235/?format=json
    const boredURL="https://openopps.com/tenders/"
    const finalURL=boredURL+`${OCID}/?format=json`
    console.log(finalURL)

    return fetch("https://cors-anywhere.herokuapp.com/"+finalURL)
      .then(response => response.json()) // parses response to JSON
}
// export async function fetchReleases(OCID) {
//     var request = require('request');

//     var headers = {
//         'accept': 'application/json',
//         'X-CSRFToken': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNjkzMywidXNlcm5hbWUiOiJoYW55dSIsImV4cCI6MTYyODIxNDI3NywiZW1haWwiOiJoYW55QG1hdGgudWlvLm5vIn0.cZqjGEx-WrqWsSNbAm_DAOH5N_MQd-RorqbjKusvj8M'
//     };

//     var options = {
//         url: 'https://api.openopps.com/api/ca/ocds/?releasedate__gte=2020-04-01&releasedate__lte=2020-04-01',
//         headers: headers,
//         mode:'cors',
        
//     };

//     function callback(error, response, body) {
        
//     console.log("###",body);
//     }

    
//     const response = await request.post(options, callback);
//     return await response.json()
// }
