function Task(nm, dscrp) {
  this.name = nm;
  this.description = dscrp;
}


// user interface logic
$(document).ready(function() {

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDescription = $("input#new-description").val();

    var newTask = new Task(inputtedName, inputtedDescription);

    $("ul#tasks").append("<li class='task'>" + newTask.name + "</li>");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.name);
      $(".name").text(newTask.name);
      $(".description").text(newTask.description);
    });

    $(".task").last().dblclick(function() {
      $("#show-task").hide();
      $("#show-task h2").text("");
      $(".name").text("");
      $(".description").text("");
      this.remove();
    });

    $("input#new-name").val("");
    $("input#new-description").val("");
  });

});
