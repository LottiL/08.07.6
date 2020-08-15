$("#addbtn").on('click', function(){
    let todo = $("input").val()
    $('ul').append('<li>' + todo + '</li>')
  });
  