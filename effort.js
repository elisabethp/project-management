/*console.log(currentProject);
*/
window.onbeforeunload = function(event) {
    //console.log(currentProject);
    //window.localStorage.setItem(currentProject["id"], JSON.stringify(currentProject));
    window.localStorage.setItem(currentProject["id"], JSON.stringify(currentProject));

    return;
};

index = window.localStorage.getItem("curr");
currentProject = JSON.parse(window.localStorage.getItem(index));
requirements = currentProject["requirements"];
console.log(currentProject);

window.onload = function(event) {
    //if (window.localStorage.length > 0) {
        //console.log("hey")
        //currentProject = JSON.parse(window.localStorage.getItem(currentProject["id"]));
        requirements = currentProject["requirements"];
        //loadRequirements();
        populateTable(category);
        setupBar();
        setupPie();

        console.log(currentProject);
    //}
    
    return;
}

var category = "ALL"

function populateTable(category) {

    var req_table = document.getElementById("req-table");
    req_table.innerHTML = "";
    req_table.innerHTML += "<tr><th>Requirement ID</th><th>Requirement Description</th><th>Requirement Effort</th></tr>"

    for (obj in currentProject["requirements"]) {

        obj = currentProject["requirements"][obj];
        
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