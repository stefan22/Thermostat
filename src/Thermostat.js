var Thermostat = function() {
    this.currentTemperature = 20;
    this.minimumTemperature = 10;
    this.powerSavingModeOn = 25;
    this.powerSavingModeOff = 32;
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
