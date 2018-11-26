<?php 
    include "header.php";
?>


    <h1 id="page-title">Effort Tracking and Monitoring</h1>
    <div id="page-wrapper">
        <div id="nav">
            <div id="nav-title" class="nav-item">All Phases</div>
            <div class="nav-item" id="REQ">Requirements Elicitation</div>
            <div class="nav-item" id="DES">Designing</div>
            <div class="nav-item" id="COD">Coding</div>
            <div class="nav-item" id="TES">Testing</div>
            <div class="nav-item" id="PRM">Project Management</div>
        </div> <!-- end nav -->
        <div id="body">
            <div id="top-body">
                <div class="chart" id="bar-effort">
                    <div class="chart-title"><h2>Total Effort by Phase</h1>
                    <div id="bar-chart">
                        <svg></svg>
                    </div>
                </div>
                </div>
                <div class="chart" id="pi-effort">
                    <div class="chart-title"><h2>Effort by Requirement</h1>
                        <div id="donut-chart">
                            <svg></svg>
                        </div>
                    </div>
                </div>
            </div> <!-- end top body -->
            <div id="bottom-body">
                <h2 class="chart-title">Project Requirements</h1>
                <table id="req-table">
                    
                </table>
            </div> <!-- end bottom body -->
        </div> <!-- end body -->
    </div> <!-- end page wrapper -->    

<script src="effort.js"></script>
<?php include "footer.php"; ?>