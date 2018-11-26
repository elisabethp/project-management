if (window.localStorage.length == 0) {
    var xmlHttp = null;
    xmlHttp     = new XMLHttpRequest();

    xmlHttp.open( "GET", "./projects/1.json", false );
    xmlHttp.send( null );

    var projects  = JSON.parse(xmlHttp.responseText);

    var currentProject = projects;
    window.localStorage.setItem("1", JSON.stringify(currentProject));
    currentProject = JSON.parse(window.localStorage.getItem("1"));
    window.localStorage.setItem("curr", 1);
}

index = window.localStorage.getItem("curr");
console.log(index);
currentProject = JSON.parse(window.localStorage.getItem(index));
requirements = currentProject["requirements"];
console.log(currentProject);

var functionalRequirements = [];
var nonfunctionalRequirements = [];
var requirements = [];

window.onbeforeunload = function(event) {
    window.localStorage.setItem(currentProject["id"], JSON.stringify(currentProject));
    //return;
};

window.onload = function(event) {
    popData();
}

/*var currProject = {}

function openProject(pid) {
    /* open json project file */
    /* get obj with matching id */
    /* set found obj equal to currProject 
}*/

function createProject(title, owner, description) {

    var new_proj = {
        "id": window.localStorage.length + 1,
        "title": title,
        "creation_date": new Date(),
        "owner": owner,
        "description": description,
        "requirements": [],
        "members": [],
        "risks": []
    };

    new_proj["last_update"] = new_proj["last_accessed"] = new_proj["creation_date"];

    //console.log(new_proj);
    window.localStorage.setItem(new_proj["id"], JSON.stringify(new_proj));
    console.log(window.localStorage);
}


function createRisk(name, status) {
    new_risk = {
        name: name,
        status: [status]
    }

    currentProject["risks"].push(new_risk);
    console.log(currentProject);
}

function createMember(name, role) {
    new_member = {
        name: name,
        role: [status]
    }

    currentProject["members"].push(new_members);
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
    
    createRisk(risk, status);
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
    
    createMember(mem, role);
	
	
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

function switchProjects() {
    document.getElementById('id01').style.display='block'; 
    document.getElementById('switch-modal-title').innerText = "";
    document.getElementById('switch-modal-title').innerText = currentProject["title"];

    table = document.getElementById("recent-proj");
    table.innerHTML = "";
    table.innerHTML = "<tr><th>Project Title<th></tr>"

    console.log(window.localStorage);
    for (obj in window.localStorage) {
        console.log(obj);
       i = window.localStorage.getItem(obj);
       k = JSON.parse(i);

       console.log(k);

       if (k["title"] == null) {continue;}

       console.log(typeof(k));
       console.log(k);
       table.innerHTML += "<tr><td class='recent-project' id=" + obj + ">" + k["title"] + "</td></tr>"
    }

}

document.onclick = function(event) {

    //console.log(event);
    if (event.target.classList.contains("recent-project")) {
        console.log(event.target.id);
        window.localStorage.setItem("curr", event.target.id)
        window.location.href = "/index.php";
    }

    if (event.target.id == "new-proj-button") {
        document.getElementById('id01').style.display='none';
        
        //if (title == "" || owner == "" || desc == "") {return;}

        title = document.getElementById("new-proj-title").value
        owner = document.getElementById("new-proj-owner").value
        desc = document.getElementById("new-proj-desc").value


        createProject(title, owner, desc);
    }

}
