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
function EvenAndOut(){}
