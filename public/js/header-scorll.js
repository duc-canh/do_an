jQuery(document).ready(function ($){
    var pos = $("#menuTop").position();//lay vi tri cua menutop cach top x px
    $(window).scroll(function (){
        var posScorll = $(document).scrollTop();
        if(parseInt(posScorll)>parseInt(pos.top)){
            $("#menuTop").addClass("fixed")
        }
        else {
            $("#menuTop").removeClass("fixed");
        }
    })

})