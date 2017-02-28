//Business Logic
function toDoItems(task) {
  this.task = task;
}


//User Interface
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var taskItem = $("input#taskItem").val();

    var honeyDo = new toDoItems(taskItem);

    $("#itemList").append("<div><input type='checkbox' name='task-items'>" + " " + "<span>" + honeyDo.task + "</span><br></div>");

    $("#deleteList").show();
    $("input#taskItem").val("");
  });


  $("#deleteList").submit(function(){
    // debugger;
    event.preventDefault();

    $("#deleteList").show();

    $("input:checkbox[name=task-items]:checked").each(function(){
      // var eachItem = $(this).val();
      $(this).parent().remove();
      // $("#itemList").remove(eachItem);
    });

  });

});
