$boton = document.querySelector("#pass")
$result = document.querySelector(".result");
$(document).ready(function () {
    
    $boton.addEventListener('click', function () {
        $result.innerHTML = '<table class="default">'
      +' <tr>'
      +'<th>Nombre</th>'
      +'<th>User</th>'
      +'    <th>Pass</th>'
      +'  </tr>'
      +'  <tr>'
      +'    <td>Soporte</td>'
      +'    <td>soporte@celsia.com</td>'
      +'    <td>12345</td>'
      +'  </tr>'
      +'  <tr>'
      +'    <td>--</td>'
      +'    <td>--</td>'
      +'    <td>--</td>'
      +'  </tr>'
      +'  <tr>'
      +'    <td>--</td>'
      +'    <td>--</td>'
      +'    <td>--</td>'
      +'  </tr>'
      +'</table>';
    })
});