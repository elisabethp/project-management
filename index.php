<?php 
    include "header.php";
?>
    
<div class = "split" id= "left">
<h1 id="projTitle">Project Name: </h1>
<p id="projDesc">Project Description: 
</p>
</div>

<div class="split" id = "righttop">
    <h1 id="projOwner">Project Manager: </h1>
    <body class="loader"></body>
    <table id="UserTable" class = "table table-hover table-striped table-bordered">
        <thead>
            <th>Member Name</th>
            <th>Member Role</th>
        </thead>
        <tbody id="bod">
        </tbody>
    </table>
    <button type="button" id="addBtn" onclick="AddUser()">Add New Team Member</button>
        <div class="AddEdit-Form" id="AddUser">
            <span onclick="Close()" class="close" title="Close Modal">times;</span>
                <iframe hidden name="formSending"></iframe>
                <form class="content" onsubmit="newUser()" method="get" target="formSending">
                    <div class="form-container">
                        <h1>Add Team Member<h1>
                        <label for="name">Name</label>
                        <input id="newMember" type="text" placeholder="Enter Team Member's First and Last Name" name="name" required>
                        <label for="role">Role</label>
                        <input id="newRole" type="text" placeholder="Enter Team Member's Role on Project" name="role" required>
                        <button type="submit" class="btn">Add</button>
                        <button type="cancel" class="btn cancel" onclick="Close()">Cancel</button>
                    </div>
                </form>
        </div>
    <div class="AddEdit-Form" id="EditUser">
        <span onclick="Close()" class="close" title="Close Modal">times;</span>
            <form class="content" method="get" target="formSending">
                <div class="form-container">
                    <h1>Edit Team Member<h1>
                    <label for="name">Name</label>
                    <input id="EditName" type="text" placeholder="Edit Team Member's First and Last Name" name="name" required>
                    <label for="role">Role</label>
                    <input id="EditRole" type="text" placeholder="Edit Team Member's Role on Project" name="role" required>
                    <button type="submit" onclick="saveUser()" class="btn">Save</button>
                    <button type="submit" onclick="removeUser()" class="btn remove">Remove</button>
                    <button type="cancel" class="btn cancel" onclick="CloseEUser()">Cancel</button>
                </div>
            </form>
    </div>
</div>

<div class="split" id="rightbottom">
    <h1>Risks</h1>
    <table class = "table table-hover table-striped table-bordered">
        <thead>
            <th>Risk Name</th>
            <th>Risk Status</th>
        </thead>
        <tbody id="rBod">
        </tbody>
    </table>
    <button type="button" id="addBtn" onclick="AddRisk()">Add New Risk</button>
        <div class="AddEdit-Form" id="AddRisk">
            <span onclick="CloseRisk()" class="close" title="Close Modal"></span>
                <form class="content" onsubmit="newRisks()" method="get" target="formSending">
                    <div class="form-container">
                        <h1>Add Risk<h1>
                        <label for="risk">Risk</label>
                        <input id="newRisk" type="text" placeholder="Enter a description of the risk" name="risk" required>						
                        <label for="status">Risk Status</label><br>
                        <select id="newStatus" name="status">
                            <option value="Unresolved">Unresolved</option>
                            <option value="Resolved">Resolved</option>
                        </select><br>
                        <button type="submit" class="btn">Add</button>
                        <button type="cancel" class="btn cancel" onclick="CloseRisk()">Cancel</button>
                    </div>
                </form>
        </div>
        <div class="AddEdit-Form" id="EditRisk">
            <span onclick="CloseRisk()" class="close" title="Close Modal"></span>
                <form class="content" method="get" target="formSending">
                    <div class="form-container">
                        <h1>Edit Risk<h1>
                        <label for="risk">Risk</label>
                        <input id="EditRiskName" type="text" placeholder="Enter a description of the risk" name="risk" required>						
                        <label for="status">Risk Status</label><br>
                        <select id="EditStatus" name="status">
                            <option id="Unresolved" value="Unresolved">Unresolved</option>
                            <option id="Resolved" value="Resolved">Resolved</option>
                        </select><br>
                        <button type="submit" onclick="saveRisk()" class="btn">Save</button>
                        <button type="submit" onclick="removeRisk()" class="btn remove">Remove</button>
                        <button type="cancel" class="btn cancel" onclick="CloseERisk()">Cancel</button>
                    </div>
                </form>
        </div>
</div>

<?php 

    include "footer.php";

?>