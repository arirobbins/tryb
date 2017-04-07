// angular.module('mesgc', ['firebase', 'ngRoute', 'ngSanitize']);

//state

var state = {
    lists: {Morning: [], Afternoon: [], Evening: []},
    tasks: [],
    chores: [],
    rewards: []

}

//state functions

function addListToState(listItem){
    if (listItem.length > 0){
        if (listItem in state.lists){
            alert('This task list already exists, please try again.')
        }
        else {
            state.lists[listItem] = [];
            addTaskListsToOptionSet();
            console.log(`List item '${listItem}' has been added.`)
        }
    }
    else {
        alert('You must add an item to proceed!')
    }
}


//other functions

function toggleTasksHidden() {
    $('#js-tasks').toggleClass('hidden');
}

function toggleChoresHidden(){
    $('#js-chores').toggleClass('hidden');
}

function toggleRewardsHidden(){
    $('#js-rewards').toggleClass('hidden');
}

function toggleChildrenHidden(){
    $("#js-children").toggleClass('hidden');
}


function tasksToggle(){
    $('#js-chores-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-rewards-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-children-label').toggle("drop", {direction: "left"}, "slow");
}

function choresToggle(){
    $('#js-tasks-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-rewards-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-children-label').toggle("drop", {direction: "left"}, "slow");
}

function rewardsToggle(){
    $('#js-chores-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-tasks-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-children-label').toggle("drop", {direction: "left"}, "slow");
}

function childrenToggle(){
    $('#js-chores-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-tasks-label').toggle("drop", {direction: "left"}, "slow");
    $('#js-rewards-label').toggle("drop", {direction: "left"}, "slow");
}

function tasksOnClick(){
    $('#js-tasks-label').on('click', function (){
        if ($('#js-tasks').hasClass('hidden')){
            toggleTasksHidden();
            tasksToggle();
        }
        else {
            toggleTasksHidden()
            tasksToggle();
        }
    });
}

function choresOnClick(){
    $('#js-chores-label').on('click', function (){
        if ($('#js-chores').hasClass('hidden')){
            toggleChoresHidden();
            choresToggle();
        }
        else {
            toggleChoresHidden();
            choresToggle();
        }
    });
}

function rewardsOnClick(){
    $('#js-rewards-label').on('click', function (){
        if ($('#js-rewards').hasClass('hidden')){
            toggleRewardsHidden();
            rewardsToggle();
        }
        else {
            toggleRewardsHidden();
            rewardsToggle();
        }
    });
}

function childrenOnClick(){
    $('#js-children-label').on('click', function (){
        if ($('#js-children').hasClass('hidden')){
            toggleChildrenHidden();
            childrenToggle();
        }
        else {
            toggleChildrenHidden();
            childrenToggle();
        }
    });
}

function addListOnClick() {
    $("#js-toggle-list i").on("click", function(){
        $("#js-list-submit").toggleClass("hidden");
        $("#js-toggle-list").toggleClass("hidden");
        $("#js-add-task").toggleClass("hidden");
    });
}
function submitListOnClick(){
    $("#js-list-submit i").on("click", function(){
        // console.log($("#js-list-input").val());
        addListToState($("#js-list-input").val());
        $("#js-list-input").val("");
        $("#js-list-submit").toggleClass("hidden");
        $("#js-toggle-list").toggleClass("hidden");
        $("#js-add-task").toggleClass("hidden");
    });
}

function addTaskListsToOptionSet(){
    var taskListItems = Object.keys(state.lists);
    var title = "<option selected disabled>Select a List</option>";
    var menuOptions = taskListItems.map(function (val) {
        return `<option value='${val}'>${val}</option>`;
    });

    $("#task-list-optionset").html(title + menuOptions);
}

function addTaskOnClick(){
    $("#js-add-task i").on("click", function(){
        // $("#js-list-input").toggleClass("hidden");
        // // $("#js-list-submit").toggleClass("hidden");
        $("#js-toggle-list").toggleClass("hidden");
        // $("#js-add-task").toggleClass("hidden");
        $('#js-task-list').toggleClass("hidden");
    });
}


function main() {
    tasksOnClick();
    choresOnClick();
    rewardsOnClick();
    childrenOnClick();
    addListOnClick();
    submitListOnClick();
    addTaskOnClick();
}


$(document).ready(main);