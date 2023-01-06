import Project from "./Project.js";
import Task from "./Task.js";
import {allProjects, allTasks, currentTasks} from './DataArrays';
import navFunctions from "./navFunctions.js";

function taskForm() {
    

    document.getElementById('task-button').addEventListener("click", function() {
        document.querySelector(".wrapper").classList.add("active");
        document.querySelector(".task-form").classList.add("active");
    })

    document.querySelector(".wrapper").addEventListener("click", function(e) {
        document.querySelector(".wrapper").classList.remove("active");
        document.querySelector(".task-form").classList.remove("active");
    })

    document.querySelector(".task-form").addEventListener("click", function(e) {
        e.stopPropagation();
    })

    document.getElementById('submit-button').addEventListener("click", () => {
        const taskName = document.querySelector("#task-name-input");
        const taskDescription = document.querySelector("#task-description-input");
        const taskDate = document.querySelector("#task-date-input");
        const taskPriority = document.querySelector("#task-priority-input");
        const addToProject = document.querySelector("#add-to-project");
        const newTask = new Task(taskName.value, taskDescription.value, taskDate.value, taskPriority.value)
        newTask.createTaskDiv();
        document.querySelector(".wrapper").classList.remove("active");
        document.querySelector(".task-form").classList.remove("active");

        allTasks.push(newTask);
        console.log(allTasks);

        if (addToProject.value != 'none') {
            const projectIndex = allProjects.findIndex(name => name.projectName == addToProject.value)
            allProjects[projectIndex].projectTasks.push(newTask);
            //console.log(allProjects[projectIndex].projectTasks)

            currentTasks.push(newTask)
            console.log(currentTasks)
        }
        
        navFunctions();
    })
}

function projectForm() {

    document.getElementById('project-button').addEventListener("click", function() {
        document.querySelector(".wrapper").classList.add("active");
        document.querySelector(".project-form").classList.add("active");
    })

    document.querySelector(".wrapper").addEventListener("click", function(e) {
        document.querySelector(".wrapper").classList.remove("active");
        document.querySelector(".project-form").classList.remove("active");
    })

    document.querySelector(".project-form").addEventListener("click", function(e) {
        e.stopPropagation();
    })

    document.getElementById('project-submit-button').addEventListener("click", () => {
        const projectName = document.querySelector("#project-name-input");
        const projectDetails = document.querySelector("#project-details-input");
        const newProject = new Project(projectName.value, projectDetails.value)

        document.querySelector(".wrapper").classList.remove("active");
        document.querySelector(".project-form").classList.remove("active");

        allProjects.push(newProject)
        console.log(allProjects);
        
        navFunctions();
    })        
}


export { taskForm, projectForm };