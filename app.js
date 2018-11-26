/*var currProject = {}

function openProject(pid) {
    /* open json project file */
    /* get obj with matching id */
    /* set found obj equal to currProject 
}

function createProject(title, owner, description) {

    var new_proj = {
        "title": title,
        "creation_date": new Date(),
        "owner": owner,
        "description": description
    };

    new_proj["last_update"] = new_proj["accessed"] = new_proj["creation_date"];
    
    /* open json project file */
    /* add new project to json file */
    /* set created project as currProject 

    return new_proj;
}

function createRequirement() {
    /* if (currProject["requirements"]) {
        reqmts = currProject["requirements"]
    }
    else {
        currProject["requirements"] = [];
        reqmts = currProject["requirements"];
    } 

}

function createRisk() {
    return new_risk;
}

function createMember() {
    return new_member;
}*/

var xmlHttp = null;
xmlHttp     = new XMLHttpRequest();

xmlHttp.open( "GET", "./projects/1.json", false );
xmlHttp.send( null );

var projects  = JSON.parse(xmlHttp.responseText);

var currentProject = projects;
window.localStorage.setItem("1", JSON.stringify(currentProject));
currentProject = JSON.parse(window.localStorage.getItem("1"));

window.onbeforeunload = function(event) {
    console.log(currentProject);
    window.localStorage.setItem(currentProject["id"], JSON.stringify(currentProject));
    return;
};

window.onload = function(event) {
    currentProject = JSON.parse(window.localStorage.getItem(currentProject["id"]));
    console.log(currentProject);
    return;
}

/****************************************************************/

/* HOME PAGE */
//saved variables hold the table information from passed function
var savedMem, savedRole, savedRisk, savedStatus;

//populates the member table
function popTable(){
	var x = "";
	for(i in currentProject.members){
		if(currentProject.members[i].name != undefined){
			x += "<tr class='EditRow' onclick='EditUser()'>" + "<td onclick='passName(this.innerText)'>" + currentProject.members[i].name + "</td>";
			for (j in currentProject.members[i].role) {
				x += "<td class='mrole'>" + currentProject.members[i].role[j] + "</td>" + "</tr>";
			}
		}
	}
	document.getElementById("bod").innerHTML = x;
}

//populates the risk table
function popRTable(){
	var x = "";
	for(i in currentProject.risks){
		if(currentProject.risks[i].name != undefined){
			x += "<tr class='EditRow' onclick='EditRisk()'>" + "<td onclick='passRisk(this.innerText)'>" + currentProject.risks[i].name + "</td>";
			for (j in currentProject.risks[i].status) {
				x += "<td>" + currentProject.risks[i].status[j] + "</td>" + "</tr>";
			}
		}
	}
	document.getElementById("rBod").innerHTML = x;
}

//populates the project description
function popDesc(){
	var x = "Project Description: " + currentProject.description;
	document.getElementById("projDesc").innerHTML = x;
}

//populates the Project Name
function popTitle(){
	var x = "Project Name: " + currentProject.title;
	document.getElementById("projTitle").innerHTML = x;
}

//populates the Project Manager field
function popOwner(){
	var x = "Project Manager: " + currentProject.owner;
	document.getElementById("projOwner").innerHTML = x;
}

//causes every population function to execute upon the page being loaded
function popData(){
	popTable();
	popRTable();
	popDesc();
	popTitle();
	popOwner();
}

//displays add member form
function AddUser() {
	document.getElementById("AddUser").style.display = "block";
	
}

//creates a new team member
function newUser() {
	var mem = document.getElementById("newMember").value;
	var role = document.getElementById("newRole").value;
	for(i = 0; i <= currentProject.members.length; i++){
		if(i == currentProject.members.length){
			currentProject.members[i] = {
				name: mem,
				role: [role]
			};
			break;
		}
	}
	document.getElementById("AddUser").style.display = "none";
	popTable();
	document.getElementById("newMember").value = "";
	document.getElementById("newRole").value = "";
}

//closes the new member form
function Close() {
	document.getElementById("AddUser").style.display = "none";
	document.getElementById("newMember").value = "";
	document.getElementById("newRole").value = "";
}

//displays new risk form
function AddRisk() {
	document.getElementById("AddRisk").style.display = "block";
}

//creates new risk
function newRisks() {
	var risk = document.getElementById("newRisk").value;
	var select = document.getElementById("newStatus");
	var status = select.options[select.selectedIndex].value;
	for(i = 0; i <= currentProject.risks.length; i++){
		if(i == currentProject.risks.length){
			currentProject.risks[i] = {
				name: risk,
				status: [status]
			};
			break;
		}
	}
	document.getElementById("AddRisk").style.display = "none";
	popRTable();
	document.getElementById("newRisk").value = "";
}

