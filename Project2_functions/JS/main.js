

function changeColor(color1,color2)//This function will add some color to the text
     {
        var para_1= document.getElementById('para_1');// assigning variables to call momentarily.
        var para_2= document.getElementById('para_2');
        para_1.style.color = color1;// change p1 color
        para_2.style.color = color2;//change p2 color
    }

function funConcatenate()//this function will switch the text of an element.
    {
        var sentence = 'I am learning';//This will be used later as what will replace the inner HTML
        sentence += "a lot from this book!";//Here, we are adding on to that sentence.
        document.getElementById('concatenate').innerHTML = sentence;// This is where we are making the switch.
    }

// The next function will be of my own design.
function ft_display()//This ft will add the source element into the ID'd div.
    {
        var picture = '<img  src="./Images/thumbnail_9.png" alt="Picture of Earth"></img>'
        document.getElementById('pic_earth').innerHTML = picture;
    }

//Mathmatical Operators Ex ***UNUSED
function ft_addition()
    {
        var addition = 2+2;
        document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
    }