<?php

if(isset($_POST['usuario']) && ($_POST['contra']))
  {
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contra'];
   
    if($usuario == 'belem' && $contraseña == '1234')
    { 
      echo "<script> window.location.replace('../carrito.html'); </script>";

    }else 
    echo "<script> window.location.replace('../view/login.html'); </script>";
  
   
  } else 
  echo "<script> window.location.replace('../view/index.html'); </script>";

  






?>