        
        while(true) {
          var name = prompt("Please enter your name.");
          if (!name.match("^[a-zA-Z]*$")) {
              alert("Only characters are allowed.");
          } else {
              break;
          }
      }
      while(true) {
          var phoneNum = prompt("Please enter your phone number.");
          if (isNaN(phoneNum) || phoneNum.length != 8) {
              alert("Please enter a valid phone number.");
          } else {
              break;
          }
      }

      while(true) {
          var mobileNum = prompt("Please enter your mobile number.");
          if (!/^(010|011|012|015)\d{8}$/.test(mobileNum)) {
              alert("Please enter a valid mobile number.");
          } else {
              break;
          }
      }

      while(true) {
          var email = prompt("Please enter your email.");
          if (!email.match("^[a-zA-Z0-9_.-]+(@){1}[a-zA-Z0-9-]+(.com){1}$")) {
              alert("invalid email.");
          } else {
              break;
          }
      }

      var color = prompt("Choose between these colors red/green/blue");
      switch(color) {
          case "red":
          case "RED":
              color = "red";
              break;
          case "green":
          case "GREEN":
              color = "green";
              break;
          case "blue":
          case "BLUE":
              color = "blue";
              break;
          default:
              alert("Wrong choice!");
      }

      document.write("<p style='color:" + color + "'> Welcome, </p>" + "<p>" + name + "</p>");
      document.write("<p style='color:" + color + "'> Your telephone number is: </p>" + "<p>" + phoneNum + "</p>");
      document.write("<p style='color:" + color + "'> Your mobile number is: </p>" + "<p>" + mobileNum + "</p>");
      document.write("<p style='color:" + color + "'> Your email is </p>" + "<p>" + email + "</p>");

      var d = new Date();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      document.write("<p style='color:" + color + "'><br><br> Today is: " + "<p>"
          + days[d.getDay()]  + " "
          + months[d.getMonth()] + " "
          + d.getDate() + " "
          + d.getFullYear()
          + "</p>");