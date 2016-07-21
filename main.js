// ************************************************************************************************************
// Written by Alexander Agudelo <alex.agudelo@asurantech.com>, 2016
// Date: 02/Jul/2016
// Description: Behaves as a normal RGB Block but without the hardwared. Intended for debugging
// purposes only.
//
// ------
// Copyright (C) Asuran Technologies - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// ************************************************************************************************************

define(['utils'], function(utils){
  var actions = ["WHITE", "BLUE", "GREEN", "YELLOW", "OFF"];
  var inputs = [];
  var RGBSimulator = {};


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
   * NOTE: The call is bound to the block's instance, hence 'this'
   * does not refer to this module, for that use 'RGBSimulator'
   */
  RGBSimulator.onLoad = function(){
    // nothing to do here
  };

  /**
   * Allows blocks to replace the default canvas icon.
   * This method MUST return a html string if implemented
   */
  // RGBSimulator.canvasContentOverride = function(){
  //   return false;
  // }

  /**
   * Allows blocks controllers to change the content
   * inside the Logic Maker container
   */
  RGBSimulator.lmContentOverride = function(Maker){
    // This is an "Action" block thus gates are not allowed
    Maker.showMenu = false;
    return "<div>Nothing to do here, you can use the following actions:</div><div><b>WHITE, BLUE, GREEN, YELLOW, OFF</b></div>";
  };

  /**
   * A copy has been dropped on the canvas.
   * I need to keep a copy of the processor to be triggered when
   * new data arrives.
   */
  RGBSimulator.onAddedtoCanvas = function(processor, canvasIcon){
    // TODO: Store a reference of the canvas icon and
    // use it to change its colour from the onExecute method.
    // Awaiting for jsPlumb to be implemented in the canvas.
    this.label = "RGB_S";
    this.processor = processor;
  };

  // Parent is asking me to execute my logic
  RGBSimulator.onExecute = function(action) {
    var color = action.toLowerCase();
    this.canvasIcon.css("box-shadow", "0 0 20px 10px "+color);
  };

  // Called when parent blocks pipe data using outputs
  RGBSimulator.onNewdata = function(data) {};


  // Optional event handlers
  RGBSimulator.onMouseOver = function(myself, evt){};


  return RGBSimulator;
});
