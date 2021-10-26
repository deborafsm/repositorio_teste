let id;

function excludeVeiculo() {
    
    let motivo1 = document.getElementById('motivo_veiculo').value;
    if (motivo1 == "") {
        var p = $(`<div class="alert1">
                        <span onclick="this.parentElement.style.display='none';"></span>Por favor, digite o motivo.
                        </div>`);
        $('#myModal').append(p);
        p.fadeIn(500, function () {
            window.setTimeout(function () {
                p.fadeOut();
            }, 2000)
        });
        return false;
    }

    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/veiculo_delete',
        data: {
            'id': id,
            'motivo': motivo1
        },
        success: function (e) {
            table_Veiculo()
            let data = JSON.parse(e);
            console.log(data)

            if (data.status == 0) {
                var p = $(`<div class="alert1">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                ${data.msg}
                </div>`);
                p.hide()
                $('#cadastro_veic').append(p); // "appendê-lo" ou "appendar" o <p>
                p.fadeIn(500, function () {
                    window.setTimeout(function () {
                        p.fadeOut();
                    }, 2000)
                });
                modalClose();
            } else if (data.status == 1) {
                var p = $(`<div class="alert">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                ${data.msg}
                </div>`);
                p.hide()
                $('#cadastro_veic').append(p); // "appendê-lo" ou "appendar" o <p>
                p.fadeIn('slow', function () {
                    window.setTimeout(function () {
                        p.fadeOut();
                    }, 2000)
                });
                modalClose();
            }

        }
    })

}




function modalExclude(ids) {
    id = ids
    var modal = document.getElementById("myModal");
    var conteudo = document.getElementById("content_modal_e")
    modal.style.display = "block";
    modal.style.paddingTop = "250px";
    conteudo.style.width = "35%";
    return id;

}

function modalClose() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

