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

  $('.create-form').on('submit', function(event) {
    event.preventDefault();
    const newBurger = {
      name: $('#burg')
        .val()
        .trim()
    };
    $.ajax('/api/burgers/', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      console.log('Created new burger!');
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
  });*/
});
