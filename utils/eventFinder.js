const findEvent = function(){
$('body').on("click mousedown mouseup focus blur keydown change mouseup click dblclick mousemove mouseover mouseout mousewheel keydown keyup keypress textInput touchstart touchmove touchend touchcancel resize scroll zoom focus blur select change submit reset",function(e){
        console.log(e);
    });
};

findEvent();
