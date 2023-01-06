import deleteicon from './icons/delete-icon.png';
import editicon from './icons/edit-box-icon.png';
import {allTasks, currentTasks} from './DataArrays';
import {taskForm} from './formButtons';

class Task{
    
    static lastId = 0;

    constructor(taskName, description, date, priority) {
        this.taskName = taskName;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.id = ++Task.lastId;
    }

    createTaskDiv() {
        function createTaskLayout(id, value){
            const taskDiv = document.createElement('div');
            taskDiv.id = id;

            const taskValue = document.createElement('div');
            taskValue.textContent = value;

            taskDiv.append(checkbox, taskValue)
            return taskDiv;
        }

        const taskList = document.querySelector("#task-list");

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        taskContainer.id = 'task' + this.id;

        const checkbox = document.createElement('input');
        checkbox.id = 'text-checkbox';
        checkbox.setAttribute('type', 'checkbox');

        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        const titleDiv = createTaskLayout('task-title-div', this.taskName)
        const dateDiv = createTaskLayout('task-date-div', this.date)
        const priorityDiv = createTaskLayout('task-priority-div', this.priority)

        const icons = document.createElement("div");
        icons.id = 'icons';
        const editIcon = new Image();
        editIcon.id = 'edit-icon';
        editIcon.src = editicon;

        const deleteIcon = new Image();
        deleteIcon.id = 'delete-icon';
        deleteIcon.src = deleteicon;

        deleteIcon.addEventListener('click', (e) => {
            e.stopPropagation();

            const taskId = deleteIcon.parentNode.parentNode.id.split('task').pop();
            const index = allTasks.findIndex(i => i.id == taskId)
            allTasks.splice(index, 1);
            
            deleteIcon.parentNode.parentNode.remove()
            console.log(allTasks)
        })

        editIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelector('.wrapper').classList.add("active");
            this.createDetailedTaskContainer(true)
        })

        icons.append(editIcon, deleteIcon);

        taskContainer.append(checkbox, titleDiv, dateDiv, priorityDiv, icons)

        taskList.appendChild(taskContainer);
  
        taskContainer.addEventListener('click', () => {
            document.querySelector('.wrapper').classList.add("active");
            this.createDetailedTaskContainer();
        })
    }

    createDetailedTaskContainer(edit = false) {
        function createDetailedTaskLayout(id, text, value){
            const taskDiv = document.createElement('div');
            taskDiv.id = id;

            const taskTitle = document.createElement('p');
            taskTitle.textContent = text;

/*             const taskValue = (edit === true) ? (document.createElement('input')) : (document.createElement('div'))
            if (taskValue.tagName === 'INPUT') {taskValue.value = value;} else {taskValue.textContent = value;};
            taskDiv.append(taskTitle, taskValue)
            return taskDiv;
 */
            const priorityInput = document.createElement('select');
            const HighPrio = document.createElement('option')
            HighPrio.textContent = 'High';

            const MediumPrio = document.createElement('option')
            MediumPrio.textContent = 'Medium';

            const LowPrio = document.createElement('option')
            LowPrio.textContent = 'Low';

            priorityInput.append(HighPrio, MediumPrio, LowPrio)

            const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');

            const taskInput = function () {
                if (edit === true) {
                    return (id ===  'detailed-task-name-div') ? document.createElement('input')
                    : (id ===  'detailed-task-description-div') ? document.createElement('textarea')
                    : (id ===  'detailed-task-date-div') ? dateInput
                    : (id ===  'detailed-task-priority-div') ? priorityInput
                    : null
                };
                return document.createElement('div');
            };

            const taskValue = taskInput();
            if (taskValue.tagName != 'DIV') {taskValue.value = value;} else {taskValue.textContent = value;};
            taskDiv.append(taskTitle, taskValue)
            return taskDiv;
        
        }
        const wrapper = document.querySelector(".wrapper");
        const detailedTaskContainer = document.createElement('div');

        const detailedTaskTitle = document.createElement('p');
        (edit === true) ? detailedTaskTitle.textContent = 'Edit Task' : detailedTaskTitle.textContent = 'Task Details';

        
        const detailedTaskNameDiv = createDetailedTaskLayout('detailed-task-name-div', 'Task Name: ', this.taskName)
        const detailedTaskDescriptionDiv = createDetailedTaskLayout('detailed-task-description-div', 'Description: ', this.description)
        const detailedTaskDateDiv = createDetailedTaskLayout('detailed-task-date-div', 'Date: ', this.date)
        const detailedTaskPriorityDiv = createDetailedTaskLayout('detailed-task-priority-div', 'Priority: ', this.priority)
        

        detailedTaskContainer.id = 'detailed-task-container'
        
        detailedTaskContainer.append(detailedTaskTitle, detailedTaskNameDiv, detailedTaskDescriptionDiv, detailedTaskDateDiv, detailedTaskPriorityDiv)
        
        if (edit === true) {
            const submitButton = document.createElement('button');
            submitButton.id = 'edit-submit-button'
            submitButton.textContent = 'Submit Changes'
            submitButton.setAttribute('type', 'button');
            detailedTaskContainer.appendChild(submitButton)

            submitButton.addEventListener('click', () => {
                this.taskName = detailedTaskNameDiv.lastChild.value;
                this.description = detailedTaskDescriptionDiv.lastChild.value;
                this.date = detailedTaskDateDiv.lastChild.value;
                this.priority = detailedTaskPriorityDiv.lastChild.value;

                const taskId = 'task' + this.id
                const task = document.querySelector('#' + taskId)
                task.children[1].firstChild.textContent = this.taskName
                task.children[2].firstChild.textContent = this.date
                task.children[3].firstChild.textContent = this.priority

                document.querySelector(".wrapper").classList.remove("active");
                detailedTaskContainer.remove();
            })
        }
        
        wrapper.appendChild(detailedTaskContainer)

        detailedTaskContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        wrapper.addEventListener('click', () => {
            document.querySelector(".wrapper").classList.remove("active");
            detailedTaskContainer.remove();
        })
    }
}

export default Task;