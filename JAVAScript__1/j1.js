/*
alert("Welcome to my site");
let username = prompt("plz, Enter U'r Name");
document.write("Welcome "+username);

  function calc(){
      var num1= prompt("Enter first number");
      var num2= prompt("Enter second number");
      function sum(a,b)
      {
        var result = Number(a)+Number(b)
        return result
      }

      alert(sum(num1,num2));
  }

  function temperature(temp) {
    temp= prompt("Enter Temprature");
    let print = temp >= 30 ? "Hot" : "cold";
    alert(print);
  }


  function temperature2(temp, actualTemp ){
    temp= prompt("Enter Temprature");
    actualTemp= prompt("Enter Actual feel Temprature");
    if((temp && actualTemp) > 30){
      alert('Hot');
    } else if ((temp && actualTemp) > 25){
      alert('Normal')
    } else if ((temp && actualTemp) < 25){
      alert('Cold')
    }  else{
      alert("Ambiguous, can’t detect")
    }
  }


  function printOddNums(start, end){
    start = prompt("Enter Start");
    end = prompt("Enter End");
     var oddNums = "<br>Odd Numbers:<br>";
    for(i=start; i<=end; i++){
      if(i % 2 != 0){
        oddNums += i + "<br>";
      }
    }
    document.getElementById("result").innerHTML = oddNums;
  }


  function parse(str) {
    str = prompt("Enter expression");
    var res = Function(`'use strict'; return (${str})`)()
    document.getElementById("exResult").innerHTML = str +"= "+res;
  }

  function parse2(str) {
    str = prompt("Enter expression");
    var res = eval(str)
    document.getElementById("exResult2").innerHTML = str +"= "+res;
  }




  function uerData(username, year)
  {

    while(true){
      username = prompt("Enter U'r name");
        if(isNaN(username)==true){
            break;
        }else{
            alert("Please enter a valid name");
            continue
        }
    }
    while(true){
      year = prompt("Enter U'r Birth year");
        if(isNaN(year)==false && year< 2010){
          var now = new Date()
          var age = now.getYear() - year + 1900
            break;
        }else{
            alert("Please enter a valid year");
            continue
        }
    }

    document.getElementById("data").innerHTML = "Name: " + username +"<br>"+ "Birth year: " + year + "<br>"+"Age: " + age

  }
*/

//hoisting
debugger

console.log(num) //undefind
var num =70;

d()
function d()
{
  console.log("aml")
}

console.log(x)
const x=8;

console.log(y)
let y =7;

