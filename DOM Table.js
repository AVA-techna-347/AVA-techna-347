class InputData {
    constructor(timeElapsed, latitude, longitude, gpsAltitude, bmpSensAlt, bmpSensPressure, bmpSensTemp, digiSensTemp, cssSensTemp, cssSensECO2, cssSensTVOC, UV, aX, aY, aZ, mX, mY, mZ, gX, gY, gZ){
        this.timeElapsed = timeElapsed;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gpsAltitude = gpsAltitude;
        this.bmpSensAlt = bmpSensAlt;
        this.bmpSensPressure = bmpSensPressure;
        this.bmpSensTemp = bmpSensTemp;
        this.digiSensTemp = digiSensTemp;
        this.cssSensTemp = cssSensTemp;
        this.cssSensECO2 = cssSensECO2;
        this.cssSensTVOC = cssSensTVOC;
        this.UV = UV;
        this.aX = aX;
        this.aY = aY;
        this.aZ = aZ;
        this.mX = mX;
        this.mY = mY;
        this.mZ = mZ;
        this.gX = gX;
        this.gY = gY;
        this.gZ = gZ;
    }
}
var getData = function(){
    var loadedData = loadData();
    return loadedData;
}

//Setting data for rows

/** 
 * @param {*} legend
 * @param {*} value
 * @param {*} units
*/

var dataRow = function(legend, value, units){
    msg = "<td id='sector1'>"
    msg += legend; //adds legend to the msg variable
    msg += ":</td><td id='sector2'>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}