//Height Check
function ft_ride()
    {
        var height, can_ride; // Declare variables
        height = document.getElementById('height').value //Changes the variable to that put in the input field.
        can_ride = (height < 52) ? "You are too short to ride.":"You are tall enough to ride."; //Determines if the inputed value will suffice 
        document.getElementById("ride").innerHTML = (can_ride) ; // Display the message.
    }

//Age check
function ft_vote()
    {
        var age, can_vote;
        age = document.getElementById('age').value
        can_vote = (age < 18) ? "You are too young to vote.":"You are old enough to vote.";
        document.getElementById("vote").innerHTML = (can_vote) ;
    }

///////////////////////////////////////
//Keywords

//Keywords TTA Ex
function vehicle(make,model,year,color)
    {
        this.vehicle_make = make;
        this.vehicle_model = model;
        this.vehicle_year = year;
        this.vehicle_color = color;
    }

var jack = new vehicle("Dodge","Viper",2020,"red");
var emily = new vehicle("Jeep", "Trail Hawk", 2019,"White and Black");
var erik = new vehicle("Ford","Pinto",1971,"Mustard");
function ft_function()
    {
        document.getElementById("keywords_and_constructors").innerHTML =
            "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + 
            " manufactured in " + erik.vehicle_year + ".";
    }

///////////////////////////////////////
// Keywords: New

var npc_zombie = new npc("Infection", "Hummanoid", 100) //Add class object
var npc_spore // Define a new variable for later use
function ft_new_enemy() //Add in the new class object
    {
        
        npc_spore = new npc("Infection", "Crawler", 20)
    }

//DThis function will create a new class and delcare it characteristics.
function npc (team,type,health) 
    {
        this.npc_team = team
        this.npc_type = type
        this.npc_health = health
    }

//This function will display the health value of zombies.
function ft_display_health_zombie() 
    {
        document.getElementById("zombie").innerHTML = npc_zombie.npc_health;
    }

function ft_display_health_spore()
    {
        document.getElementById("spore").innerHTML = npc_spore.npc_health;
    }


///////////////////////////////////////
//Keywords: Object Constructor first attemt

var marine = new Object();//Creating a new object.
marine.health = 150

function ft_display_health_marine()
    {
        document.getElementById("marine").innerHTML = marine.health;
    }


///////////////////////////////////////
//Nested functions

//TTA EX
function ft_count()
    {
        document.getElementById("nested_function").innerHTML = count();
        function count()
            {
                var starting_point = 9;
                function plus_one()
                    {
                        starting_point += 1;
                    }
                plus_one();
                return starting_point;
            }
    }


