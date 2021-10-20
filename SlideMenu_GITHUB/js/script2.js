$( document ).ready(function() {
    $( "#itens_side" ).hide();


    
});
$("#show").click(function () {
    $("#itens_side").animate({
        height: "toggle"
    }, 500, function () {


    });
});

$("#hide").click(function () {
    $("#itens_side").animate({
        height: "toggle"
    },500, function () {

    });
});