//closes new risk form
function CloseRisk() {
	document.getElementById("AddRisk").style.display = "none";
	document.getElementById("newRisk").value = "";
}

//displays edit user form
function EditUser() {
	document.getElementById("EditUser").style.display = "block";
}

//passes the member's name and role to the savedMem and savedRole variables
function passName(e){
	var role;
	for(i in currentProject.members){
		if(currentProject.members[i].name == e){
			for (j in currentProject.members[i].role) {
				role = currentProject.members[i].role[j];
				savedMem = e;
				savedRole = role;
				break;
				
			}
			break;
		}
	}
	document.getElementById("EditName").value = e;
	document.getElementById("EditName").placeholder = "Edit " + e + "'s first and last name";
	document.getElementById("EditRole").placeholder = "Edit " + e + "'s role";
	document.getElementById("EditRole").value = role;
	
}

//saves changes made to the member
function saveUser(){
	var mem = document.getElementById("EditName").value;
	var role = document.getElementById("EditRole").value;
	for(i in currentProject.members){
		if(currentProject.members[i].name == savedMem){
			for (j in currentProject.members[i].role) {
				currentProject.members[i].name = mem;
				currentProject.members[i].role[j] = role;
				break;
			}
			break;
		}
	}
	document.getElementById("EditUser").style.display = "none";
	popTable();
	
	
}

//removes the member from the table
function removeUser(){
	for(i in currentProject.members){
		if(currentProject.members[i].name == savedMem){
			for (j in currentProject.members[i].role) {
				delete currentProject.members[i].name;
				delete currentProject.members[i].role[j];
				break;
			}
			break;
		}
	}
	document.getElementById("EditUser").style.display = "none";
	popTable();
}

//displays edit risk form
function EditRisk() {
	document.getElementById("EditRisk").style.display = "block";
}

//passes risk name and status to savedRisk and savedStatus variables
function passRisk(e){
	var status;
	for(i in currentProject.risks){
		if(currentProject.risks[i].name == e){
			for (j in currentProject.risks[i].status) {
				status = currentProject.risks[i].status[j];
				savedRisk = e;
				savedStatus = status;
			}
		}
	}
	document.getElementById("EditRiskName").value = e;
	document.getElementById("EditRiskName").placeholder = "Edit " + e + "'s first and last name";
	document.getElementById(status).selected = true;
}

//saves changes to a risk
function saveRisk(){
	var risk = document.getElementById("EditRiskName").value;
	var select = document.getElementById("EditStatus");
	var status = select.options[select.selectedIndex].value;
	for(i in currentProject.risks){
		if(currentProject.risks[i].name == savedRisk){
			for (j in currentProject.risks[i].status) {
				currentProject.risks[i].name = risk;
				currentProject.risks[i].status[j] = status;
				break;
			}
			break;
		}
	}
	document.getElementById("EditRisk").style.display = "none";
	popRTable();
}

//removes risk from table
function removeRisk(){
	for(i in currentProject.risks){
		if(currentProject.risks[i].name == savedRisk){
			for (j in currentProject.risks[i].status) {
				delete currentProject.risks[i].name;
				delete currentProject.risks[i].status[j];;
				break;
			}
			break;
		}
	}
	document.getElementById("EditRisk").style.display = "none";
	popRTable();
}

//closes edit member form
function CloseEUser() {
	document.getElementById("EditUser").style.display = "none";
	document.getElementById("EditName").value = "";
	document.getElementById("EditRole").value = "";
}

//closes edit risk form
function CloseERisk() {
	document.getElementById("EditRisk").style.display = "none";
	document.getElementById("EditRiskName").value = "";
}

//closes modal box upon clicking outside it
window.onclick = function(event) {
	if (event.target == document.getElementById("AddUser")) {
		document.getElementById("AddUser").style.display = "none";
		document.getElementById("newMember").value = "";
		document.getElementById("newRole").value = "";
	}
	else if (event.target == document.getElementById("AddRisk")) {
		document.getElementById("AddRisk").style.display = "none";
		document.getElementById("newRisk").value = "";
	}
	else if (event.target == document.getElementById("EditUser")) {
		document.getElementById("EditUser").style.display = "none";
		document.getElementById("EditName").value = "";
		document.getElementById("EditRole").value = "";
	}
	else if (event.target == document.getElementById("EditRisk")) {
		document.getElementById("EditRisk").style.display = "none";
		document.getElementById("EditRiskName").value = "";
	}
}


/* EFFORT PAGE */
var category = "ALL"

