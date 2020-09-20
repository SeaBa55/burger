// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".change-state").on("click", function(event) {

    let id = $(this).data("id");
    let state = $(this).data("state");

    if(state == false){

      let newBurger = {

        name: this.previousElementSibling.innerText,
        state: '0'
        
      };

      var url = "/api/cats";

      var request = {

        type: "POST",
        data: newBurger
  
      }

    }else{

      let newState = {

        devoured: state
  
      };

      var url = "/api/cats/" + id;

      var request = {

        type: "PUT",
        data: newState
  
      };
    
    };

    // Send the POST or PUT request depending on state
    $.ajax(url, request)
    .then(function() {
      
      // Reload the page to get the updated list
      location.reload();

    });
    
  });
  
  $(".create-form").on("submit", function(event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {

      name: $("#ca").val().trim(),
      state: $("[name=sleepy]:checked").val().trim()
      
    };

    // Send the POST request.
    $.ajax("/api/cats", {

      type: "POST",
      data: newBurger

    })
    .then(function() {

      // Reload the page to get the updated list
      location.reload();

    });

  });

  $(".delete-burger").on("click", function(event) {

    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {

      type: "DELETE"

    }).then(function() {

      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();

    });

  });

});
  