// content window animate
const window = document.getElementById('idWindow');
window.onclick = function(event) {
    if (event.target == window) {
        window.style.display = "none";
    }
}
