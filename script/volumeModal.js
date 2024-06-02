let modal = document.getElementById("volumeModal");

// close when clicked on (X)
let closeButton = document.getElementsByClassName("close-modal")[0];

closeButton.onclick = function() {  
  modal.style.display = "none";
}

// close when clicked on "OK"
document.getElementById("okButton").addEventListener("click", function() {
    modal.style.display = "none";
});

// close when clicked outside of model-content
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// show the modal
modal.style.display = "block";

