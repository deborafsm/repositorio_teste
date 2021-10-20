$( "#show" ).click(function() {
    $( "#menu" ).first().show( "fast", function showNext() {
      $( this ).next( "#menu" ).show( "#menu", showNext );
    });
  });
   
  $( "#hide" ).click(function() {
    $( "#menu" ).hide( 1 );
  });