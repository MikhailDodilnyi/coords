$('#elem').mousemove(function(event) {
    let pos = $(this).offset();
    let elem_left = pos.left.toFixed(0);
    let elem_top = pos.top.toFixed(0);
    let x = event.pageX - elem_left;
    let y = event.pageY - elem_top;
    $('#xy').html('Координаты внутри блока: (' + x +'; '+ y +') ');
});

$(document).mousemove(function(event) {
    let x = event.pageX;
    let y = event.pageY;
    $('#outbox').html('Координаты по отношению к странице: ('+ x +'; '+ y +')');
});

