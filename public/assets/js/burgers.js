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
      location.reload();
    });
  });

  $('.delete-burger').on('click', function() {
    const id = $(this).data('id');
    $.ajax(`/api/burgers/` + id, {
      type: 'DELETE'
    }).then(function() {
      location.reload();
    });
  });

  $('.bus-button').on('click', function() {
    $.ajax(`/api/burgers/`, {
      type: 'DELETE'
    }).then(function() {
      location.reload();
    });
  });
});
