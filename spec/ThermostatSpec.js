describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();

  });

  it('has a default temperature of 20 degrees', function() {
      expect(thermostat.currentTemperature).toEqual(20);
  });


  it('can increase the temperature by one degree', function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.currentTemperature).toEqual(21);
  });

  it('can decrease the temperature by one degree', function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.currentTemperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
      thermostat.decreaseTemperature(15);
      expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('has a maximum temperature of 25 when power saving mode on', function() {
      thermostat.increaseTemperature(5);
      expect(thermostat.powerSavingModeOn).toEqual(25);
  });

  it('has a maximum temperature of 32 when power saving mode off', function() {
      thermostat.increaseTemperature(12);
      expect(thermostat.powerSavingModeOff).toEqual(32);
  });

  it('has a power saving mode ON by default', function() {
    expect(thermostat.PSMOn).toEqual(true);
  });


  it('can reset the temperature when clicking reset button', function() {
    thermostat.increaseTemperature(5);
    thermostat.resetButton();
    expect(thermostat.currentTemperature).toEqual(20);
  });


  it('should color display based on energy usage: yellow', function() {
    thermostat.increaseTemperature(2);
    thermostat.colorDisplay("Yellow");
    expect(thermostat.currentTemperature).toEqual(22);
    expect(thermostat.colorDisplay()).toEqual("Yellow");
  });

  it('should color display based on energy usage: green', function() {
    thermostat.decreaseTemperature(5);
    thermostat.colorDisplay("Green");
    expect(thermostat.currentTemperature).toEqual(15);
    expect(thermostat.colorDisplay()).toEqual("Green");
  });

  it('should color display based on energy usage: red', function() {
    thermostat.increaseTemperature(10);
    thermostat.colorDisplay("Red");
    expect(thermostat.currentTemperature).toEqual(30);
    expect(thermostat.colorDisplay()).toEqual("Red");
  });










});
