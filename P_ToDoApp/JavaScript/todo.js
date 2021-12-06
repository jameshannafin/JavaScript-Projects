


var player = {"name": "Dax", "team": "Knights", "wpn" : "sword" };
 var JSONstring = JSON.stringify(player);
document.getElementById("stts_player").innerHTML = JSONstring;

var enemy = '{"name": "skeleton", "team" : "Neutral", "wpn" : "none"}'
var JSONstring_2 = JSON.parse(enemy);
document.getElementById('stts_enemy').innerHTML = JSONstring_2.name + " is " + JSONstring_2.team

//Local Storage Method
//set the data as a key/value pair to be saved locally in the browser
localStorage.setItem("Bombs","3")
//Then use the key 'name' to return its value, zombie
document.getElementById("player_inventory").innerHTML = "Bombs: " + localStorage.getItem("Bombs")


//JS ToDo App Assignment Step 420 JS

// This function gets the task from input
function get_todos(){
    //This creates an array of tasks that are inputed
    var todos = new Array;
    //this pulls the task that twas saved in the web browser memory
    var todos_str = localStorage.getItem("todo");
    //If the input is not null then JSON.parse will communicate with the web rbowser to make the task a JS object
    if (todos_str !==null) {
        todos = JSON.parse(todos_str);
    }
    return todos
}

// This function adds the inputed task to the get_todos function array
function add(){
    //This takes the inputed task and creates a variable of it
    var task = document.getElementById("task").value;

    var todos = get_todos();
    //This adds a new task tto the end of the array
    todos.push(task);
    //This converts the task input to a JSON string
    localStorage.setItem("todo",JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}

//This function keeps the tasks permanetly displayed on the screen
function show(){
    //this sets the task that was retrieved as a variable
    var todos = get_todos();

    //this sets up each tasl as an unordered list
    var html = "<ul>";
    //This displays a task to the list in the order that it was inputed 
    for (var i = 0; i <todos.length; i++){
        //This also displys the task as a list and creates the button with the "x"*
        html += '<li>' + todos[i] + '<button onclick="remove()" class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //THis displays the task as a list
    document.getElementById('todos').innerHTML = html;

    //This tells the browser how to display the todo array after an item has been removed
    var buttons = document.getElementsByClassName('remove')
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    };
}

//This displays the inputed task when the add item button is clicked
document.getElementById('add').addEventListener("click",add);
//this will keep the inputs displayed permanently on the scren
show()




// function delete_value(){
//     var todos = get_todos();
// delete todos[0]
// }

// document.getElementsByClassName('remove').addEventListener("click",delete_value);




//TTA EXAMPLE
//This creates functionality of removing a todo item from the array
function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    //this lools in the show() how to display a removed item on the screen
    show();
    return false;
}