
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

function createPost(event) {
    event.preventDefault();
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');

    fetch("http://thesi.generalassemb.ly:8080/post", {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('user'),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title.value,
            description: description.value
        })
    })
    .then((res) => {
        console.log(res);
        updateDom(res);
    })
    .catch((err) => {
        console.log(err);
    })
}




// trying to re-format our code so that the updateDom function doesn't contain the fetch request.
// function getPostData() {
//   fetch("http://thesi.generalassemb.ly:8080/user/post", {
//     headers: {
//       "Authorization" : "Bearer" + localStorage.getItem('user')
//     }
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//       console.log(res);
//       updateDom(res);
//   })
//   .catch((err) => {
//       console.log(err);
//   })
// };
//
// function updateDom() {
//   document.querySelector('.signupForm').style.display = "none";
//   document.querySelector('.postForm').style.display = "block";
//
//   const list = document.querySelector('.posts')
//   for (let i = 0; i < getPostData.length; i++){
//
//       const item = document.createElement('li');
//       const title = document.createElement('h3');
//       const description = document.createElement('p');
//       item.appendChild(title);
//       item.appendChild(description);
//       title.innerText = getPostData[i].title;
//       description.innerText = getPostData[i].description;
//       list.appendChild(item);
// }
// };
//
// updateDom();

function updateDom() {
  document.querySelector('.signupForm').style.display = "none";
  document.querySelector('.postForm').style.display = "block";

    fetch("http://thesi.generalassemb.ly:8080/user/post", {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('user')
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        const list = document.querySelector('.posts');

        // find a way to target the first object in an array and minus it from our return when res.length > i//
          for (let i = 0; i < res.length; i++) {

            const item = document.createElement('li');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            // const buttonDelete = document.createElement('button');
            item.appendChild(title);
            item.appendChild(description);
            // buttonDelete.appendChild(item);
            title.innerText = res[i].title;
            description.innerText = res[i].description;
            list.appendChild(item);
            // list.appendChild(buttonDelete);
            //delete button not functioning. 
          }
        })
            //
            // if (i > 0) {
            //   title.innerText.pop(1);
            //   description.innerText.pop(1);
            // }

      //   let filtered = list.length.filter(function(value, index){
      //     return value > 0;
      //   if (list.length[i] === 1) {
      //     list.length.splice(i, 1);
      //   //attempt to splice the array^
      // }


//     })
    .catch((err) => {
        console.log(err);
    })

}

// function listAllPosts(event) {
//     event.preventDefault();
//     const posts = document.querySelector('.posts');
//
//     fetch("http://thesi.generalassemb.ly:8080/post/list", {
//             method: 'GET',
//             headers: {
//               "Authorization": "Bearer " + localStorage.getItem('user')
//             },
//             body: JSON.stringify({
//                 posts: value.posts,
//             })
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((res) =>{
//       const list = document.querySelector('.posts');
//       for (let i = 0; i < res.length; i++) {
//         const item = document.createElement('li');
//         const title = document.createElement('h3');
//         const description = document.createElement('p');
//         item.appendChild(title);
//         item.appendChild(description);
//         title.innerText = res[i].title;
//         description.innerText = res[i].description;
//         list.appendChild(item);
//       }
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
