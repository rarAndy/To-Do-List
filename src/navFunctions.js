import { allTasks, allProjects, currentTasks } from "./DataArrays.js";

const navFunctions = function() {

    function updateProjectContainer() {
        const projectContainer = document.querySelector('#project-container');
        projectContainer.textContent = '';

        const projectSelectContainer = document.querySelector('#add-to-project');
        projectSelectContainer.textContent = '';

        const noneOption = document.createElement('option');
        noneOption.textContent = '<None>';
        noneOption.setAttribute('value', 'none');
        projectSelectContainer.appendChild(noneOption)

        allProjects.forEach((project) => {
            
            const projectDiv = document.createElement('div');
            projectDiv.textContent = project.projectName;
            projectDiv.id = project.projectName;
            projectContainer.appendChild(projectDiv);

            const projectSelect = document.createElement('option');
            
            projectSelect.setAttribute('value', project.projectName);
            projectSelect.textContent = project.projectName;

            projectSelectContainer.appendChild(projectSelect)
        });

        let projectChildren = [].slice.call(document.querySelector('#project-container').children)
        projectChildren.forEach((project) => {
            project.addEventListener('click', () => {

                const currentTaskList = document.querySelector('#current-task-list');
                currentTaskList.textContent = project.id

                currentTasks.length = 0;
                const taskList = document.querySelector('#task-list');
                taskList.textContent = '';

                const projectIndex = allProjects.findIndex(projectId => projectId.projectName == project.id)
                
                allProjects[projectIndex].projectTasks.forEach((e) => {
                    if (!allTasks.includes(e)){
                        const index = allProjects[projectIndex].projectTasks.indexOf(e)
                        allProjects[projectIndex].projectTasks.splice(index, 1)
                    }         
                })

                allProjects[projectIndex].projectTasks.forEach((e) => {
                    if (!currentTasks.includes(e)){
                        currentTasks.push(e)
                    }
                })

                console.log(currentTasks)
                currentTasks.forEach(e => e.createTaskDiv());

                return currentTasks
            });       
        });
    }

    function updateInbox() {
        document.querySelector('#inbox').addEventListener('click', () => {

            const currentTaskList = document.querySelector('#current-task-list');
            currentTaskList.textContent = 'Inbox';

            currentTasks.length = 0;
            const taskList = document.querySelector('#task-list');
            taskList.textContent = '';

            allTasks.forEach((e) => {
                currentTasks.push(e)
            })

            allTasks.forEach(e => e.createTaskDiv())
            console.log(currentTasks)
            return currentTasks
        })
    }
    updateProjectContainer();
    updateInbox();
}

export default navFunctions;