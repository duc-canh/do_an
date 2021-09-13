$(document).on("click",".btn-buy-now",function (e){
    e.preventDefault();
    if($(this).hasClass("disable")){
         return false;
     }
    $(document).find(".btn-buy-now").addClass("disable");
    var parent = $(this).parents(".col-4");
    var card = $("#card-shop");
    var src = parent.find("img").attr("src");
    var parTop = parent.offset().top;
    var parLeft = parent.offset().left;
    $('<img />', {
        class: 'img-product-fly',
        src: src,
    }).appendTo('body').css({
        "top" : parTop + 15,
        "left" : parLeft + parent.width() - 40
    });
    setTimeout(function (){
        $(".img-product-fly").css({
            "top" : card.offset().top,
            "left" : card.offset().left
        })
        setTimeout(function (){
           $(".img-product-fly").remove()
             var citem = parseInt(card.find("#count-item").data("count")) + 1 ;
             card.find("#count-item").text(citem +" " + "item").data("count",citem);
//
             $(document).find(".btn-buy-now").removeClass("disable");
         },1000);
    },500);

      // var namesp = parent.find("h4").text();
      // var price = parent.find("sp").text();
      // alert(price);
});
// $(document).on("click",".btn-buy-now",function (e){
//     e.preventDefault();//(1)xóa các sự kiện định dạng từ trước
//     if($(this).hasClass("disable")){
//         return false;
//     }
//     $(document).find(".btn-buy-now").addClass("disable");
//     //lấy đường dẫn của bức ảnh
//     var parent = $(this).parents(".thumbnail");//hàm lấy class
//     //(5) lấy id của card shop
//
//     //lấy đường dẫn src...
//     var src = parent.find("img").attr("src");
//     //(4)
//     var parTop = parent.offset().top;
//     var parLeft = parent.offset().left;
//     $('<img />', {
//         class: 'img-product-fly',
//         src: src,
//     }).appendTo('body').css({
//         "top" : parTop,
//         "left" : parLeft + parent.width() - 50
//     });
//     setTimeout(function (){
//         $(".img-product-fly").css({
//             "top" : card.offset().top,
//             "left" : card.offset().left
//         })
//         setTimeout(function (){
//             $(".img-product-fly").remove()
//             var citem = parseInt(card.find("#count-item").data("count")) + 1 ;
//             card.find("#count-item").text(citem + "item").data("count",citem);
//
//             $(document).find(".btn-buy-now").removeClass("disable");
//         },1000);
//     },500);
// });