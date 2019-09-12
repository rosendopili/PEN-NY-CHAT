
 // "http://thesi.generalassemb.ly:8080/user/comment",
//updateprofile window animate//
 const modal = document.getElementById("updateWindow");
 modal.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 };


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
          for (let i = 0; i < res.length; i++) {

            const item = document.createElement('li');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            const commentInput =
            document.createElement('input');
            const buttonDelete = document.createElement('input');

            item.appendChild(title);
            item.appendChild(description);
            //added comment button to the array//
            commentInput.appendChild(item);
            //added delete button to the array//
            buttonDelete.appendChild(item);

            title.innerText = res[i].title;
            description.innerText = res[i].description;
            list.appendChild(item);
            list.appendChild(commentInput);
            list.appendChild(buttonDelete);

            commentInput.setAttribute("class", "comment");
            commentInput.setAttribute("type", "submit");
            commentInput.setAttribute("value", "comment");
            commentInput.setAttribute("onclick", "createComment(event)")

            buttonDelete.setAttribute("class", "delete");
            buttonDelete.setAttribute("type", "submit");
            buttonDelete.setAttribute("value", "delete");
            buttonDelete.setAttribute("onclick", "deletePost(event)");

            description.setAttribute("class", "wallPost");
          }
        })


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

// starting the create profile function
function createProfile(event) {
    event.preventDefault();
    const additionalEmail = document.querySelector('.additionalEmail');
    const mobile = document.querySelector('.mobile');
    const address = document.querySelector('.address');

    fetch("http://thesi.generalassemb.ly:8080/profile", {
          method: 'POST',
          headers: {
              "Authorization": "Bearer" + localStorage.getItem('user'),
              "Content-Type": "application/json"

        },
          body: JSON.stringify({
              additionalEmail: additionalEmail.value,
              mobile: mobile.value,
              address: address.value
        })
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      localStorage.setItem('user', res.token);
    })
    .catch((err) => {
      console.log(err);
    })
}


//attempting delete post request//
function deletePost(event) {
    event.preventDefault();
    document.querySelector(".delete");

    fetch('http://thesi.generalassemb.ly:8080/post/1', {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer" +
            localStorage.getItem('user'),
            "Content-Type": "application/json"
          },
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
      // .then((res) => {
      //need to come up with a function that splices the array of posts and targets a specific post based on it's array index
      // })
}


//attempting createComment fetch and .then request//
function createComment(event) {
    event.preventDefault();
    document.querySelector(".comment");

    fetch('http://thesi.generalassemb.ly:8080/comment/3', {
        method: "POST",
        headers: {
            "Authorization": "Bearer" +
            localStorage.getItem('user'),
            "Content-Type": "application/json"
        },
    })
    .then((res) => {
        console.log(res);
    })
    .then((res) => {
        localStorage.setItem('user', res.token);
    })
    .catch((err) => {
        console.log(err);
    })
    .then((res) => {
        const listComment =
//.wallPost is the class assigned to the LI's being populated by the updateDOM function//
        document.querySelector('.wallPost');
        for (let i = 0; i < res.length; i++){

          const commentInput =
          document.createElement('input');
          const commentContent =
          document.createElement('p');


          listComment.appendChild(commentInput);
          listComment.appendChild(commentContent);
          commentContent.innerText = res[i].commentInput;
          commentInput.innerText = res[i].commentInput;

          commentInput.setAttribute("id", "commentInput");
          commentContent.setAttribute("id", "commentContent");
          commentInput.setattribute("type", "text")
        }
      })

}
