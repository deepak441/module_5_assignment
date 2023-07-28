// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button
  let currentDate = dayjs().format("dddd, MMM D YYYY  h:mmA"); 
  $("#currentDay").html(currentDate);

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  function presentT() {
    let present = dayjs().format("HH");
  
    $(".time-block").each(function () {
      var shceduleHour = parseInt($(this).attr("id").split("hour-")[1]);
  
    // Background color based on past, present, and future 
      if (shceduleHour < present) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } 
        
      else if (shceduleHour == present) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } 
        
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set

  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  presentT();
});
