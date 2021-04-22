
function newItem(){

  //Using $ to create and select HTML elements with jQuery
   let inputValue = $("input").val();
   let li = $('<li></li>');
   let add = li.append(inputValue);

   if (inputValue === '') {
     alert("Please write something!");
   } else {
     $('#list').append(add);
   }
   // using toggleClass to add or remove class
   function crossOut() {
     li.toggleClass('strike');
 	}
  // dbclick() is a jQuery functions that triggers an event on a double click
  li.dblclick(crossOut);

  //you can create new HTML elements (like <crossOutButton>) and add text with createTextNode
  let crossOutButton = $('<crossOutButton></crossOutButton>');
 	crossOutButton.append(document.createTextNode("X"));
 	li.append(crossOutButton);

  // call deleteListItem on click (jQuery way of eventListeners)
 	crossOutButton.on('click', deleteListItem);

  function deleteListItem(){
 		li.addClass('delete');
 	}

   $('#list').sortable();

}
