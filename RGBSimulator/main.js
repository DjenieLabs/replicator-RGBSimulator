define(['HubLink', 'RIB', 'PropertiesPanel', 'Easy'], function(Hub, RIB, Ppanel, easy) {
  var actions = ["WHITE", "BLUE", "GREEN", "YELLOW", "OFF"];
  var inputs = [];
  var _objects = {};

  var RGBSimulator = {
    settings:{
      Custom: {}
    },
    dataFeed: {}
  };

  // TODO: Review if this is a trully unique instance?

  RGBSimulator.getActions = function() {
    return actions;
  };

  RGBSimulator.getInputs = function() {
    return inputs;
  };

  /**
   * Triggered when added for the first time to the side bar.
   * This script should subscribe to all the events and broadcast
   * to all its copies the data.
   * NOTE: The call is bind to the block's instance, hence 'this'
   * does not refer to this module, for that use 'RGBSimulator'
   */
  RGBSimulator.onLoad = function(){

  };

  /**
   * Allows blocks controllers to change the content
   * inside the Logic Maker container
   */
  RGBSimulator.lmContentOverride = function(){
    // Use this to inject your custom HTML into the Logic Maker screen.
    return "<div> RGBSimulator html </div>";
  };

  /**
   * Parent is asking me to execute my logic.
   * This block only initiate processing with
   * actions from the hardware.
   */
  RGBSimulator.onExecute = function(action) {
    var color = action.toLowerCase();
    this.canvasIcon.css("box-shadow", "0 0 20px 10px " + color);
  };

  // TODO: Move this to the block controller
  function save() {

  }

  /**
   * Triggered when the user clicks on a block.
   * The interace builder is automatically opened.
   * Here we must load the elements.
   * NOTE: This is called with the scope set to the
   * Block object, to emailsess this modules properties
   * use RGBSimulator or this.controller
   */
  RGBSimulator.onClick = function(){

  };

  /**
   * Parent is send new data (using outputs).
   */
  RGBSimulator.onNewData = function() {};

  // Returns the current value of my inputs
  // RGBSimulator.onRead = function(){};

  // Optional event handlers
  RGBSimulator.onMouseOver = function(){
    // console.log("Mouse Over on ", myself.canvasIcon.id, evt);
  };

  /**
   * A copy has been dropped on the canvas.
   * I need to keep a copy of the processor to be triggered when
   * new data arrives.
   */
  RGBSimulator.onAddedtoCanvas = function(processor, canvasIcon) {
    this.processor = processor;
  };

  return RGBSimulator;
});
