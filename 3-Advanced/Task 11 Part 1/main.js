let Tasker = {
    construct: function(){
        this.selectElements()
        this.bindEvents()
        this.scanTasklist()
    },
    selectElements: function(){
        this.taskInput = document.getElementById('task-input')
        this.taskList = document.getElementById('tasks')
        this.taskListChildren = this.taskList.children
        this.addButton = document.getElementById('add-task-btn')
        this.errorMessage = document.getElementById('error')
    },
    bindEvents: function(){
        this.addButton.onclick = this.addTask.bind(this)

        this.taskInput.onkeypress = this.enterKey.bind(this)
    },
    scanTasklist: function(){
        let taskListItem, checkbox, deleteBtn;

        for(let i =0; i< this.taskListChildren.length;i++){
            taskListItem = this.taskListChildren[i]

            checkbox = taskListItem.getElementsByTagName('input')[0]
            deleteBtn = taskListItem.getElementsByTagName('button')[0]

            checkbox.onclick = this.completeTask.bind(this, taskListItem, checkbox)
            deleteBtn.onclick = this.deleteTask.bind(this, i)
        }
    },
    buildTask: function(){
        let taskListItem, taskCheckbox, taskButton, taskValue, taskTrash;
        taskListItem = document.createElement('li')
        taskListItem.setAttribute('class', 'task')

        taskCheckbox = document.createElement('input')
        taskCheckbox.setAttribute('type', 'checkbox')

        taskButton = document.createElement('button')

        taskTrash = document.createElement('i')
        taskTrash.setAttribute('class', 'fa fa-trash')

        taskValue = document.createTextNode(this.taskInput.value)

        taskListItem.appendChild(taskCheckbox)
        taskListItem.appendChild(taskValue)
        taskListItem.appendChild(taskButton)
        taskButton.appendChild(taskTrash)

        this.taskList.appendChild(taskListItem)

    },
    completeTask: function(taskListItem, checkbox){
        if(checkbox.checked){
            taskListItem.className = 'task completed'
        }
        else{
            this.incompleteTask(taskListItem);
        }
    },
    incompleteTask: function(taskListItem){
        taskListItem.className = 'task'
    },
    addTask: function(){
        let taskValue = this.taskInput.value;
        this.errorMessage.style.display = 'none';

        if(taskValue === ''){
            this.error()
        }else{
            this.buildTask()
            this.taskInput.value = ''
            this.scanTasklist()
        }
            
    },
    deleteTask: function(i){
        this.taskListChildren[i].remove()
        this.scanTasklist()
    },
    enterKey: function(event){
        if(event.keyCode === 13 || event.which === 13){
            this.addTask();
        }
    },
    error: function(){
        this.errorMessage.style.display = 'block'
    }

};