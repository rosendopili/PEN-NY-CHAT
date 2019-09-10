
// content window animate
const modal = document.getElementById('idWindow');
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
