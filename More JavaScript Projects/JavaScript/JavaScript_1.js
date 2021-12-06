
//Switch Statements Example-

var the_color_picked = 0;
function color_picked(){
    var list_item = document.getElementsByClassName("list_item");
    list_item[the_color_picked].innerHTML = "Thanks for picking me!";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//create gradient
var grd = ctx.createLinearGradient(0,0,500,400);
grd.addColorStop(0,"red");
grd.addColorStop(.2,"yellow");
grd.addColorStop(.4,"green");
grd.addColorStop(.6,"blue");
grd.addColorStop(.8,"pink");
grd.addColorStop(1,"purple");

//fill
ctx.fillStyle = grd;
ctx.fillRect(0,0,1000,400);

ctx.beginPath();
ctx.arc(c_pos,c_ypos,40,0,2*Math.PI);
ctx.stroke()
}

function ft_color()
    {
        var color_output;
        var colors = document.getElementById("input_color").value;
        var color_string = " is a great color!"

        switch(colors){
            case "red":
                color_output = "red" + color_string;
                the_color_picked = 0;
                c_pos = 20
                c_ypos = 50
            break;

            case "yellow":
                color_output = "yellow" + color_string;
                the_color_picked = 1;
                c_pos = 150
                c_ypos = 50
            break;

            case "green":
                color_output = "green" + color_string;
                the_color_picked = 2;
                c_pos = 250
                c_ypos = 150
            break;

            case "blue":
                color_output = "blue" + color_string;
                the_color_picked = 3;
                c_pos = 400
                c_ypos = 150
            break;

            case "pink":
                color_output = "pink" + color_string;
                the_color_picked = 4;
                c_pos = 500
                c_ypos = 200
            break;

            case "purple":
                color_output = "purple" + color_string;
                the_color_picked = 5;
                c_pos = 620
                c_ypos = 200
            break;

            default:
            color_output = "Please enter a color exactly as written in the above list.";
        }
        document.getElementById("output").innerHTML = color_output;
        color_picked()
    }

