$( "#show" ).click(function() {
    $( "#itens_side" ).first().show( "fast", function showNext() {
      $( this ).next( "#itens_side" ).show( "#itens_side", showNext );
    });
  });
   
  $( "#hide" ).click(function() {
    $( ".itens_side" ).hide( 1 );
  });