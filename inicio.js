$boton = document.querySelector("#inicio")

$(document).ready(function () {
    
    $boton.addEventListener('click', function () {
        $result.innerHTML = '<h1>HOLA!!</h1>';
    })
});