<?php

require_once '../../src/usuario.php';
require_once '../../src/repositorio.php';

$usuario = new Usuario($_POST["nome"], $_POST["email"], $_POST["senha"]);

$cadastrar = new Repositorio();
$cadastrar->cadastro($usuario->getNome(),$usuario->getEmail(),$usuario->getSenha());

header("Location: ./perfil/perfil.html");


?>