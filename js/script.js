
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






/* codigo en javascript de la clase anterior
function campo(orden){
    if (orden == 1){
        let lbl_nombre = document.getElementById("lblnombre");
        lbl_nombre.style.color = "red";
    }
    
    if (orden == 2){
        let lbl_apellidos = document.getElementById("lblapellidos");
        lbl_apellidos.style.color = "red";
    }
}

document.getElementById("form_pedidos").addEventListener("submit", 
    function(event){
        if ( document.getElementById("nombre").value == "" ) {
            event.preventDefault();
            campo(1);
        }

        if ( document.getElementById("apellidos").value == "" ) {
            event.preventDefault();
            campo(2);
        }
    }
);

*/

