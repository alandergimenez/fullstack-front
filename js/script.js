
$( ()=>{


    $("#form_pedidos").submit(
        function(event) {

            let nombre     = $("#nombre").val()
            let apellidos  = $("#apellidos").val()
        
            if (nombre == "") {
                $("#lblnombre").css({ color: "red" })
                event.preventDefault()
            }else {$("#lblnombre").css({ color: "black" })}
        
            if (apellidos == "") {
                $("#lblapellidos").css({ color: "red" })
                event.preventDefault();
            }else {$("#lblapellidos").css({ color: "black" })}
    
        }
    );

    $("#tamano").on('change', function() { 
        console.log(this.value); 
        let size = this.value;

        $.ajax({

            url : 'http://localhost:5000/checksize',

            data : { tamano : size },

            type : 'POST',

            success : function(xhr, status) {
                console.log(xhr)
                $('#disponibilidad').text(xhr);
            },

            error : function(xhr, status) {
                console.log(xhr)
                $('#disponibilidad').text(xhr);
            }

        })
    });


} )