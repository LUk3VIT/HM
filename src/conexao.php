<?php

class Conexao{

    private $servidor = "localhost";
    private $usuario = "root";
    private $senha = "";
    private $banco = "hm";
    private $conexao;

    public function conectar() {

        $this->conexao = new mysqli($this->servidor, $this->usuario, $this->senha, $this->banco);

        if ($this->conexao->connect_error){
            die ("Falha na conexão: " . connect_error);
        } 
    
        echo "Conectado com sucesso";
        return $this->conexao;
    }

}

?>