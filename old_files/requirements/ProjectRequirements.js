// JavaScript source code

// Current Project - Local Test Data Object
var currentProject;

currentProject =
    {
        "id": 1,
        "title": "test_title",
        "creation_date": "test_date",
        "last_updated": "test_last_update",
        "last_accessed": "test_last_accessed",
        "owner": "ownerName",
        "description": "This is a test project generated manually. Edit the projects.json file if formatting changes.",
        "requirements":
            [
                {
                    "reqid": 1,
                    "priority": 4,
                    "description": "this requirement helps test JSON capabilities in nesting objects.",
                    "type": "functional",
                    "effort": {
                        "RQA": 8,
                        "DES": 4,
                        "COD": 3,
                        "TES": 7,
                        "PM": 10
                    }
                },
                {
                    "reqid": 2,
                    "priority": 2,
                    "description": "this requirement exists to ensure that multiple requirements can be handled by the application.",
                    "type": "nonfunctional",
                    "effort": {
                        "RQA": 8,
                        "DES": 4,
                        "COD": 3,
                        "TES": 7,
                        "PM": 10
                    }
                }
            ],
        "members": [
            {
                "name": "Menej M. Badlie",
                "role": "Manager"
            },
            {
                "name": "Cody S. Brokin",
                "role": "Tester"
            },
            {
                "name": "Screw R. Steakolders",
                "role": "Requirements Analyst"
            }
        ],
        "risks": [
            {
                "name": "failure to meet deadline",
                "status": "active"
            },
            {
                "name": "Y2K",
                "status": "Resolved 18 years ago."
            }
        ]
    }

console.log(currentProject);


// Local Functions for Manipulating Data
//var functionalRequirements = [];
//var nonfunctionalRequirements = [];
//var requirements = [];

//requirements = currentProject.requirements;

//for (var i = 0; i < requirements.length; i++)
//{
//    if (requirements[i].type == "functional")
//    {
//        functionalRequirements.add(requirements[i]);
//    }
//    else if (requirements[i].type == "nonfunctional")
//    {
//        nonfunctionalRequirements.add(requirements[i]);
//    }
//    else
//    {
//        console.log("Requirement ID: " + requirements[i].reqid + " could not be added to either Functional or Non-Functional lists. Does not have matching type!");
//    }
//}

//function loadRequirements ()
//{
//    functionalRequirements;
//    table = document.getElementById("functionalTable");

//    for (var i = 0; i < functionalRequirements.length; i++) {
//        var newRow = table.insertRow(i + 1);
//        for (var j = 0; j < functionalRequirements[i].length; j++) {
//            var cell = newRow.insertCell(j);
//            cell.innerHTML = functionalRequirements[i][j];
//        }
//    }
//}

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
var addSpan = document.getElementsByClassName("close")[1];

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
var removeSpan = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
removeSpan.onclick = function () {
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

// Add New Requirement Code
function addNewRequirementHTMLTable() {
    type = document.getElementById("type").value;
    priority = document.getElementById("priority").value;
    description = document.getElementById("description").value;

    if (type == "functional")
    {
        var table = document.getElementById("functionalTable"),
            newRow = table.insertRow(),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);

        cell1.innerHTML = "###";
        cell2.innerHTML = priority;
        cell3.innerHTML = description;
    }
    if (type == "nonfunctional")
    {
        var table = document.getElementById("nonfunctionalTable"),
            newRow = table.insertRow(),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);

        cell1.innerHTML = "###";
        cell2.innerHTML = priority;
        cell3.innerHTML = description;
    }
}

// Remove Requirement Code
function removeRequirementHTMLTable() {
    ID = document.getElementById("removedRequirement").value;

    if (ID == 0) {
        ID = 1;
    }

    var table = document.getElementById("functionalTable");

    table.deleteRow(ID);
}