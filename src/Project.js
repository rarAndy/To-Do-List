class Project {
    constructor(projectName, projectDetails) {
        this.projectName = projectName;
        this.projectDetails = projectDetails;
        this.projectTasks = [];
    }

    addProjectTasks(task) {
        this.projectTasks.push(task)
    }
}

export default Project;