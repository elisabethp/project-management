index = window.localStorage.getItem("curr");
currentProject = JSON.parse(window.localStorage.getItem(index));
requirements = currentProject["requirements"];
console.log(currentProject);

window.onbeforeunload = function(event) {
    //console.log(currentProject);
    //window.localStorage.setItem(currentProject["id"], JSON.stringify(currentProject));
    window.localStorage.setItem(currentProject["id"], JSON.stringify(currentProject));

    return;
};

window.onload = function(event) {
    //if (window.localStorage.length > 0) {
        //console.log("hey")
        //currentProject = JSON.parse(window.localStorage.getItem(currentProject["id"]));
        requirements = currentProject["requirements"];
        loadRequirements();
        //populateTable(category);
        //setupBar();
        //setupPie();

        console.log(currentProject);
    //}
    
    return;
}

document.addEventListener('DOMContentLoaded', function(){ 
    
    //loadRequirements();

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

}, false);

function loadRequirements ()
{
    console.log(requirements);

    for (var i = 0; i < requirements.length; i++)
    {
        if (requirements[i]["type"] == "functional")
        {
            functionalRequirements.push(requirements[i]);
        }
        else if (requirements[i]["type"] == "nonfunctional")
        {
            nonfunctionalRequirements.push(requirements[i]);
        }
        else
        {
            console.log("Requirement ID: " + requirements[i].reqid + " could not be added to either Functional or Non-Functional lists. Does not have matching type!");
        }
    }

    console.log(functionalRequirements);
    console.log(nonfunctionalRequirements);
   //functionalRequirements;

   var table = document.getElementById("functionalTable");

   var attr = ["reqid", "priority", "description"]

   for (var i = 0; i < functionalRequirements.length; i++) {
       var newRow = table.insertRow(i + 1);
       for (var j = 0; j < attr.length; j++) {
           var cell = newRow.insertCell(j);

           cell.innerHTML = functionalRequirements[i][attr[j]];
       }
   }

   var table = document.getElementById("nonfunctionalTable");

   for (var i = 0; i < nonfunctionalRequirements.length; i++) {
       var newRow = table.insertRow(i + 1);
       for (var j = 0; j < attr.length; j++) {
           var cell = newRow.insertCell(j);

           cell.innerHTML = nonfunctionalRequirements[i][attr[j]];
       }
   }
}


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

    createRequirement(type, priority, description);
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

function createRequirement(type, priority, description) {
    if (currentProject["requirements"]) {
        reqmts = currentProject["requirements"]
    }
    else {
        currentProject["requirements"] = [];
        reqmts = currentProject["requirements"];
    } 

    var new_rq = {
        "reqid": currentProject["requirements"].length + 1,
        "priority": priority,
        "description": description,
        "type": type,
        "effort": {
            "RQA": 0,
            "DES": 0,
            "COD": 0,
            "TES": 0,
            "PM": 0
        }
    }

    reqmts.push(new_rq);

    console.log(currentProject);
}