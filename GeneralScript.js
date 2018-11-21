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
                "role": ["Manager"]
            },
            {
                "name": "Cody S. Brokin",
                "role": ["Tester"]
            },
            {
                "name": "Screw R. Steakolders",
                "role": ["Requirements Analyst"]
            }
        ],
        "risks": [
            {
                "name": "failure to meet deadline",
                "status": ["Unresolved"]
            },
            {
                "name": "Y2K",
                "status": ["Resolved"]
            }
        ]
    }

console.log(currentProject);
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