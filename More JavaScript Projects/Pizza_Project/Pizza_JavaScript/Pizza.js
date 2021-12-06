function getReceipt(){
    //This initializes our string so it can ge passed from funct to funct, growing line by line into a full receipt
    var text1 = "<h3> You Ordered:</h3>";
    var runningTotal = 0 ;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");// Make an array out of all the size options
    for (var i = 0; i < sizeArray.length; i++){//For loop that checks to see which option is picked and return that to the var selected size
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if (selectedSize === "Personal Pizza"){ //Find out what the selected size is and how much that will cost
        sizeTotal = 6;
    } else if (selectedSize === 'Small Pizza'){
        sizeTotal = 8;
    } else if (selectedSize === 'Medium Pizza'){
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === 'Extra Large Pizza'){
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;//Start totaling the bill
    console.log(selectedSize + " = $" + sizeTotal + ".00");// Make logs in the console to to debug the project
    console.log("size text1: " + text1);
    console.log('subtotal: $' + runningTotal + ".00");
    //these vars will get passed on to each function
    getTopping(runningTotal,text1);//Run this function
};

function getTopping(runningTotal,text1){
    var toppingTotal = 0;
    var selectedToppings = []; // Create an empty list of selected toppings
    var toppingArray = document.getElementsByClassName("toppings"); // Create an array from the toppings listem in html
    for (var j = 0; j < toppingArray.length;j++){
        if (toppingArray[j].checked){//If a topping is selected, add to the total.
            selectedToppings.push(toppingArray[j].value);
            console.log("selected topping item :("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+ "<br>";//Add on to the receipt
        }
    }

    var toppingCount = selectedToppings.length;
    if (toppingCount > 1){
        toppingTotal = (toppingCount -1); //Add a dollar per topping unless only one topping was picked (free)
    } else {
        toppingTotal = 0
    }

    runningTotal = (runningTotal + toppingTotal);// Add up the totals 
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount+ " topping - 1 free topping = " + "$" + toppingTotal + ".00")
    console.log("topping text1 " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");//More console debugging
    document.getElementById("showText").innerHTML = text1;//Display receipt
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + //Display price
        runningTotal + ".00" + "</strong></h3>";
};