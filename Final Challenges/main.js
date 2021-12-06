

function checkData() {
    //Get the value of the input field with id= phone
    let x = document.getElementById("phone").value;
    //If x is not a number or less than one or greater than 10
    let check_text_2;
    if (isNaN(x) || x == "" || x.length != 10 ){
        check_text_2 = "Input not valid";
    } else {
        check_text_2 =  "Input is good";
    }

    let y = document.getElementById('name').value
   

    


    
    if (y == "") {
        check_text_1 = "Input not valid";
        console.log("Input not valid")
    } else {
        check_text_1 = "Input is good";
        console.log("Input is good")
        console.log(y)
    }
    
    document.getElementById("check_phone").innerHTML = check_text_2;
    document.getElementById("check_name").innerHTML = check_text_1;
    if (check_text_1 == "Input not valid" || check_text_2 == "Input not valid")
    {
        alert("Please fill out all fields correctly")
    }
    else
    document.getElementById('confirm').innerHTML = "Form Sumbmitted"

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//   Slide Show
// 
// 
