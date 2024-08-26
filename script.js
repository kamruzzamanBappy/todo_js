// select elements & design them to variables

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoul = document.querySelector('#item');

let completeul = document.querySelector('.complete-list ul')

//functions
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoul.appendChild(listItem);
    newTask.value = "";

    //bind the new list item to the incomplete list
}
let bindInCompleteItems = function(taskItem,checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}