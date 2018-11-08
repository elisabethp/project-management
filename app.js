var currProject = {}

function openProject(pid) {
    /* open json project file */
    /* get obj with matching id */
    /* set found obj equal to currProject */
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
    /* set created project as currProject */

    return new_proj;
}

function createRequirement() {
    /* if (currProject["requirements"]) {
        reqmts = currProject["requirements"]
    }
    else {
        currProject["requirements"] = [];
        reqmts = currProject["requirements"];
    } */

}

function createRisk() {
    return new_risk;
}

function createMember() {
    return new_member;
}