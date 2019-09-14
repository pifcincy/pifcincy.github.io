$(function(){
   //initialize all tooltips
  tooltipInit();

  //init carousel
  $('.carousel').carousel({
    interval: 2000
  });

  //Demonstrate the growl notification system
  if(false){
    setTimeout(function() {
      growl("info", "Info Example: Various messages will pop up like this to inform the user of various messages");
    }, 500);
    setTimeout(function() {
      growl("warning", "Warning Example: They will also stack if there is more than one issue");
    }, 4000);
    setTimeout(function() {
      growl("error", "Danger Example: They will fade away automatically");
    }, 7000);
    setTimeout(function() {
      growl("success", "Success Example: You have just seen all four types of notifications");
    }, 12000);
  }

});