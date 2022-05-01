//Makayla
var makaylaLogon = ["Makayla", "Barclay", 1347];
            
function validation(){

    //Variables

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("badgeNum").value;
    var fullName = firstName + " " + lastName;

    //Validation parameters

    if(firstName == makaylaLogon[0] && lastName == makaylaLogon[1] && badgeNum == makaylaLogon[2]){
        document.getElementById("statImage").innerHTML = '<img src = "blue access granted.png">';
        document.getElementById("statDisplay").innerHTML = "Seceret login confirmed";
        function delay(){
            var currTime = 1;
            for (var i = 1; i <= 1; i++){
                setTimeout(function(){
                    if (i >= 1) {

                        //proccess to delay

                        alert("Welcome, Makayla");
                        location.replace("Website Directory.html");
                    }
                    currTime = currTime - 1;
                }, 1000 * i);
            }
        }
        delay();
    } else if (firstName.length > 20 || lastName.length > 20){
        
        //name invalidation parameters
        
        document.getElementById("statImage").innerHTML = '<img src = "red access denied x 2.jpg">';
        document.getElementById("statDisplay").innerHTML = "Invalid Name:  Name cannot be more than 20 characters";
    } else if (badgeNum > 999 || badgeNum < 100){
        
        //badge number invalidation parameters
        
        document.getElementById("statImage").innerHTML = '<img src = "red access denied x 2.jpg">';
        document.getElementById("statDisplay").innerHTML = "Invalid Identification: <BR>Use 3 or less numerical digits in the badge number section";
    } else {

        //If valid

        

        document.getElementById("statImage").innerHTML = '<img src = "blue access granted.png">';
        document.getElementById("statDisplay").innerHTML = "Access Granted";
        function delay(){
            var currTime = 1;
            for (var i = 1; i <= 1; i++){
                setTimeout(function(){
                    if (i >= 1) {

                        //proccess to delay

                        alert("Welcome, " + fullName);
                        location.replace("Efficiency Assignment.html");
                    }
                    currTime = currTime - 1;
                }, 1000 * i);
            }
        }
        delay();
    }
};
