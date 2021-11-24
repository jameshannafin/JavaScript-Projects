var creator = 'James Hannafin' //Declare variable

//The following loop will start with 0 and move up by 1 reaches 10
function call_loop() // Creating a function
    {
        var t = 0
        
        while(t<10) //While t is less than ten
            {
                t +=1;// add one to t
            }
        document.getElementById('while').innerHTML = t//Print this at the specified ID
        
    }

//The following function will use the length keyword to find the length of a sentence.
function find_length()
    {
        var x = document.getElementById('length').innerHTML // First capture what is in the element as a variable.
        document.getElementById('length').innerHTML = x + "  :  " + (x.length);// THhan replace it with itself in addition to the length of itself using the .length keyword.
    }

var list_settings = ["Moon Base", "Space Ship", "City", "Caves"];//Heres a simple array
var place = "";
var y;

//the followung will display all the items on a list
function for_loop()
    {
        for(y = 0; y < list_settings.length; y++)//A for loop. set y to 0- if y is less than length of the list add one to y.
            {
                place += list_settings[y] + '<br>'; //use it here to display all settings .
            }
        document.getElementById('list_settings').innerHTML = place;
    }

//the following will finish a statement using an item from an array
function cat_story()
    {
        var cat_path = [];
        cat_path[0] = "eat";//An alternate form of making ana array.
        cat_path[1] = "play";
        cat_path[2] = "sleep";

        document.getElementById('cat').innerHTML = 'The cat decided to ' + cat_path[1] + '.'; // Pick a specic part of the array and use it to finish the story
        
    }

    //From here on, i am going to try to use the coding format i see in all these examples rather than what im used to
    //const
    zombie = {hp:100,ap:0, spd:3, team:"infection"}; //creating an object without Var???
    var player_wpn = 'fists';
    var player_hp = 100;
    let armour = 50;
  

//This will show the player stats
function show_stats_player()
    {
        document.getElementById('player').innerHTML = "Weapon Equipped: " + (player_wpn) + " HP: " + (player_hp) + " AP: " + (armour)
    }
//This will show the enemy stats
function show_stats(){
        document.getElementById('stats').innerHTML = "Zombie Stats: <br>" + 
            "Team: " + (zombie.team) + "<br>" + "HP: " + (zombie.hp) + "<br>"+
            "AP: " + (zombie.ap) + "<br>"+ "Speed " + (zombie.spd) + "<br>";
             
}
//This is when the player is attacked
function player_attacked()
    {
       if(armour >= 5) //If the player has armour, damage that, than get the health
       {
        armour -=5
       }
       else{
       player_hp -= 10;
       }
    show_stats_player() // Update stats
    }

//initialize your encounter with the enemy
function create_enemy(){
    document.getElementById('wpn').innerHTML = "Weapon Equipped: " + (player_wpn)
    show_stats()
    show_stats_player()

    //Trying to figure out how to delete a button after use
    }

function attack(){
    damage = 1
    if (player_wpn == 'sword') {
        damage = 20;
    }
    else {
        damage = 5;
    }

    if (damage >=  zombie.hp) {///If the zombies health is to low, adjust damage so its HP doesnt go negative
        damage = zombie.hp;
        zombie.hp -= damage
    }
    else{
        zombie.hp -= damage
        player_attacked() // Use a function
    }
    show_stats()
    show_stats_player()
    
    
}

//THis is a simple way to change weapons, i want to replace it with a list if the project gives me the opprtunity.
function change_weapon(){
    if (player_wpn == "sword"){
        player_wpn = 'fists'
    }
    else{
        player_wpn = 'sword'
    }

    document.getElementById('wpn').innerHTML = "Weapon Equipped: " + (player_wpn)
    show_stats_player()

if (player_wpn != 'fists')
{
    return//
}
else
{
    alert("No weapon is equiped")//Alert the player they have no weapon equipped
}

}

///All the previous code started as 'let' attempts, couldnt figure it out..
//Let exampple

var tool = 'crowbar'

 // THe following will 'let' the tool = hammer for this.
function let_example()
{
    let tool = "hammer"
    document.getElementById('tool').innerHTML = "Tool Equipped: " + (tool)

}

////////////////
//GAME OVER////
////////////// (Phew)


//create object with 'let'
let enemy = {
    title: "Skeleton",
    hp: 60,
    wpn: "Sword",

};

//Find properties of a nobject for its description
function new_enemy(){
document.getElementById('enemy_type').innerHTML = "This enemy is a " + (enemy.title) + " with a " + (enemy.wpn);
}



//Break and Continue

var loop_action = "break"

//This will switch the action of the loop
function switch_loop_action()
{
    if (loop_action == "break")
        {loop_action = 'continue'}
    else
        {loop_action = 'break';}

    document.getElementById('loop_action').innerHTML = loop_action
}


function run_forloop()
    {
        var text = ""

        if (loop_action == 'break'){ //this loop will break 'stop' once it reaches 3 
            for (let i = 0; i < 10; i++){
                if (i===3){break;}
                text += "This for loop is made to break at " + (i) + '<br>'
            }
        }
        else if (loop_action == 'continue'){// this one will continue or skip over 3
            for (let i = 0; i < 10; i++){
                if (i===3){continue;}
                text += "This for loop is meant to skip over the third line" + (i) + '<br>'
    
            }
        }

        document.getElementById("break").innerHTML = text;
    }