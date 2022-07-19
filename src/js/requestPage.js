document.querySelectorAll('[getPage]')
    .forEach(link => {
        link.onclick = function (e) {
            e.preventDefault(); 

            $.ajax({
                url: link.getAttribute('getPage'), 
                success: function(dataPage) {
                    $('#localRequest').html(dataPage);
                    $('#conteiner').hide(); 
                },
                error: function() {alert('Servidor indisponível, tente mais tarde...')}
            })
        }
    })