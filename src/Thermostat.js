var Thermostat = function() {
    this.currentTemperature = 20;
    this.minimumTemperature = 10;
    this.powerSavingModeOn = 25;
    this.powerSavingModeOff = 32;
    this.PSMOn = true;
};

Thermostat.prototype.increaseTemperature = function(degrees) {
   var x = this.currentTemperature += degrees;
   if (this.powerSavingModeOff) {
    this.powerSavingModeOff;
  } else {
    x;
  }
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  var x = this.currentTemperature -= degrees;
  if (x < 10) {
    this.minimumTemperature;
  } else if (this.powerSavingModeOn) {
    this.powerSavingModeOn;
  } else {
    x;
  }
};

Thermostat.prototype.resetButton = function() {
  this.currentTemperature = 20;
};


Thermostat.prototype.colorDisplay = function() {
  var temp = this.currentTemperature;

  if (temp > 18 && temp < 25) {
    temp = "Yellow";
    return temp;
  } else if (temp < 18) {
    temp = "Green";
    return temp;
  } else {
    temp = "Red";
    return temp;
  }







};
