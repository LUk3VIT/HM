<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "hm";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error){
    die ("Falha na conexão: " . connect_error);
} 

echo "Conectado com sucesso";

?>