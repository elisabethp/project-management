<?php 

    include "header.php";

?>

<!DOCTYPE html>

<html>
<body>
    <!--Style Initialization Code-->
    <style>

        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        /* Modal Content */
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        /* The Close Button */
        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

            .close:hover,
            .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }


        table, td, th {
            border: 1px solid black;
            text-align: center;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>

    <!--Header Code for Page-->
    <p><h1>Project Requirements</h1></p>

    <br />

    <!--Quick Actions Bar for 3 Main Features-->
    <p>Quick Actions: <button id="Import">Import from File</button> | <button id="Add">Add new requirment</button> | <button id="Remove">Remove existing requirement</button></p>

    <br />

    <!--Import from File - Modal HTML Code-->
    <div id="ImportModal" class="modal">
        <!--Modal Content-->
        <div class="modal-content">
            <span class="close">&times;</span>
            <p><h4>Import from File</h4></p>
            <p>Enter the file directory path in the field below</p>
            <p><input type="text" name="File Path:" placeholder="Ex.: C:\users\fileName.fileExtension" style="width:400px" /><button>Import File</button></p>
        </div>
    </div>

    <!--Add new requirement - Modal HTML Code-->
    <div id="AddModal" class="modal">
        <!--Modal Content-->
        <div class="modal-content">
            <span class="close">&times;</span>
            <p><h4>Add new requirement</h4></p>
            <p>Enter the following information to add a new requirement</p>
            <p>Requirement's Description:</p>
            <p><textarea id="description" name="AddRequirementsDescription" rows="5" cols="50" placeholder="Enter a description"></textarea></p>
            <p>Priority Value:</p>
            <p>
                <input type="text" id="priority" placeholder="1 - 5" /><br />
            </p>
            <p>Requirement Type:</p>
            <p>
                <input type="text" id="type" placeholder="functional or nonfunctional" /><br />
            </p>
            <p><button onclick="addNewRequirementHTMLTable();">Add</button></p>
        </div>
    </div>

    <!--Import from File - Modal HTML Code-->
    <div id="RemoveModal" class="modal">
        <!--Modal Content-->
        <div class="modal-content">
            <span class="close">&times;</span>
            <p><h4>Remove existing requirement</h4></p>
            <p>Enter the Requirement ID # of the requirement you want to remove.</p>
            <p><input type="text" id="removedRequirement" placeholder="Ex.: ###" /></p>
            <p>*Please note that once 'Remove' is pressed, the requirement is no longer saved!*</p>
            <p><button onclick="removeRequirementHTMLTable();">Remove</button></p>
        </div>
    </div>

    <!--Functional Requirements Code-->
    <p><h4>Functional Requirements</h4></p>
    <p>A table of all the Functional requirements in the currently opened project.</p>
    <p>
        <table id="functionalTable">
            <tr>
                <th>ID #</th>
                <th>Priority (Ex.: 1-5)</th>
                <th>Description</th>
            </tr>
        </table>
        <!--<script>
            //loadRequirements();

            var array = [
                ["001", "5", "first"],
                ["003", "1", "third"],
                ["005", "1", "fifth"],
                ["007", "5", "James Bond"],
                ["008", "3", "Alec from GoldenEye"]
            ]
            table = document.getElementById("functionalTable");

            for (var i = 0; i < array.length; i++) {
                var newRow = table.insertRow(i + 1);

                for (var j = 0; j < array[i].length; j++) {
                    var cell = newRow.insertCell(j);

                    cell.innerHTML = array[i][j];
                }
            }
        </script>-->
    </p>

    <br />

    <!--NonFunctional Requirements Code-->
    <p><h4>Non-Functional Requirements</h4></p>
    <p>A table of all the Non-Functional requirements in the currently opened project.</p>
    <p>
        <table id="nonfunctionalTable">
            <tr>
                <th>ID #</th>
                <th>Priority (Ex.: 1-5)</th>
                <th>Description</th>
            </tr>
            
        </table>

    </p>

    <!--<script src="ProjectRequirements.js"></script>-->

</body>
</html>