//Task 1 
function Hello(){
 let userName = document.getElementById("nameInput").value;  
      if (userName !== "")
      {
        document.getElementById("displayArea").innerText = "Hello," + userName + "!";
      }
      else
      {
        alert("Error")
      }
}


// Task 2
function Square()
{
let num = document.getElementById("numberInput").value
    if (num !=="")
    {
           let square = num * num;
           document.getElementById("ResultArea").innerText = "Result: " + square;
    } 
    else
    {
        alert("Error")
    }
}

//Task 3
function EvenTask() 
{

let num = document.getElementById("evennumberInput").value;
    
let resultElement = document.getElementById("ResultArea2");

    if (num === "") 
    {
        alert("Rəqəm daxil edin!");
        return;
    }


    if (num % 2 === 0) 
    {
        resultElement.innerText = num + " is Even";
        resultElement.style.color = "green";
    } 
    else 
    {
        resultElement.innerText = num + " is Odd";
        resultElement.style.color = "blue";
    }
}


//Task 4
function TwoNumbersTask()
{

}

//Task 5
function SumofTwoNumbers()
{

}

//Task 6
function TemperatureConverter()
{

}



//Task 7
function PositiveNegativ()
{

}