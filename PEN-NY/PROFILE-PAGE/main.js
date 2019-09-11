
 // "http://thesi.generalassemb.ly:8080/user/comment",



function postData(event) {
    event.preventDefault();
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const username = document.querySelector('.username');

    fetch("http://thesi.generalassemb.ly:8080/signup", {
            method: 'POST',
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
