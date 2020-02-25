//storing document elements in variables
btn = document.getElementById("btn");
result = document.getElementById("result");
num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
num3 = document.getElementById("num3");
num4 = document.getElementById("num4");
num5 = document.getElementById("num5");
num6 = document.getElementById("num6");

//defining the function responsable to generate the numbers
function calc() {     
    //creates an array to store the numbers
    arrayValores = [];
    //loop until 6 different numbers are selected
    i = 1;
    while (i<7) {
        //generates random number between 1 and 60
        valorAleatorio = Math.floor(Math.random() * 60) + 1;
            //checks if the random number has already been put into the array
            if (arrayValores.includes(valorAleatorio)) {        
            } else {
                arrayValores.push(valorAleatorio);
                i++;
            }            
    }
    //sorts array numbers from the lowest to the highest
    arrayValores.sort(function(a,b) {return a-b;});
    //outputs the numbers to users
    num1.innerHTML = arrayValores[0];
    num2.innerHTML = arrayValores[1];
    num3.innerHTML = arrayValores[2];
    num4.innerHTML = arrayValores[3];
    num5.innerHTML = arrayValores[4];
    num6.innerHTML = arrayValores[5];   
}

btn.addEventListener("click", calc);

