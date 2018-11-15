var xmlHttp = null;
xmlHttp     = new XMLHttpRequest();

xmlHttp.open( "GET", "./projects.json", false );
xmlHttp.send( null );

var projects  = JSON.parse(xmlHttp.responseText);
var category = "ALL"

console.log(projects);

function populateTable(category) {

    var req_table = document.getElementById("req-table");
    req_table.innerHTML = "";
    req_table.innerHTML += "<tr><th>Requirement ID</th><th>Requirement Description</th><th>Requirement Effort</th></tr>"

    for (obj in projects["requirements"]) {

        obj = projects["requirements"][obj];
        
        if (category == "ALL") {
            sum = obj["effort"]["RQA"] + obj["effort"]["DES"] + obj["effort"]["COD"] + obj["effort"]["TES"] + obj["effort"]["PM"];
            if (sum == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["id"] + "</td><td>" + obj["description"] + "</td><td>" + sum + "</td></tr>"
        }
        else if (category == "RQA") {
            if (obj["effort"]["RQA"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["id"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["RQA"] + "</td></tr>"
        }
        else if (category == "DES") {
            if (obj["effort"]["DES"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["id"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["DES"] + "</td></tr>"
        }
        else if (category == "COD") {
            if (obj["effort"]["COD"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["id"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["COD"] + "</td></tr>"
        }
        else if (category == "TES") {
            if (obj["effort"]["TES"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["id"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["TES"] + "</td></tr>"
        }
        else {
            if (obj["effort"]["PM"] == 0) { continue; }
            req_table.innerHTML += "<tr><td>" + obj["id"] + "</td><td>" + obj["description"] + "</td><td>" + obj["effort"]["PM"] + "</td></tr>"
        }
    } 
}

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.nav-item')) return;
    
    populateTable(event.target.id);

}, false);

document.addEventListener('DOMContentLoaded', function(){ 
    
    populateTable();

    



}, false);
