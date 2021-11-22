//Concat Method assignment

//This cunction will combine strings to form a full sentence
function ft_full_sentence()
    {
        var part_1 = "I have";//Assign sentence parts to variables
        var part_2 = " made this";
        var part_3 = "  into a complete";
        var part_4 = " sentence.";
        var whole_sentence = part_1.concat(part_2,part_3,part_4); //concatenate the parts
        document.getElementById("concat").innerHTML = whole_sentence; //Print them
    }

//Slice Method
function ft_slice()
    {
        var sentence = "I like pens more than pencils.";
        var section = sentence.slice(22,29) //Return the slice bewtten these two points
        document.getElementById("slice").innerHTML = "Here is a slice of that sentence:   " + (section);
    }

//To upper case
function ft_uppercase()
    {
        var text = "why?";
        var result = text.toUpperCase(); //Make this text uppercase

        document.getElementById('uppercase').innerHTML = result;
    }

//Search() Method
function ft_search()
    {
        let text = "I am an English major."
        let position = text.search("major");//Search for the character position the phrase

        document.getElementById('search').innerHTML ='The search for \"major\" ends at character: ' + position;
    }

//toString() Method
function ft_make_string()
    {
        var x = 200
        document.getElementById("make_string").innerHTML = "now it is a string!: " +(x.toString()); // convert a number into a string
    }

//toPrecision() method
function ft_make_precise()
    {
        var x = 200.200200200
        document.getElementById("make_precise").innerHTML = "200.200200200 with a precision of 6 digits would be: " + (x.toPrecision(6)); //Make a number a certain length of digits 
    }

//toFixed() method
function ft_make_string_fixed()
    {
        let num = 7.6239
        let n = num.toFixed(2)// convert the number to a string of a fixed amount of characters
        document.getElementById("make_fixed").innerHTML = "7.6239 converted to a fixed string of 3 characters would be:  " + (n);
    }

//valueOf() method
function ft_find_value()
    {
        var number = 37
        document.getElementById('find_value').innerHTML = " The value of 37 is: " + (number.valueOf());//find the value of the number.
    }