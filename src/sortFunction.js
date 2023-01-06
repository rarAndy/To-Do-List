import {allTasks, currentTasks} from './DataArrays.js';

const sortFunction = function () {
    
    let priorityStatus = 0;
    let dateStatus = 0;

    document.querySelector('.priority-order').addEventListener('click', () => {
        dateStatus = 0;
        console.log(currentTasks)
        if (priorityStatus == 0 || priorityStatus == 2){
            
            function prioritySort() {
                const order = {"Low": 1, "Medium": 2, "High": 3}
                currentTasks.sort((a, b) => (order[b.priority]) - (order[a.priority]));
            }
            prioritySort();
            priorityStatus = 1;
            
        }

        else if (priorityStatus == 1){
            
            function prioritySort() {
                const order = {"Low": 1, "Medium": 2, "High": 3}
                currentTasks.sort((a, b) => (order[a.priority]) - (order[b.priority]));
            }
            prioritySort();
            priorityStatus = 2;
        }

        changeSortIcon();

        const taskList = document.querySelector('#task-list');
        taskList.textContent = '';
        currentTasks.forEach(e => e.createTaskDiv())
    })

    document.querySelector(".date-order").addEventListener('click', () => {
        console.log(currentTasks)
        priorityStatus = 0;

        if (dateStatus == 0 || dateStatus == 2){
            function dateSort() {
                currentTasks.sort((a, b) => {return new Date(a.date) - new Date(b.date)})
            } 
            dateSort();
            dateStatus = 1;
        }

        else if (dateStatus == 1){
            function dateSort() {
                currentTasks.sort((a, b) => {return new Date(b.date) - new Date(a.date)})
            } 
            dateSort();
            dateStatus = 2;
        }

        changeSortIcon();
        
        const taskList = document.querySelector('#task-list');
        taskList.textContent = '';
        currentTasks.forEach(e => e.createTaskDiv())

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

export default sortFunction;
