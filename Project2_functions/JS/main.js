

function changeColor(color1,color2)
     {
        var para_1= document.getElementById('para_1');
        var para_2= document.getElementById('para_2');
        para_1.style.color = color1;// change p1 color
        para_2.style.color = color2;//change p2 color
    }

function funConcatenate()
    {
        var sentence = 'I am learning';//This will be used later as what will replace the inner HTML
        sentence += "a lot from this book!";//Here, we are adding on to that sentence.
        document.getElementById('concatenate').innerHTML = sentence;// This is where we are making the switch.
    }