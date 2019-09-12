// content window animate
const modal = document.getElementById('idWindow');
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


//log in functionality//
function logIn(event) {
    event.preventDefault();
    const email = document.querySelector('.email');
    const password = document.querySelector('.pw');
    const username = document.querySelector('.username');

    fetch('http://thesi.generalassemb.ly:8080/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                username: username.value
            })
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        localStorage.setItem('user', res.token);
        createPost();
    })
    .catch((err) => {
        console.log(err);
    })
}
