// $( "#show" ).click(function() {
//     $( "#menu" ).first().show( "fast", function showNext() {
//       $( this ).next( "#menu" ).show( "#menu", showNext );
//     });
//   });

//   $( "#hide" ).click(function() {
//     $( "#menu" ).hide( 1 );
//   });



// $( "#show" ).click(function() {
//   $( "#imagens" ).show("slow");
// });
// $("#hide").click(function(){
//   $("#imagens").slideUp("slow");

// });

$("#show").click( function () {
  $("#imagens").animate({
    height: 100,
  });
});
$("#hide").click(function () {
  $("#imagens").animate({
    height: -100,
  });
});
