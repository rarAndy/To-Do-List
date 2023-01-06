/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DataArrays.js":
/*!***************************!*\
  !*** ./src/DataArrays.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "currentTasks": () => (/* binding */ currentTasks)
/* harmony export */ });
const allTasks = [];
const allProjects = [];
const currentTasks = [];




/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_delete_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/delete-icon.png */ "./src/icons/delete-icon.png");
/* harmony import */ var _icons_edit_box_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/edit-box-icon.png */ "./src/icons/edit-box-icon.png");
/* harmony import */ var _DataArrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataArrays */ "./src/DataArrays.js");
/* harmony import */ var _formButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formButtons */ "./src/formButtons.js");





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
        editIcon.src = _icons_edit_box_icon_png__WEBPACK_IMPORTED_MODULE_1__;

        const deleteIcon = new Image();
        deleteIcon.id = 'delete-icon';
        deleteIcon.src = _icons_delete_icon_png__WEBPACK_IMPORTED_MODULE_0__;

        deleteIcon.addEventListener('click', (e) => {
            e.stopPropagation();

            const taskId = deleteIcon.parentNode.parentNode.id.split('task').pop();
            const index = _DataArrays__WEBPACK_IMPORTED_MODULE_2__.allTasks.findIndex(i => i.id == taskId)
            _DataArrays__WEBPACK_IMPORTED_MODULE_2__.allTasks.splice(index, 1);
            
            deleteIcon.parentNode.parentNode.remove()
            console.log(_DataArrays__WEBPACK_IMPORTED_MODULE_2__.allTasks)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/formButtons.js":
/*!****************************!*\
  !*** ./src/formButtons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _DataArrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataArrays */ "./src/DataArrays.js");
/* harmony import */ var _navFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navFunctions.js */ "./src/navFunctions.js");





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
        const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskName.value, taskDescription.value, taskDate.value, taskPriority.value)
        newTask.createTaskDiv();
        document.querySelector(".wrapper").classList.remove("active");
        document.querySelector(".task-form").classList.remove("active");

        _DataArrays__WEBPACK_IMPORTED_MODULE_2__.allTasks.push(newTask);
        console.log(_DataArrays__WEBPACK_IMPORTED_MODULE_2__.allTasks);

        if (addToProject.value != 'none') {
            const projectIndex = _DataArrays__WEBPACK_IMPORTED_MODULE_2__.allProjects.findIndex(name => name.projectName == addToProject.value)
            _DataArrays__WEBPACK_IMPORTED_MODULE_2__.allProjects[projectIndex].projectTasks.push(newTask);
            //console.log(allProjects[projectIndex].projectTasks)

            _DataArrays__WEBPACK_IMPORTED_MODULE_2__.currentTasks.push(newTask)
            console.log(_DataArrays__WEBPACK_IMPORTED_MODULE_2__.currentTasks)
        }
        
        (0,_navFunctions_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
        const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectName.value, projectDetails.value)

        document.querySelector(".wrapper").classList.remove("active");
        document.querySelector(".project-form").classList.remove("active");

        _DataArrays__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(newProject)
        console.log(_DataArrays__WEBPACK_IMPORTED_MODULE_2__.allProjects);
        
        (0,_navFunctions_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    })        
}




/***/ }),

/***/ "./src/navFunctions.js":
/*!*****************************!*\
  !*** ./src/navFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataArrays.js */ "./src/DataArrays.js");


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

        _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {
            
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

                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.length = 0;
                const taskList = document.querySelector('#task-list');
                taskList.textContent = '';

                const projectIndex = _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.findIndex(projectId => projectId.projectName == project.id)
                
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectTasks.forEach((e) => {
                    if (!_DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.includes(e)){
                        const index = _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectTasks.indexOf(e)
                        _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectTasks.splice(index, 1)
                    }         
                })

                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[projectIndex].projectTasks.forEach((e) => {
                    if (!_DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.includes(e)){
                        _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.push(e)
                    }
                })

                console.log(_DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks)
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.forEach(e => e.createTaskDiv());

                return _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks
            });       
        });
    }

    function updateInbox() {
        document.querySelector('#inbox').addEventListener('click', () => {

            const currentTaskList = document.querySelector('#current-task-list');
            currentTaskList.textContent = 'Inbox';

            _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.length = 0;
            const taskList = document.querySelector('#task-list');
            taskList.textContent = '';

            _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.forEach((e) => {
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.push(e)
            })

            _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.allTasks.forEach(e => e.createTaskDiv())
            console.log(_DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks)
            return _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks
        })
    }
    updateProjectContainer();
    updateInbox();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navFunctions);

