<?php

require_once 'conexao.php';

class Repositorio{

    private $conexao;

    public function __construct() {
        $bancoDados = new Conexao();
        $this->conexao = $bancoDados->conectar();
    }


    function cadastro($nome, $email, $senha) {
        $sql = "INSERT INTO usuario (id, nome, email, senha) VALUES ('','$nome','$email','$senha')";
        $stmt = $this->conexao->execute_query($sql);
    }


}

?>