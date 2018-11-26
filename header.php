<html>

    <body>

    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="app.js"></script>
        <script src="http://nvd3.org/assets/lib/d3.v3.js"></script>
        <!-- <script type="text/javascript" src="http://mbostock.github.com/d3/d3.js?2.1.3"></script>
        <script type="text/javascript" src="http://mbostock.github.com/d3/d3.geom.js?2.1.3"></script>
        <script type="text/javascript" src="http://mbostock.github.com/d3/d3.layout.js?2.1.3"></script> -->
        <script src="http://nvd3.org/assets/js/nv.d3.js"></script>

        <meta charset="utf-8" />
        <title>SWE 4663 - Group 5 - Project Management Web App</title>
    </head>

    <div id="top-nav">

        <div id="nav-container">
            <div>
                <img src="http://www.kennesaw.edu/_resources/images/global/logo.png">
                <!--<span>Project Manager</span>-->
            </div>
            <div id="top-menu">
                <div><a href="/index.php">Home</a></div>
                <div><a href="/requirements.php">Project Requirements</a></div>
                <div><a href="/effort.php">Project Effort</a></div>
                <div onclick="switchProjects();">New/Change</div>
            </div>
        </div>

    </div>

    <div class="w3-container">

        <div id="id01" class="w3-modal">
            <div class="w3-modal-content">
            <div class="w3-container">
                <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                <h3>You are currently managing:</p>
                <h4 id="switch-modal-title"></h4>
                <hr>

                <h4 id="switch-modal-title">Recent Projects</h4>
                    <table id="recent-proj">
                        <tr><th>Title<th></tr>
                    </table>
                <hr>

                <h3 id="switch-modal-title">Make a New Project</h3>
                <b>Project Title:</b> <input id="new-proj-title" label="Project Title" type="text"><br>
                <b>Project Owner:</b> <input id="new-proj-owner" label="Project Owner" type="text"><br><br>
                <b>Project Description:</b><br><br>
                <textarea rows="10" cols="50" width="100%" id="new-proj-desc" placeholder="Brief project description..."></textarea><br>
                <br><button id="new-proj-button">New Project</button><br>

            </div>
            </div>
        </div>
    </div>



    <div id="body-wrapper">