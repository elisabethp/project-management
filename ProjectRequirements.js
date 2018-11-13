// JavaScript source code

// Modal variable that acts as a dynamic, active modal
var activeModal;

// --------------
// Import Modal Code
// Get the modal
var importModal = document.getElementById('ImportModal');

// Get the button that opens the Import modal
var importBtn = document.getElementById('Import');

// When the user clicks the Import button, open the Import modal
importBtn.onclick = function ()
{
    activeModal = importModal;
    activeModal.style.display = "block";
}

// Get the <span> element that closes the modal
var importSpan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
importSpan.onclick = function ()
{
    activeModal.style.display = "none";
}
// --------------

// --------------
// Add Modal Code
// Get the modal
var addModal = document.getElementById('AddModal');

// Get the button that opens the Import modal
var addBtn = document.getElementById('Add');

// When the user clicks the Import button, open the Import modal
addBtn.onclick = function () {
    activeModal = addModal;
    activeModal.style.display = "block";
}

// Get the <span> element that closes the modal
var addSpan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
addSpan.onclick = function () {
    activeModal.style.display = "none";
}
// --------------

// --------------
// Remove Modal Code
// Get the modal
var removeModal = document.getElementById('RemoveModal');

// Get the button that opens the Import modal
var removeBtn = document.getElementById('Remove');

// When the user clicks the Import button, open the Import modal
removeBtn.onclick = function () {
    activeModal = removeModal;
    activeModal.style.display = "block";
}

// Get the <span> element that closes the modal
var removeSpan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
removeSpan.onclick = function () {
    activeModal.style.display = "none";
}
// --------------



// --------------
// Modal Example Code
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal
btn.onclick = function ()
{
    activeModal = modal;
    activeModal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function ()
{
    activeModal.style.display = "none";
}
// --------------

// --------------
// Modal Window Event Code
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)
{
    //console.log("onclick outside of if statement of the outside of modal");
    if (event.target == activeModal)
    {
        //console.log("onclick inside if statement outside of the outside of modal");
        activeModal.style.display = "none";
    }
}
// --------------