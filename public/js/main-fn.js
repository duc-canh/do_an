jQuery(document).ready(function ($){
    var pos = $("#row-fn").position();//lay vi tri cua menutop cach top x px
    $(window).scroll(function (){
        var posScorll = $(document).scrollTop();
        if(parseInt(posScorll)>parseInt(pos.top)){
            $("#row-fn").addClass("wow fadeInDown")
        }else{
            $("#row-fn").removeClass("wow fadeInDown")
        }
    })

})

