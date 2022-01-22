/*
var TipOfTheDay = [
  "Be Nice to Yourself",
  "Breathe Deep",
  "Connect With Others",
  "Write Down Ways to Relax",
  "Be Supportive",
  "Take Small Steps",
  "Get plenty of sunlight",
  "Do something you enjoy",
  "Do things for others",
  "Ask for help"
];

function RandomTip() {
  var rnd = Math.floor((Math.random() * 10))
  alert("Tip Of The Day: " + TipOfTheDay[rnd])
}
RandomTip()


function currentDate() {
  var  my_time = new Date()
  document.getElementById("date").innerHTML =my_time;
}

function DT() {
  var d = new Date();
  document.getElementById("dt").innerHTML =d + "<br>" + d.toLocaleDateString('ar-EG') + "<br>" + d.toString('ar-EG') + "<br>" + d.toDateString('ar-EG') + "<br>";
}


function EmailValidation() {
  var email = prompt("enter email");
  var searchPattern = new RegExp(".@.", "i");
  if(searchPattern.test(email))
  {
    alert("email is valid");
  }else
  {
    alert("email is not valid");
  }
}
EmailValidation()


function EmailValidation2() {
  var email = prompt("enter email");
  if(email.match("^[a-zA-Z0-9_.-]+(@){1}[a-zA-Z0-9-]+(.com){1}$"))
  {
    alert("email is valid");
  }else
  {
    alert("email is not valid");
  }
}
EmailValidation2()
*/

while(true) {
  var email = prompt("Please enter your email.");
  if (!email.match("^[a-zA-Z0-9_.-]+(@){1}[a-zA-Z0-9-]+(.com){1}$")) {
      alert("invalid email.");
  } else {
      break;
  }
}


/*

function AMD() {
  var num = [];
  num.push(Number(prompt("enter num1")));
  num.push(Number(prompt("enter num2")));
  num.push(Number(prompt("enter num3")));

  sum = num[0] + num[1] + num[2];
  mult = num[0] * num[1] * num[2];
  div = num[0] / num[1] / num[2];

  document.write("<hr>" + "<h1>Adding -- Multiplaying -- and deviding 3 values</h1>" + "<hr>");
  document.write("<p style=color:red>sum of the 3 values</p>" + num[0] + "+" + num[1] + "+" + num[2] + "=" + sum )
  document.write("<p style=color:red>Multiplaying of the 3 values</p>" + num[0] + "*" + num[1] + "*" + num[2] + "=" + mult)
  document.write("<p style=color:red>deviding of the 3 values</p>" + num[0] + "/" + num[1] + "/" + num[2] + "=" + div)
}
AMD()



function circlee() {
  var r = Number(prompt("what is the raduis of circle", "Type raduis Here"));
  var result = Math. PI *r * r;
  alert("total area of circle is: " + result)
}
circlee()


function square() {
  var r = Number(prompt("what is the value you want to calculate its square root", "Type your value Here"));
  var result = Math.sqrt(r);
  alert("square root of "+ r + " is "+result)
}
square()



*/