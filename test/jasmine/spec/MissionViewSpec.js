require(['Models/Mission', 'Models/Platform', 'Views/Mission'], function(Mission, Platform, MissionView) {

  beforeEach(function() {

    setFixtures(sandbox({id:'missionView'}));
    this.platform = new Platform();
    this.mission = new Mission({
      platform: this.platform
    });

    this.missionView = new MissionView({
      model: this.mission
    });

    this.missionView.render();
  });

  describe("Navigation Bar", function() {

    it('should be visible', function() {
      expect( $('.navbar.navbar-fixed-top' ) ).toBeVisible();
    });

  });
/*

  describe("MissionView", function() {
    
    beforeEach(function() {
      
      this.platform = new Platform();
      this.mission = new Mission({
        platform: this.platform
      });

      setFixtures(sandbox({id:'missionView'}));
      this.missionView = new MissionView({
        model: this.mission
      });

      this.missionView.render();

    });

    it('Renders a scaffolding template with IDs for subviews', function() {
      expect($('#missionView')).not.toBeEmpty();
      expect($('#speedWidget')).toBeDefined();
      expect($('#batteryWidget')).toBeDefined();
      expect($('#altitudeWidget')).toBeDefined();
      expect($('#mapWidget')).toBeDefined();
      expect($('#commsWidget')).toBeDefined();
      expect($('#gpsWidget')).toBeDefined();
      expect($('#healthWidget')).toBeDefined();
      expect($('#stateWidget')).toBeDefined();
    });

    it('Renders its subviews', function() {
      console.log(this.missionView);
      expect($('#speedWidget').html()).not.toBeUndefined();
      expect($('#batteryWidget').html()).not.toBeUndefined();
      expect($('#altitudeWidget').html()).not.toBeUndefined();
      expect($('#mapWidget').html()).not.toBeUndefined();
      expect($('#commsWidget').html()).not.toBeUndefined();
      expect($('#gpsWidget').html()).not.toBeUndefined();
      expect($('#healthWidget').html()).not.toBeUndefined();
      expect($('#stateWidget').html()).not.toBeUndefined();
    });
  });
*/
});