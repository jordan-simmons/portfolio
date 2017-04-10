
var flip;

var quote = $('#quote'),
    name = $('#name'),
    qB = $('#quoteBlock');
let mouse = {x: 0, y: 0};
    $(document).ready(function(){
        flip = true;
        $('#extra, #less').hide();
        $('#more, #less').click(function(){
            flip = !flip;
            if(flip){
                $('#more').show();
                $('#extra').slideUp();
                $('#less').hide();
            }else{
                $('#more').hide();
                $('#extra, #less').slideDown();
            }
        });
    });

$(document).mousemove((event) => {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});