/***/ }),

/***/ "./src/sortFunction.js":
/*!*****************************!*\
  !*** ./src/sortFunction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataArrays.js */ "./src/DataArrays.js");


const sortFunction = function () {
    
    let priorityStatus = 0;
    let dateStatus = 0;

    document.querySelector('.priority-order').addEventListener('click', () => {
        dateStatus = 0;
        console.log(_DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks)
        if (priorityStatus == 0 || priorityStatus == 2){
            
            function prioritySort() {
                const order = {"Low": 1, "Medium": 2, "High": 3}
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.sort((a, b) => (order[b.priority]) - (order[a.priority]));
            }
            prioritySort();
            priorityStatus = 1;
            
        }

        else if (priorityStatus == 1){
            
            function prioritySort() {
                const order = {"Low": 1, "Medium": 2, "High": 3}
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.sort((a, b) => (order[a.priority]) - (order[b.priority]));
            }
            prioritySort();
            priorityStatus = 2;
        }

        changeSortIcon();

        const taskList = document.querySelector('#task-list');
        taskList.textContent = '';
        _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.forEach(e => e.createTaskDiv())
    })

    document.querySelector(".date-order").addEventListener('click', () => {
        console.log(_DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks)
        priorityStatus = 0;

        if (dateStatus == 0 || dateStatus == 2){
            function dateSort() {
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.sort((a, b) => {return new Date(a.date) - new Date(b.date)})
            } 
            dateSort();
            dateStatus = 1;
        }

        else if (dateStatus == 1){
            function dateSort() {
                _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.sort((a, b) => {return new Date(b.date) - new Date(a.date)})
            } 
            dateSort();
            dateStatus = 2;
        }

        changeSortIcon();
        
        const taskList = document.querySelector('#task-list');
        taskList.textContent = '';
        _DataArrays_js__WEBPACK_IMPORTED_MODULE_0__.currentTasks.forEach(e => e.createTaskDiv())

    })

    function changeSortIcon() {
        if (priorityStatus == 0){
            document.querySelector("#priority-order-sort-icon").classList.remove('sort1');
            document.querySelector("#priority-order-sort-icon").classList.remove('sort2');
        }
        else if (priorityStatus == 1) {
            document.querySelector("#priority-order-sort-icon").classList.add('sort1');
            document.querySelector("#priority-order-sort-icon").classList.remove('sort2');
        }

        else if (priorityStatus == 2) {
            document.querySelector("#priority-order-sort-icon").classList.remove('sort1');
            document.querySelector("#priority-order-sort-icon").classList.add('sort2');
        }

        if (dateStatus == 0){
            document.querySelector("#date-order-sort-icon").classList.remove('sort1');
            document.querySelector("#date-order-sort-icon").classList.remove('sort2');
        }
        else if (dateStatus == 1) {
            document.querySelector("#date-order-sort-icon").classList.add('sort1');
            document.querySelector("#date-order-sort-icon").classList.remove('sort2');
        }

        else if (dateStatus == 2) {
            document.querySelector("#date-order-sort-icon").classList.remove('sort1');
            document.querySelector("#date-order-sort-icon").classList.add('sort2');
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortFunction);


/***/ }),

/***/ "./src/icons/delete-icon.png":
/*!***********************************!*\
  !*** ./src/icons/delete-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a4c5a15f779a1911977.png";

/***/ }),

/***/ "./src/icons/edit-box-icon.png":
/*!*************************************!*\
  !*** ./src/icons/edit-box-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0031b934006833c2c85.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _DataArrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataArrays.js */ "./src/DataArrays.js");
