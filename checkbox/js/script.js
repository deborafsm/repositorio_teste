// $( "#showr" ).click(function() {
//     $( "div" ).first().show( "fast", function showNext() {
//       $( this ).next( "div" ).show( "fast", showNext );
//     });
//   });

//   $( "#hidr" ).click(function() {
//     $( "div" ).hide( 1 );
//   });
// let a = document.querySelector('a').value;
// let b = document.querySelector('b').value;

// if (a.checked) {
//   alert("o a está habilitado");
//   b.checked.disabled;
// } else if (b.checked) {
//   a.checked.enabled;
//   alert("o b está habilitado");
// }
// let a = $('#a');
// let b = $('#b');
// if ($('#a').is(':checked')) {
//   alert("teste");
// }

///Desabilita outro check enqunto o outro estiver habilitado
// $('#a').click(function (e) {
//   // if ($('#a').is('checked')) {
//   $('#b').attr("disabled", true);
// });
// $('#b').click(function (e) {
//   $('#a').attr("disabled", true);
// })

//Checkbox habilita enquanto tiver habilitada e a outra ficará desabilitada 
$('#a').on('click', function () {
  var a = $('#a:checked').length;
  if (a === 1) {
    $('#b').attr("disabled", true);
  } else {
    $('#b').attr("disabled", false);
  }

});
$('#b').on('click', function () {
  var b = $('#b:checked').length;
  if (b === 1) {
    $('#a').attr("disabled", true);
  } else {
    $('#a').attr("disabled", false);
  }
});
// $("input:checkbox").on("click",function(){

//   var inp = $(this);

//   $("input:checkbox")
//   .not(inp)
//   .prop("checked", false)
//   .removeClass("theone")

//   inp
//   .prop("checked", inp.is(":checked"))
//   .toggleClass("theone");

// });

// $(document).ready(function () {
//   $(document).on('change', ':checkbox', function () {
//     //Verifica se o checkbox clicado está checado
//     if ($(this).is(':checked')) {
//       //Desmarca os demais checkbox que estão na mesma tabela que o checkbox clicado
//       $(this).closest('div').find(':checkbox').not(this).prop('checked', false);
//       //Atribui o valor 0 para o select que esteja na mesma tabela que o checkbox clicado
//       $(this).closest('div').find('select').prop('value', 0);
//     }
//   });
//   $(document).on('change', 'select', function () {
//     //Desmarca os checkbox que estão na mesma tabela do select que teve um valor selecionado
//     $(this).closest('div').find(':checkbox').prop('checked', false);
//   });
// });