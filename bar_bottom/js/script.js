$( "#showr" ).click(function() {
    $( "div" ).first().show( "fast", function showNext() {
      $( this ).next( "div" ).show( "fast", showNext );
    });
  });
   
  $( "#hidr" ).click(function() {
    $( "div" ).hide( 1 );
  });