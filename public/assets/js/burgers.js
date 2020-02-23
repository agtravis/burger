'use strict';

$(function() {
  $('.devour-burger').on('click', function() {
    const id = $(this).data('id');
    const newDevoured = $(this).data('devoured');
    const newDevouredState = {
      devoured: newDevoured
    };
    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      data: newDevouredState
    }).then(function() {
      location.reload();
    });
  });

  /*
  $('.delete-cat').on('click', function(event) {
    event.preventDefault();
    const id = $(this).data('id');
    $.ajax('/api/cats/' + id, {
      type: 'DELETE'
    }).then(function() {
      console.log('Cat deleted');
      location.reload();
    });
  });

  $('.create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCat = {
      name: $('#ca')
        .val()
        .trim(),
      sleepy: $('[name=sleepy]:checked')
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax('/api/cats', {
      type: 'POST',
      data: newCat
    }).then(function() {
      console.log('created new cat');
      // Reload the page to get the updated list
      location.reload();
    });
  });*/
});
