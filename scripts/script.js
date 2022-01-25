// .ready() = is a method of jquery 
// function(){} in method is an IIFE
$(document).ready(function () {
  console.log("doc is ready");

  let $start_counter = $("#event-start"),
  counts = [0,0,0], 
  updateCounterStatus = 0
  ;

  $("#dogeDiv").draggable(
    {
    start: function () {
      counts[0]++;
      console.log(counts[0]);
    }
    }
  );

  $("#doge").draggable();

  let userGreeting = "Hello there, ";

  $("button").click(function () {
    userGreeting += $("#fname").val();

    $("#greetingOutput").text(userGreeting);

  });

});
