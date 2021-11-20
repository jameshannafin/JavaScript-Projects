
//Specific Math Examples

//This function will perform an additon equation.
function ft_add()   // this is a new finction
    {
        var addition = 2+2; // Here is where we assign the example-specific variable.
        document.getElementById("math_1").innerHTML = "2 + 2 = " + addition; // this is how we decide  where to replace the html
    }

//This function will perform an subtraction equation.
function ft_sub()
    {
        var subtraction = 5 - 2;
        document.getElementById('math_2').innerHTML = "5 - 2 = " + subtraction
    }

//This function will perform a multiplication equation.
function ft_mul()
    {
        var multiplication = 9 * 9;
        document.getElementById('math_3').innerHTML = "9 x 9 = " + multiplication
    }

//This function will perform a division equation.
function ft_div()
    {
        var division = 10 / 2;
        document.getElementById("math_4").innerHTML = "10 / 2 = " + division
    }

//This function will find the remainder of a division.
function ft_mod()
    {
        var remainder = 40 % 6;
        document.getElementById('math_5').innerHTML = "When you divide 40 by 6 you have a remainder of : " + remainder
    }

//This function will perform two mathmatical operations.
function ft_add_mul()
    {
        var add_and_multiply = (2+2) * 4
        document.getElementById('math_6').innerHTML = "2 + 2 than multiplied by 4 is  " + add_and_multiply
    }

//This is an example of how to find the negative of a number
function ft_neg()
    {
        var x = 12; // Setting a variable as an example number to work with
        document.getElementById("math_7").innerHTML = "The negative of 12 is " + -x;// Attaching the minus sign to the variable will give it a negative value.
    }

//This function will increment the variable up by 1.
function ft_inc_pos()
    {
        var x = 7;
        x++;
        document.getElementById("math_8").innerHTML = " 7 incremented up by 1 would be " + x;
    }

//This function will increment the variable down by 1.
function ft_inc_neg()
{
    var x = 7;
    x--;
    document.getElementById("math_9").innerHTML = " 7 incremented down by 1 would be " + x;
}

//This function will return a random number from 0-3
function ft_random()
    {
        x = (Math.random()*3)// Using a math object to find a random number
        document.getElementById("math_10").innerHTML = " Here is a random number between 0 and 3: " + x;
    }

// This function will round the number assigned.
function ft_rnd_up()
    {
        x = (Math.round(86.6))// math object to round the number to nearest interger.
        document.getElementById("math_11").innerHTML = " 86 rounded up to the next whole number (interger)  is " + x;
    }

