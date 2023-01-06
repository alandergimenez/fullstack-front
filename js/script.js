
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


} )