<?php


require_once 'conexao.php';

class Repositorio{

    private $conexao;

    function __construct($conexao){
        $this->conexao = $conexao;
    }



}

?>