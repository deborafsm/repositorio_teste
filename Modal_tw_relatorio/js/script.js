$(document).ready(function () {

  $("p.error2").hide();
  $(".enviar").click(function () {
    if ($("input[name='data_ini']").text("") || $("input[name='data_fim')").text("") || $("input[name='hora_ini')").text("") || $("input[name='hora_fim')").text("")) {
      var p = $(`<div class="alert1">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&#8727;</span>
                Verifique os campos obrigatórios
                </div>`);
      p.hide()
      $('.form').append(p);
      p.fadeIn(500, function () {
        window.setTimeout(function () {
          p.fadeOut();
        }, 2000)
      });
    }
  })
});