function populateTable(category) {

    var req_table = document.getElementById("req-table");
    req_table.innerHTML = "";
    req_table.innerHTML += "<tr><th>Requirement ID</th><th>Requirement Description</th><th>Requirement Effort</th></tr>"

    for (obj in projects["requirements"]) {

        obj = projects["requirements"][obj];
        
        if (category == "nav-title" || category == "ALL") {
            
            sum = obj["effort"]["RQA"] + obj["effort"]["DES"] + obj["effort"]["COD"] + obj["effort"]["TES"] + obj["effort"]["PM"];
            if (sum == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["reqid"] + "</td><td>" + obj["description"] + "</td><td>" + sum + "</td></tr>"
        }
        else if (category == "RQA") {
            if (obj["effort"]["RQA"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["reqid"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["RQA"] + "</td></tr>"
        }
        else if (category == "DES") {
            if (obj["effort"]["DES"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["reqid"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["DES"] + "</td></tr>"
        }
        else if (category == "COD") {
            if (obj["effort"]["COD"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["reqid"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["COD"] + "</td></tr>"
        }
        else if (category == "TES") {
            if (obj["effort"]["TES"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["reqid"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["TES"] + "</td></tr>"
        }
        else {
            if (obj["effort"]["PM"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["reqid"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["PM"] + "</td></tr>"
        }
    } 
}

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.nav-item')) return;
    
    console.log(event.target.id);
    populateTable(event.target.id);

}, false);

document.addEventListener('DOMContentLoaded', function(){ 
    
    populateTable(category);
    setupBar();
    setupPie();

}, false);


function setupBar() {

    //BAR
    var reqs = currentProject["requirements"];
    var b_req = b_cod = b_tes = b_des = b_pm = 0;

    for (obj in reqs) {
        b_req += reqs[obj]["effort"]["RQA"];
        b_des += reqs[obj]["effort"]["DES"];
        b_cod += reqs[obj]["effort"]["COD"];
        b_tes += reqs[obj]["effort"]["TES"];
        b_pm += reqs[obj]["effort"]["PM"];
    }

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })    //Specify the data accessors.
            .y(function(d) { return d.value })
            .staggerLabels(false)    //Too many bars and not enough room? Try staggering labels.
            .tooltips(false)        //Don't show tooltips
            .showValues(true)       //...instead, show the bar value right on top of each bar.
            .transitionDuration(350)
            ;
    
        d3.select('#bar-chart svg')
            .datum(exampleData())
            .call(chart);
    
        nv.utils.windowResize(chart.update);
    
        return chart;
    });
    
    //Each bar represents a single discrete quantity.
    function exampleData() {
    return  [ 
        {
            key: "Cumulative Return",
            values: [
            { 
                "label" : "REQ" ,
                "value" : b_req
            } , 
            { 
                "label" : "DES" , 
                "value" : b_des
            } , 
            { 
                "label" : "COD" , 
                "value" : b_cod
            } , 
            { 
                "label" : "TES" , 
                "value" : b_cod
            } , 
            { 
                "label" : "PM" ,
                "value" : b_pm
            } 
            ]
        }
        ]
    
    }
}

function setupPie() {

    var reqs = currentProject["requirements"];
    var section_colors = [];
    var data = [];

    for (var i = 0; i < reqs.length; i++) {
        section_colors.push("#"+((1<<24)*Math.random()|0).toString(16));
    }

    for (obj in reqs) {

        var new_item = {};

        new_item["label"] = reqs[obj]["reqid"];
        new_item["value"] = reqs[obj]["effort"]["RQA"] + reqs[obj]["effort"]["DES"] + reqs[obj]["effort"]["COD"] + reqs[obj]["effort"]["TES"] + reqs[obj]["effort"]["PM"];
    
        //console.log(reqs[obj]);
        data.push(new_item);
    }

    // PIE
    nv.addGraph(function() {
        var donutChart = nv.models.pieChart()
                .x(function(d) {
            return d.label
            })
                .y(function(d) {
            return d.value
            })
                .showLabels(true)
                .showLegend(false)
                .labelThreshold(.05)
                .labelType("key")
                .color(section_colors)
                .tooltipContent(
            function(key, y, e, graph) { return 'Custom tooltip string' }
            ) // This is for when I turn on tooltips
                .tooltips(true)
                .donut(true)
                .donutRatio(0.35);
        
            // Insert text into the center of the donut
            function centerText() {
                return function() {
            var svg = d3.select("svg");
    
                var donut = svg.selectAll("g.nv-slice").filter(
                function (d, i) {
                return i == 0;
                }
            );
            
            }
        }
        
        // Put the donut pie chart together
        d3.select("#donut-chart svg")
        .datum(data)
        .transition().duration(300)
        .call(donutChart)
        .call(centerText())
        //.call(pieSlice());
        
        return donutChart;
    });
    
}

// REQS PAGE

//Local Functions for Manipulating Data

var functionalRequirements = [];
var nonfunctionalRequirements = [];
var requirements = [];

requirements = currentProject["requirements"];

document.addEventListener('DOMContentLoaded', function(){ 
    
    loadRequirements();

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

}, false);

function loadRequirements ()
{
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

