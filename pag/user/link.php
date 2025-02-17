<?php

include '../../src/usuario.php';
include '../../src/repositorio.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = new Usuario($_POST["nome"],$_POST["email"],$_POST["senha"]);
    echo "ok";
}

?>