$boton = document.querySelector("#aprovi")
$result = document.querySelector(".result");

$(document).ready(function () {
    $boton.addEventListener('click', function () {
        $result.innerHTML = '<h1>HOLA!!</h1>';
    })
});