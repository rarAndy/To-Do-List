import Task from "./Task.js";
import Project from "./Project.js"
import {allTasks, allProjects, currentTasks} from './DataArrays.js';
import {taskForm, projectForm} from "./formButtons.js";
import sortFunction from "./sortFunction.js";
import navFunctions from "./navFunctions.js";

const task1 = new Task("First task", "a task description", "2023-01-12", "Low")
allTasks.push(task1)

const task2 = new Task("Second task", "a task description", "2023-01-13", "Medium")
allTasks.push(task2)

const task3 = new Task("Third task", "a task description", "2023-01-12", "High")
allTasks.push(task3)

const task4 = new Task("Fourth task", "a task description", "2023-01-15", "Low")
allTasks.push(task4)

const task5 = new Task("Fifth task", "a task description", "2023-01-10", "High")
allTasks.push(task5)


allTasks.forEach(e => {e.createTaskDiv()
    currentTasks.push(e)
});

taskForm();
projectForm();
sortFunction();

const proj1 = new Project('Project 1', 'a description for project 1')
const proj2 = new Project('Project 2', 'a description for project 2')
allProjects.push(proj1, proj2)

proj1.addProjectTasks(task5)
proj1.addProjectTasks(task2)

proj2.addProjectTasks(task1)
proj2.addProjectTasks(task3)
console.log(proj1)
console.log(proj2)

navFunctions();





//console.log(allProjects.findIndex(projectId => projectId.projectName == 'project1'))

/* document.querySelector('#project1').addEventListener('click', () => {
    const taskList = document.querySelector('#task-list');
    taskList.textContent = '';

    proj1.projectTasks.forEach(e => e.createTaskDiv())
}) */