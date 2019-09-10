const emailInputField = document.getElementById('email')

emailInputField.addEventListener('click', navigateToProfilePage);

function navigateToProfilePage () {
  location.replace("../PROFILE-PAGE/index.html")
}

// if (emailInputField.value.length === 0) {
//   document.getElementById
// }

// content window animate
const window = document.getElementById('idWindow');
window.onclick = function(event) {
    if (event.target == window) {
        window.style.display = "none";
    }
}
