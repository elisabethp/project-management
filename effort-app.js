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
    setupPie();
}, false);


function setupPie() {
    var w = 300,                        //width
    h = 300,                            //height
    r = 100,                            //radius
    color = d3.scale.category20c();     //builtin range of colors

    data = [{"label":"one", "value":20}, 
            {"label":"two", "value":50}, 
            {"label":"three", "value":30}];

    var vis = d3.select("body")
        .append("svg:svg")              //create the SVG element inside the <body>
        .data([data])                   //associate our data with the document
            .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr("height", h)
        .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
        .outerRadius(r);

    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)

        arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return data[i].label; });        //get the label from our original data array
        
}