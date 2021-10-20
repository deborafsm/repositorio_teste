$(document).ready(function () {
    $("#itens_side").hide();
  var nbtn = document.getElementById('btn').value;
    if ($(nbtn).click){
        $(".nbtn").click(function () {
            $("#itens_side").animate({
                height: "toggle"
            }, 500, function () {
            });
        });
    }
   

    // if ($("button[name='nbtn']").click){
    
    

    // $(".nbtn").click(function () {
    //     $("#itens_side").animate({
    //         height: "toggle"
    //     }, 500, function () {
    //     });
    // });

});