<?php
     class ConexionBD{
         public static function conexion(){
             $conexion = $pdo = new PDO('mysql:host=localhost;port=3306;dbname=pruebausuarios', 'root', '');
             // See the "errors" folder for details...
             $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         }
     }
?>