/* harmony import */ var _formButtons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formButtons.js */ "./src/formButtons.js");
/* harmony import */ var _sortFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortFunction.js */ "./src/sortFunction.js");
/* harmony import */ var _navFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navFunctions.js */ "./src/navFunctions.js");







const task1 = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("First task", "a task description", "2023-01-12", "Low")
_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allTasks.push(task1)

const task2 = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Second task", "a task description", "2023-01-13", "Medium")
_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allTasks.push(task2)

const task3 = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Third task", "a task description", "2023-01-12", "High")
_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allTasks.push(task3)

const task4 = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Fourth task", "a task description", "2023-01-15", "Low")
_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allTasks.push(task4)

const task5 = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Fifth task", "a task description", "2023-01-10", "High")
_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allTasks.push(task5)


_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allTasks.forEach(e => {e.createTaskDiv()
    _DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.currentTasks.push(e)
});

(0,_formButtons_js__WEBPACK_IMPORTED_MODULE_3__.taskForm)();
(0,_formButtons_js__WEBPACK_IMPORTED_MODULE_3__.projectForm)();
(0,_sortFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

const proj1 = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Project 1', 'a description for project 1')
const proj2 = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Project 2', 'a description for project 2')
_DataArrays_js__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(proj1, proj2)

proj1.addProjectTasks(task5)
proj1.addProjectTasks(task2)

proj2.addProjectTasks(task1)
proj2.addProjectTasks(task3)
console.log(proj1)
console.log(proj2)

;(0,_navFunctions_js__WEBPACK_IMPORTED_MODULE_5__["default"])();





//console.log(allProjects.findIndex(projectId => projectId.projectName == 'project1'))

/* document.querySelector('#project1').addEventListener('click', () => {
    const taskList = document.querySelector('#task-list');
    taskList.textContent = '';

    proj1.projectTasks.forEach(e => e.createTaskDiv())
}) */
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ3RCLHlEQUFhOzs7QUFHYiw0REFBZ0IsT0FBTztBQUN2QixJQUFJLDZEQUFpQjtBQUNyQixDQUFDOztBQUVELHlEQUFRO0FBQ1IsNERBQVc7QUFDWCw0REFBWTs7QUFFWixrQkFBa0IsbURBQU87QUFDekIsa0JBQWtCLG1EQUFPO0FBQ3pCLDREQUFnQjs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBWTs7Ozs7O0FBTVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RhdGFBcnJheXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1CdXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXZGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NvcnRGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFsbFRhc2tzID0gW107XG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuY29uc3QgY3VycmVudFRhc2tzID0gW107XG5cblxuZXhwb3J0IHsgYWxsVGFza3MsIGFsbFByb2plY3RzLCBjdXJyZW50VGFza3MgfTsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgcHJvamVjdERldGFpbHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnByb2plY3REZXRhaWxzID0gcHJvamVjdERldGFpbHM7XG4gICAgICAgIHRoaXMucHJvamVjdFRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdFRhc2tzKHRhc2spIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3MucHVzaCh0YXNrKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgZGVsZXRlaWNvbiBmcm9tICcuL2ljb25zL2RlbGV0ZS1pY29uLnBuZyc7XG5pbXBvcnQgZWRpdGljb24gZnJvbSAnLi9pY29ucy9lZGl0LWJveC1pY29uLnBuZyc7XG5pbXBvcnQge2FsbFRhc2tzLCBjdXJyZW50VGFza3N9IGZyb20gJy4vRGF0YUFycmF5cyc7XG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tICcuL2Zvcm1CdXR0b25zJztcblxuY2xhc3MgVGFza3tcbiAgICBcbiAgICBzdGF0aWMgbGFzdElkID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pZCA9ICsrVGFzay5sYXN0SWQ7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza0RpdigpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0xheW91dChpZCwgdmFsdWUpe1xuICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0Rpdi5pZCA9IGlkO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tWYWx1ZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuXG4gICAgICAgICAgICB0YXNrRGl2LmFwcGVuZChjaGVja2JveCwgdGFza1ZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIHRhc2tEaXY7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1saXN0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pZCA9ICd0YXNrJyArIHRoaXMuaWQ7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5pZCA9ICd0ZXh0LWNoZWNrYm94JztcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0aXRsZURpdiA9IGNyZWF0ZVRhc2tMYXlvdXQoJ3Rhc2stdGl0bGUtZGl2JywgdGhpcy50YXNrTmFtZSlcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGNyZWF0ZVRhc2tMYXlvdXQoJ3Rhc2stZGF0ZS1kaXYnLCB0aGlzLmRhdGUpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gY3JlYXRlVGFza0xheW91dCgndGFzay1wcmlvcml0eS1kaXYnLCB0aGlzLnByaW9yaXR5KVxuXG4gICAgICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWNvbnMuaWQgPSAnaWNvbnMnO1xuICAgICAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBlZGl0SWNvbi5pZCA9ICdlZGl0LWljb24nO1xuICAgICAgICBlZGl0SWNvbi5zcmMgPSBlZGl0aWNvbjtcblxuICAgICAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlLWljb24nO1xuICAgICAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZWljb247XG5cbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBkZWxldGVJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZC5zcGxpdCgndGFzaycpLnBvcCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhbGxUYXNrcy5maW5kSW5kZXgoaSA9PiBpLmlkID09IHRhc2tJZClcbiAgICAgICAgICAgIGFsbFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZUljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcbiAgICAgICAgfSlcblxuICAgICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZXRhaWxlZFRhc2tDb250YWluZXIodHJ1ZSlcbiAgICAgICAgfSlcblxuICAgICAgICBpY29ucy5hcHBlbmQoZWRpdEljb24sIGRlbGV0ZUljb24pO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNoZWNrYm94LCB0aXRsZURpdiwgZGF0ZURpdiwgcHJpb3JpdHlEaXYsIGljb25zKVxuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICBcbiAgICAgICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGV0YWlsZWRUYXNrQ29udGFpbmVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlRGV0YWlsZWRUYXNrQ29udGFpbmVyKGVkaXQgPSBmYWxzZSkge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVEZXRhaWxlZFRhc2tMYXlvdXQoaWQsIHRleHQsIHZhbHVlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEaXYuaWQgPSBpZDtcblxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcblxuLyogICAgICAgICAgICAgY29uc3QgdGFza1ZhbHVlID0gKGVkaXQgPT09IHRydWUpID8gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpIDogKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICAgICAgaWYgKHRhc2tWYWx1ZS50YWdOYW1lID09PSAnSU5QVVQnKSB7dGFza1ZhbHVlLnZhbHVlID0gdmFsdWU7fSBlbHNlIHt0YXNrVmFsdWUudGV4dENvbnRlbnQgPSB2YWx1ZTt9O1xuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmQodGFza1RpdGxlLCB0YXNrVmFsdWUpXG4gICAgICAgICAgICByZXR1cm4gdGFza0RpdjtcbiAqL1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgY29uc3QgSGlnaFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgSGlnaFByaW8udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICAgICAgICAgIGNvbnN0IE1lZGl1bVByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgTWVkaXVtUHJpby50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuXG4gICAgICAgICAgICBjb25zdCBMb3dQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIExvd1ByaW8udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmQoSGlnaFByaW8sIE1lZGl1bVByaW8sIExvd1ByaW8pXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChlZGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaWQgPT09ICAnZGV0YWlsZWQtdGFzay1uYW1lLWRpdicpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICA6IChpZCA9PT0gICdkZXRhaWxlZC10YXNrLWRlc2NyaXB0aW9uLWRpdicpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICA6IChpZCA9PT0gICdkZXRhaWxlZC10YXNrLWRhdGUtZGl2JykgPyBkYXRlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOiAoaWQgPT09ICAnZGV0YWlsZWQtdGFzay1wcmlvcml0eS1kaXYnKSA/IHByaW9yaXR5SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrVmFsdWUgPSB0YXNrSW5wdXQoKTtcbiAgICAgICAgICAgIGlmICh0YXNrVmFsdWUudGFnTmFtZSAhPSAnRElWJykge3Rhc2tWYWx1ZS52YWx1ZSA9IHZhbHVlO30gZWxzZSB7dGFza1ZhbHVlLnRleHRDb250ZW50ID0gdmFsdWU7fTtcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kKHRhc2tUaXRsZSwgdGFza1ZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIHRhc2tEaXY7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gICAgICAgIGNvbnN0IGRldGFpbGVkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbGVkVGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAoZWRpdCA9PT0gdHJ1ZSkgPyBkZXRhaWxlZFRhc2tUaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snIDogZGV0YWlsZWRUYXNrVGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayBEZXRhaWxzJztcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV0YWlsZWRUYXNrTmFtZURpdiA9IGNyZWF0ZURldGFpbGVkVGFza0xheW91dCgnZGV0YWlsZWQtdGFzay1uYW1lLWRpdicsICdUYXNrIE5hbWU6ICcsIHRoaXMudGFza05hbWUpXG4gICAgICAgIGNvbnN0IGRldGFpbGVkVGFza0Rlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRGV0YWlsZWRUYXNrTGF5b3V0KCdkZXRhaWxlZC10YXNrLWRlc2NyaXB0aW9uLWRpdicsICdEZXNjcmlwdGlvbjogJywgdGhpcy5kZXNjcmlwdGlvbilcbiAgICAgICAgY29uc3QgZGV0YWlsZWRUYXNrRGF0ZURpdiA9IGNyZWF0ZURldGFpbGVkVGFza0xheW91dCgnZGV0YWlsZWQtdGFzay1kYXRlLWRpdicsICdEYXRlOiAnLCB0aGlzLmRhdGUpXG4gICAgICAgIGNvbnN0IGRldGFpbGVkVGFza1ByaW9yaXR5RGl2ID0gY3JlYXRlRGV0YWlsZWRUYXNrTGF5b3V0KCdkZXRhaWxlZC10YXNrLXByaW9yaXR5LWRpdicsICdQcmlvcml0eTogJywgdGhpcy5wcmlvcml0eSlcbiAgICAgICAgXG5cbiAgICAgICAgZGV0YWlsZWRUYXNrQ29udGFpbmVyLmlkID0gJ2RldGFpbGVkLXRhc2stY29udGFpbmVyJ1xuICAgICAgICBcbiAgICAgICAgZGV0YWlsZWRUYXNrQ29udGFpbmVyLmFwcGVuZChkZXRhaWxlZFRhc2tUaXRsZSwgZGV0YWlsZWRUYXNrTmFtZURpdiwgZGV0YWlsZWRUYXNrRGVzY3JpcHRpb25EaXYsIGRldGFpbGVkVGFza0RhdGVEaXYsIGRldGFpbGVkVGFza1ByaW9yaXR5RGl2KVxuICAgICAgICBcbiAgICAgICAgaWYgKGVkaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlkID0gJ2VkaXQtc3VibWl0LWJ1dHRvbidcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQgQ2hhbmdlcydcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZXRhaWxlZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxuXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTmFtZSA9IGRldGFpbGVkVGFza05hbWVEaXYubGFzdENoaWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXRhaWxlZFRhc2tEZXNjcmlwdGlvbkRpdi5sYXN0Q2hpbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZGV0YWlsZWRUYXNrRGF0ZURpdi5sYXN0Q2hpbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IGRldGFpbGVkVGFza1ByaW9yaXR5RGl2Lmxhc3RDaGlsZC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9ICd0YXNrJyArIHRoaXMuaWRcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0YXNrSWQpXG4gICAgICAgICAgICAgICAgdGFzay5jaGlsZHJlblsxXS5maXJzdENoaWxkLnRleHRDb250ZW50ID0gdGhpcy50YXNrTmFtZVxuICAgICAgICAgICAgICAgIHRhc2suY2hpbGRyZW5bMl0uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IHRoaXMuZGF0ZVxuICAgICAgICAgICAgICAgIHRhc2suY2hpbGRyZW5bM10uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IHRoaXMucHJpb3JpdHlcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGRldGFpbGVkVGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGV0YWlsZWRUYXNrQ29udGFpbmVyKVxuXG4gICAgICAgIGRldGFpbGVkVGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGRldGFpbGVkVGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IHthbGxQcm9qZWN0cywgYWxsVGFza3MsIGN1cnJlbnRUYXNrc30gZnJvbSAnLi9EYXRhQXJyYXlzJztcbmltcG9ydCBuYXZGdW5jdGlvbnMgZnJvbSBcIi4vbmF2RnVuY3Rpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tGb3JtKCkge1xuICAgIFxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWUtaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZS1pbnB1dFwiKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5LWlucHV0XCIpO1xuICAgICAgICBjb25zdCBhZGRUb1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10by1wcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSlcbiAgICAgICAgbmV3VGFzay5jcmVhdGVUYXNrRGl2KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKTtcblxuICAgICAgICBpZiAoYWRkVG9Qcm9qZWN0LnZhbHVlICE9ICdub25lJykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KG5hbWUgPT4gbmFtZS5wcm9qZWN0TmFtZSA9PSBhZGRUb1Byb2plY3QudmFsdWUpXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcylcblxuICAgICAgICAgICAgY3VycmVudFRhc2tzLnB1c2gobmV3VGFzaylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrcylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbmF2RnVuY3Rpb25zKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lLWlucHV0XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kZXRhaWxzLWlucHV0XCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3REZXRhaWxzLnZhbHVlKVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgICAgICBcbiAgICAgICAgbmF2RnVuY3Rpb25zKCk7XG4gICAgfSkgICAgICAgIFxufVxuXG5cbmV4cG9ydCB7IHRhc2tGb3JtLCBwcm9qZWN0Rm9ybSB9OyIsImltcG9ydCB7IGFsbFRhc2tzLCBhbGxQcm9qZWN0cywgY3VycmVudFRhc2tzIH0gZnJvbSBcIi4vRGF0YUFycmF5cy5qc1wiO1xuXG5jb25zdCBuYXZGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRvLXByb2plY3QnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IG5vbmVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbm9uZU9wdGlvbi50ZXh0Q29udGVudCA9ICc8Tm9uZT4nO1xuICAgICAgICBub25lT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm9uZScpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vbmVPcHRpb24pXG5cbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIHByb2plY3REaXYuaWQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9qZWN0Q2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpLmNoaWxkcmVuKVxuICAgICAgICBwcm9qZWN0Q2hpbGRyZW4uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXRhc2stbGlzdCcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrTGlzdC50ZXh0Q29udGVudCA9IHByb2plY3QuaWRcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdElkID0+IHByb2plY3RJZC5wcm9qZWN0TmFtZSA9PSBwcm9qZWN0LmlkKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxUYXNrcy5pbmNsdWRlcyhlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLmluZGV4T2YoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudFRhc2tzLmluY2x1ZGVzKGUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrcy5wdXNoKGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tzKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKGUgPT4gZS5jcmVhdGVUYXNrRGl2KCkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrc1xuICAgICAgICAgICAgfSk7ICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVJbmJveCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXRhc2stbGlzdCcpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tMaXN0LnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgICAgICAgICAgY3VycmVudFRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAgICAgICAgIGFsbFRhc2tzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza3MucHVzaChlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgYWxsVGFza3MuZm9yRWFjaChlID0+IGUuY3JlYXRlVGFza0RpdigpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tzKVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUYXNrc1xuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgdXBkYXRlSW5ib3goKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2RnVuY3Rpb25zOyIsImltcG9ydCB7YWxsVGFza3MsIGN1cnJlbnRUYXNrc30gZnJvbSAnLi9EYXRhQXJyYXlzLmpzJztcblxuY29uc3Qgc29ydEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGxldCBwcmlvcml0eVN0YXR1cyA9IDA7XG4gICAgbGV0IGRhdGVTdGF0dXMgPSAwO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LW9yZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRhdGVTdGF0dXMgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpXG4gICAgICAgIGlmIChwcmlvcml0eVN0YXR1cyA9PSAwIHx8IHByaW9yaXR5U3RhdHVzID09IDIpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmlvcml0eVNvcnQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSB7XCJMb3dcIjogMSwgXCJNZWRpdW1cIjogMiwgXCJIaWdoXCI6IDN9XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tzLnNvcnQoKGEsIGIpID0+IChvcmRlcltiLnByaW9yaXR5XSkgLSAob3JkZXJbYS5wcmlvcml0eV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW9yaXR5U29ydCgpO1xuICAgICAgICAgICAgcHJpb3JpdHlTdGF0dXMgPSAxO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChwcmlvcml0eVN0YXR1cyA9PSAxKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gcHJpb3JpdHlTb3J0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyID0ge1wiTG93XCI6IDEsIFwiTWVkaXVtXCI6IDIsIFwiSGlnaFwiOiAzfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrcy5zb3J0KChhLCBiKSA9PiAob3JkZXJbYS5wcmlvcml0eV0pIC0gKG9yZGVyW2IucHJpb3JpdHldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcml0eVNvcnQoKTtcbiAgICAgICAgICAgIHByaW9yaXR5U3RhdHVzID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZVNvcnRJY29uKCk7XG5cbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKGUgPT4gZS5jcmVhdGVUYXNrRGl2KCkpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1vcmRlclwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tzKVxuICAgICAgICBwcmlvcml0eVN0YXR1cyA9IDA7XG5cbiAgICAgICAgaWYgKGRhdGVTdGF0dXMgPT0gMCB8fCBkYXRlU3RhdHVzID09IDIpe1xuICAgICAgICAgICAgZnVuY3Rpb24gZGF0ZVNvcnQoKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tzLnNvcnQoKGEsIGIpID0+IHtyZXR1cm4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSl9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGRhdGVTb3J0KCk7XG4gICAgICAgICAgICBkYXRlU3RhdHVzID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGRhdGVTdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICBmdW5jdGlvbiBkYXRlU29ydCgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza3Muc29ydCgoYSwgYikgPT4ge3JldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKX0pXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZGF0ZVNvcnQoKTtcbiAgICAgICAgICAgIGRhdGVTdGF0dXMgPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlU29ydEljb24oKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgICAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjdXJyZW50VGFza3MuZm9yRWFjaChlID0+IGUuY3JlYXRlVGFza0RpdigpKVxuXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGNoYW5nZVNvcnRJY29uKCkge1xuICAgICAgICBpZiAocHJpb3JpdHlTdGF0dXMgPT0gMCl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW9yZGVyLXNvcnQtaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKCdzb3J0MScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1vcmRlci1zb3J0LWljb25cIikuY2xhc3NMaXN0LnJlbW92ZSgnc29ydDInKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmlvcml0eVN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW9yZGVyLXNvcnQtaWNvblwiKS5jbGFzc0xpc3QuYWRkKCdzb3J0MScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1vcmRlci1zb3J0LWljb25cIikuY2xhc3NMaXN0LnJlbW92ZSgnc29ydDInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHByaW9yaXR5U3RhdHVzID09IDIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktb3JkZXItc29ydC1pY29uXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3NvcnQxJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LW9yZGVyLXNvcnQtaWNvblwiKS5jbGFzc0xpc3QuYWRkKCdzb3J0MicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGVTdGF0dXMgPT0gMCl7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtb3JkZXItc29ydC1pY29uXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3NvcnQxJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtb3JkZXItc29ydC1pY29uXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3NvcnQyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0ZVN0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtb3JkZXItc29ydC1pY29uXCIpLmNsYXNzTGlzdC5hZGQoJ3NvcnQxJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtb3JkZXItc29ydC1pY29uXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3NvcnQyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChkYXRlU3RhdHVzID09IDIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1vcmRlci1zb3J0LWljb25cIikuY2xhc3NMaXN0LnJlbW92ZSgnc29ydDEnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1vcmRlci1zb3J0LWljb25cIikuY2xhc3NMaXN0LmFkZCgnc29ydDInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc29ydEZ1bmN0aW9uO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiXG5pbXBvcnQge2FsbFRhc2tzLCBhbGxQcm9qZWN0cywgY3VycmVudFRhc2tzfSBmcm9tICcuL0RhdGFBcnJheXMuanMnO1xuaW1wb3J0IHt0YXNrRm9ybSwgcHJvamVjdEZvcm19IGZyb20gXCIuL2Zvcm1CdXR0b25zLmpzXCI7XG5pbXBvcnQgc29ydEZ1bmN0aW9uIGZyb20gXCIuL3NvcnRGdW5jdGlvbi5qc1wiO1xuaW1wb3J0IG5hdkZ1bmN0aW9ucyBmcm9tIFwiLi9uYXZGdW5jdGlvbnMuanNcIjtcblxuY29uc3QgdGFzazEgPSBuZXcgVGFzayhcIkZpcnN0IHRhc2tcIiwgXCJhIHRhc2sgZGVzY3JpcHRpb25cIiwgXCIyMDIzLTAxLTEyXCIsIFwiTG93XCIpXG5hbGxUYXNrcy5wdXNoKHRhc2sxKVxuXG5jb25zdCB0YXNrMiA9IG5ldyBUYXNrKFwiU2Vjb25kIHRhc2tcIiwgXCJhIHRhc2sgZGVzY3JpcHRpb25cIiwgXCIyMDIzLTAxLTEzXCIsIFwiTWVkaXVtXCIpXG5hbGxUYXNrcy5wdXNoKHRhc2syKVxuXG5jb25zdCB0YXNrMyA9IG5ldyBUYXNrKFwiVGhpcmQgdGFza1wiLCBcImEgdGFzayBkZXNjcmlwdGlvblwiLCBcIjIwMjMtMDEtMTJcIiwgXCJIaWdoXCIpXG5hbGxUYXNrcy5wdXNoKHRhc2szKVxuXG5jb25zdCB0YXNrNCA9IG5ldyBUYXNrKFwiRm91cnRoIHRhc2tcIiwgXCJhIHRhc2sgZGVzY3JpcHRpb25cIiwgXCIyMDIzLTAxLTE1XCIsIFwiTG93XCIpXG5hbGxUYXNrcy5wdXNoKHRhc2s0KVxuXG5jb25zdCB0YXNrNSA9IG5ldyBUYXNrKFwiRmlmdGggdGFza1wiLCBcImEgdGFzayBkZXNjcmlwdGlvblwiLCBcIjIwMjMtMDEtMTBcIiwgXCJIaWdoXCIpXG5hbGxUYXNrcy5wdXNoKHRhc2s1KVxuXG5cbmFsbFRhc2tzLmZvckVhY2goZSA9PiB7ZS5jcmVhdGVUYXNrRGl2KClcbiAgICBjdXJyZW50VGFza3MucHVzaChlKVxufSk7XG5cbnRhc2tGb3JtKCk7XG5wcm9qZWN0Rm9ybSgpO1xuc29ydEZ1bmN0aW9uKCk7XG5cbmNvbnN0IHByb2oxID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMScsICdhIGRlc2NyaXB0aW9uIGZvciBwcm9qZWN0IDEnKVxuY29uc3QgcHJvajIgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAyJywgJ2EgZGVzY3JpcHRpb24gZm9yIHByb2plY3QgMicpXG5hbGxQcm9qZWN0cy5wdXNoKHByb2oxLCBwcm9qMilcblxucHJvajEuYWRkUHJvamVjdFRhc2tzKHRhc2s1KVxucHJvajEuYWRkUHJvamVjdFRhc2tzKHRhc2syKVxuXG5wcm9qMi5hZGRQcm9qZWN0VGFza3ModGFzazEpXG5wcm9qMi5hZGRQcm9qZWN0VGFza3ModGFzazMpXG5jb25zb2xlLmxvZyhwcm9qMSlcbmNvbnNvbGUubG9nKHByb2oyKVxuXG5uYXZGdW5jdGlvbnMoKTtcblxuXG5cblxuXG4vL2NvbnNvbGUubG9nKGFsbFByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0SWQgPT4gcHJvamVjdElkLnByb2plY3ROYW1lID09ICdwcm9qZWN0MScpKVxuXG4vKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdDEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgcHJvajEucHJvamVjdFRhc2tzLmZvckVhY2goZSA9PiBlLmNyZWF0ZVRhc2tEaXYoKSlcbn0pICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9