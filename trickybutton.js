$(function(){
    $("#but1").on({
        mouseover : function() {
            $(this).css({
                left : (Math.random() * 900) + "px",
                top : (Math.random()*500) +"px",
            });
        }
    });
});