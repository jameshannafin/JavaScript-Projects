
var seconds, frames, slideshow_speed = 1000, this_frame ; //Setting varables

//ft used to set the speed of each frame
function ft_set_ss_speed()
    {
        this_frame = document.getElementById("stg_seconds").value;//Does so by assigning a vairable tu user inputed data
       
    }

//ft used to set length of slideshow (inslids)
function ft_set_ss_frames()
    {
        frames = document.getElementById("stg_frames").value;
    }

//ft ticks downward than shows new slide
function ft_countdown()
    {
        function tick()
            {
                this_frame -=1//Cound down by one millisecond
                document.getElementById("seconds_left").innerHTML = "This frame has " + this_frame + " seconds left";//Display timeline info
                document.getElementById("frames_left").innerHTML =  "This slideshow has " + frames + " frames left";
                var time = setTimeout(tick,slideshow_speed);

                if (this_frame <= 0)
                    {
                        frames -= 1 //count down toward end of slide show
                        ft_show_slide(slideshow_index);//show new slide
                        slideshow_index += 1;//Move to the new position of slide show
                        this_frame = document.getElementById("stg_seconds").value;//reset the length for the new frame
                    }
                if (frames == -1)
                    {
                        alert("The slideshow has ended"); //Message the slide show has ended
                        clearTimeout(time); //clear time for reset 
                        document.getElementById("timer").innerHTML = ";";
                    }
            }
        tick()
    }


///////////////
//SLIDE SHOW//
//////////////

var slideshow_index = 1;
ft_show_slide(slideshow_index);

// Next/previous controls
function ft_switch_slide(n) {
    ft_show_slide(slideshow_index += n); //set the slideshow index to the current slide
}

// Thumbnail image controls
function ft_get_slide(n) {
    ft_show_slide(slideshow_index = n);
}

//show the new slide
function ft_show_slide(n) // n is the slide we want to display
     {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");//Assign the class dots to this varable

        if (n > slides.length) // If the slide is more than the length of the show, go back to 1
            {slideshow_index = 1}

        if (n < 1) // if the slideshow index is less than 1, go to the last slight with .length
            {slideshow_index = slides.length}

        for (i = 0; i < slides.length; i++)// a for loop. statement 1 happens first, once, than the parameter for using code, than code to happen once the block of code is finished
            {slides[i].style.display = "none";} // If a picture is not being used dont display it.

        for (i = 0; i < dots.length; i++)
            {dots[i].className = dots[i].className.replace(" active", "");} // if  dot is being used, make it active

        slides[slideshow_index-1].style.display = "block"; //give the slide its style
        dots[slideshow_index-1].className += " active"; // give the dots their style
    }      