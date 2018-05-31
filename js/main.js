console.log('Hello!!');

window.onload = function(){

// Añadir línea en el ul
 $('.btn').click((function(){
   var line = (`<li><span>${prompt("Add new task")}</span><div class="delete">delete</div></li>`);
   $('#todos').append(line);
 }));


// al hacer clic en delete que está dentro del li y de la clase todos eliminarlo.
 $('#todos').on("click", "li .delete", function(){
  $(this).parent().remove();
});

};