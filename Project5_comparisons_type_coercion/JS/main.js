
document.write("Here is a coercion example using the document.write method: " + ("100"+100))
document.write('<br></br>')//Line break
document.write("Here I will display the type of data being used in the following value: 1414 " +  (typeof 1414))

function ft_type_find()
    {
        var operand_1 = "Hello"; // Declare variables.
        
        document.getElementById("id_p_1").innerHTML = operand_1 + ": this is a "   + typeof operand_1 ; // print the armour number in the specified element
        console.log("ft_type_find used") //Display what function is being used in the console.
    }

function ft_type_isnan() // check the data type of the operand used 
    {
        var operand_1 = "Good evening";
        
        document.getElementById("id_p_2").innerHTML = isNaN(operand_1) ; // print the armour number in the specified element 
        console.log("ft_type_isnan used")
    }

function ft_type_isnan_2() // check the data type of the operand used 
    {
        var operand_1 = "1313";
        
        document.getElementById("id_p_3").innerHTML = isNaN(operand_1) ; // print the armour number in the specified element 
        console.log("ft_type_isnan_2 used")
    }
    

function ft_test_1() // This will show how dividing by zero makes a mathmatical conundrum
    {
        document.getElementById('test').innerHTML = 0/0;
        console.log("ft_test_1 used")
    }

function ft_display_infinities() //displaying how a compputer can only count so high.
    {
        var z =  1.7976931348623157E+10308
        
        document.getElementById('infinities').innerHTML = "To a computer 8E121 might as well be " + z
            + " and -8E121 would similarly be considered " + -z + "or negative " + z
            console.log("ft_display_infinities used")
    }

function ft_display_boolean() // Basic use of comparisons, which return boolean values.
    {
        document.getElementById('ex_boolean_1').innerHTML = "5 is greater than 6: " + (5>6)
        document.getElementById('ex_boolean_2').innerHTML = "5 is greater than 6: " + (5>6);
        console.log("ft_display_boolean used")
        console.log("5 is greater than 4: " + (5>4))
        console.log("5 is greater than 6: " + (5>6))
    }

function ft_check_equal() // Basic use of comparisons, which return boolean values.
    {
        var z = 5
        
        document.getElementById('check_equal_1').innerHTML = "Check to see if 5 is equal to (3+2): " + (z==(3+2))
        document.getElementById('check_equal_2').innerHTML = "Check to see if 5 is equal to (3+3): " + (z==(3+3))
        console.log("ft_check_equal used")
    }

function ft_check_equal_type() // Basic use of comparisons, which return boolean values.
    {
        var v_1 = 11,
             v_2 = "11",
            v_3 = 11.1,
            v_4 = 11,
            v_5 = "11.1";
        
        document.getElementById('check_equal_type_1').innerHTML = "Check to see if 11 is equal to 11: " +       ((v_1)===(v_4));
        document.getElementById('check_equal_type_2').innerHTML = "Check to see if 11 is equal to \"11.1\": " + ((v_1)===(v_5));
        document.getElementById('check_equal_type_3').innerHTML = "Check to see if 11 is equal to \"11\": " +   ((v_1)===(v_2));
        document.getElementById('check_equal_type_4').innerHTML = "Check to see if 11 is equal to \"11\": " +   ((v_1)===(v_3));
        console.log("ft_check_equal_type used")
    }


    function ft_operators_boolean() //Basic use of logical operatos, which return boolean values.
    {
        var z = 117, y = 228;

        document.getElementById('operators_boolean_1').innerHTML = "Check to see if 117 is equal to 117: " + (z == z);
        document.getElementById('operators_boolean_2').innerHTML = "Check to see if 117 is equal to 117 AND 228:  " + ((z == z) && (z == y))
        document.getElementById('operators_boolean_3').innerHTML = "Check to see if 117 is equal to 117 OR 228: " + (z==z)||(z==y)
        document.getElementById('operators_boolean_4').innerHTML = "Check to see if 117 is NOT equal to 228: " +      !(z == y)
        document.getElementById('operators_boolean_5').innerHTML = "Check to see if 117 is NOT equal to 117: " +      !(z == z)
        console.log("ft_operators_boolean used");
    }

function ft_display_author()
    {
        var title = "James", age = 25;

        document.getElementById('author').innerHTML = ("This document was created by ") + (title) + (", ") + (age)
    }
