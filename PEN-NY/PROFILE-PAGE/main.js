//add adorable avatars API: https://api.adorable.io/avatars/223/abott@adorable.png

const getWeather = function() {

  fetch('https://api.adorable.io/avatars/223/abott@adorable.png')

    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      getData(res.results[0]);
    })
    .catch((err) => {
      console.log(err);
  })
}

console.log('hello, world');
//
// function getData() {
//     fetch('http://thesi.generalassemb.ly:8080/')
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// function postData() {
//     fetch('http://thesi.generalassemb.ly:8080/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: "BLAHaaaaaaaaa@BLAH.COM",
//                 password: "12345678aa",
//                 username: "BLAH aaaaaaaaBLAH"
//             })
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((res) => {
//         updateDom(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
//
// function updateDom(data) {
//     console.log(data.token);
//     const text = document.querySelector('p');
//     text.innerText = data.token;
// }
//
// postData()
