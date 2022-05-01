function countdown() {
    var cntDown = 12;
    var i = 1;
    while (i < 14){
        if (i == 13) {

            //Liftoff

            setTimeout(function () {
                document.getElementById("image1").innerHTML = '<img id="image" src="blue warning icon.png" width="100px">';
                document.getElementById("display1").innerHTML = "Liftoff Confirmed";

                //Status bar

                document.getElementById("image2").innerHTML = '<img src = "Yellow warning icon.png" width="100">'
                document.getElementById("display2").innerHTML = "Launched"
                function delay(){
                    var currTime = 1;
                    for (var i = 1; i <= 1; i++){
                        setTimeout(function(){
                            if (i >= 1) {
        
                                //proccess to delay
        
                                location.replace("DOM Table.html");
                            }
                            currTime = currTime - 1;
                        }, 1000 * i);
                    }
                }
                delay();
            }, 1000 * i);

            //5 secs remaining

        } else if (i > 7) {
            setTimeout(function () {
                document.getElementById("image1").innerHTML = '<img src="Yellow warning icon.png" width = "100px">';
                document.getElementById("display1").innerHTML = "!! Liftoff in T - " + cntDown + "s !!";
                document.getElementById("image2").innerHTML = '<img src="Yellow warning icon.png" width = "100px" align="center">';
                document.getElementById("display2").innerHTML = "Warning: Half way to launch";
                cntDown--;
            }, 1000 * i);

            //10 secs remaining

        } else if (i > 2) {
            setTimeout(function () {
                document.getElementById("image1").innerHTML = '<img src ="none" width = "100" height="100">';
                document.getElementById("display1").innerHTML = "Liftoff in T - " + cntDown + "s";
                cntDown--;
            }, 1000 * i);

            //Countdown indicator

        } else {
            setTimeout(function() {
                document.getElementById("image1").innerHTML = '<img src ="none" width = "100" height="100">';
                document.getElementById("display1").innerHTML = "Initiating Countdown";
                cntDown--;
            }, 1000 * i);
        }
        i = i + 1;
    }
}
