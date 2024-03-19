<?php

require_once ('db.php');

class funciones {
    private $conexion;

    public function __construct() {
        $this->conexion = conexion::getInstance();
        
    }
}