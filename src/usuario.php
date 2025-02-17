<?php

class Usuario {
    private string $nome;
    private string $email;
    private string $senha;

    function __construct(string $nome, string $email, string $senha) {
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
    }

    function setNome(string $nome){
        $this->nome = $nome;
    }

    function setEmail(string $email) {
        $this->email = $email;
    }

    function setSenha(string $senha) {
        $this->senha = $senha;
    }

    function getNome(string $nome) {
        return $this->nome;
    }

    function getEmail(string $email) {
        return $this->email;
    }

    function getSenha(string $senha) {
        return $this->senha;
    }
}

?>