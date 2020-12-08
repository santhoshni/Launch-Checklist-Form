// Write your JavaScript code here!

 window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            // Add HTML that includes the JSON data
            div.innerHTML = `
                <h2 id="missionDest">Mission Destination</h2>
                <ol start="1">
                <li>Name ${json[4].name}</li>
                <li>Diameter ${json[4].diameter}</li>
                <li>Star ${json[4].star}</li>
                <li>Distance  from earth ${json[4].distance}</li>
                <li>moons ${json[4].moons}</li>

                </ol>
                <img src=${json[4].image} height=250></img>
            `;
        });
    });
  });

window.addEventListener("load", function() {

  let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelValue = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName.value === "" || fuelValue.value == 0 ||  cargoMass.value == 0) {
            alert("All fields are required!");
            return false;
         }
         else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelValue.value)||isNaN(cargoMass.value)) {

            alert("Make sure to enter valid information for each field");
            return false;

         }
         else {
            const div = document.getElementById("launchStatusCheck");
            document.getElementById("pilotStatus").innerHTML = "Pilot "+pilotName.value + " is ready for launch";
                document.getElementById("copilotStatus").innerHTML ="Co-Pilot "+ copilotName.value + " is ready for launch";
            //const div = document.getElementById("shuttleNotReady");

           /* if(Number(fuelValue.value) <= 890)
            {

            div.innerHTML = `
                    <h2 id="missionDest" style="color:red" >Shuttle Not Ready for Launch</h2>
                    <ol start="1">
                        <li>Pilot ${pilotName.value} is ready for launch</li>
                        <li>Co-Pilot ${copilotName.value} is ready for launch</li>
                        <li>Fuel Level too low for launch</li>
                        <li>Cargo mass low enough for launch</li>

                    </ol>`
                `;
            } else*/

             if (Number(fuelValue.value) <= 10000 || Number(cargoMass.value) >= 10000){
                                
                document.getElementById("launchStatus").style.color = "red";
                let div = document.getElementById('faultyItems');
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                //document.getElementById("pilotStatus").innerHTML = "Pilot "+pilotName.value + " is ready for launch";
                //document.getElementById("copilotStatus").innerHTML ="Co-Pilot "+ copilotName.value + " is ready for launch";
                if (Number(fuelValue.value) <= 10000){
                    document.getElementById("fuelStatus").innerHTML = "Fuel Level too low for launch";
                
                }else{
                    document.getElementById("fuelStatus").innerHTML = "Fuel Level is good for launch";
                }
                if( Number(cargoMass.value) >= 10000){
                    document.getElementById("cargoStatus").innerHTML = "Cargo mass is high for launch";
                }else{
                    document.getElementById("cargoStatus").innerHTML = "Cargo mass is good enough for launch";   
                }
                div.style.visibility = 'visible';
            } else {
                
                document.getElementById("launchStatus").style.color = "green";
                let div = document.getElementById('faultyItems');
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                //document.getElementById("pilotStatus").innerHTML = "Pilot "+pilotName.value + " is ready for launch";
                //document.getElementById("copilotStatus").innerHTML ="Co-Pilot "+ copilotName.value + " is ready for launch";
                document.getElementById("fuelStatus").innerHTML = "Fuel Level is good for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass is good enough for launch"; 
                div.style.visibility = 'visible';
            }

        }
    });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
