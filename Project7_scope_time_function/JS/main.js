var user = "James" // Here I declare a global variable

function ft_create_var()
    {console.log("ft_create_var used")
        var device = "Labtop"
    }

//If statement Assignment
//This function will check to see if the user matches what it should be,and greets you if so.

function ft_login()
    {console.log("ft_create_var used")//Note this action in the log
        if (user == "James") // Check to make sure the users name is correct
            {
                document.getElementById("greeting").innerHTML = "Hello, James";//Display the greeting
            }
}
// Method Assignmet
//Function to display the date and hours passed.
function ft_display_date()
    {console.log("ft_create_var used")
        var  date_full = new Date(), //Assign this variable to the current date.
             date_hours = new Date().getHours(); //find the amount of hours passed today.

        document.getElementById('date').innerHTML = "The date is " + date_full + //Replace the text of the specified HTML element with the time
             ". " + date_hours + " hours have elapsed since the start of the day.";
    }

//Else Assignment
//
function ft_check_age()
    { console.log("ft_create_var used")

        var adult, can_play; //Assigning these empty varables to be filled later 
        adult = document.getElementById('check_age').value //Take a variable and make it equal too the value of the input element

        if (adult == 'yes') // If that value is yes
            {
                can_play = true; //We can play the game
            }
        else
            {
                can_play = false;//If not we cant
            }
        if (can_play == true )//If we can, than tell them to enjoy, but if not, apologize.
            {
                document.getElementById("output_check_age").innerHTML = "Enjoy!!!";
            }
        else 
            {
                document.getElementById("output_check_age").innerHTML = "I'm sorry! You cannot play this game.";
            }
    }

//else if assignment
//This function will check the time of day and return and corresponding statement
function ft_time_function() 
    {
        var time = new Date().getHours() //Get the time in hours
        var reply
        if (time < 12 == time > 0) //If the time is less than 12
            {
                reply = "It is morning time.";//This will be the reply used
            }
        else if (time >= 12 == time <18) //If the time is greater than 12 but less than 6
            {
                reply = "It is afternoon"
            }
        else
            {
                reply = "It is the evening time.";
            }
        document.getElementById("check_time").innerHTML = reply;
    }