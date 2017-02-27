//Business Logic
function toDoItems(task) {
  this.task = task;
}

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var taskItem = $("input#taskItem").val();

    var honeyDo = new toDoItems(taskItem);

    $("#listToDo ol").append("<li><span>" + honeyDo.task + "</span></li>");
  });

});
