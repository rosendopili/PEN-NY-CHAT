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
        const list = document.querySelector('.allPosts');
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

            buttonDelete.setAttribute("class", "delete");
            buttonDelete.setAttribute("type", "submit");
            buttonDelete.setAttribute("value", "delete");
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

function listAllPosts(event) {
    // event.preventDefault();
    const posts = document.querySelector('#contentWall');

    fetch("http://thesi.generalassemb.ly:8080/post/list", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
    })
    .then((res) => {
        return res.json();
    })

    .then((res) => {
        const list = document.querySelector('.allPosts');

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

    .catch((err) => {
        console.log(err);
    })
}

listAllPosts();

// function limitPosts() {
//   const wallPost = document.querySelector(list.length);
//     for (let 1 = 0; i )
// }
