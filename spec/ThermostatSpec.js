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

  
















});
