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

console.log("hello world");
