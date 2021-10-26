<?php
    if(isset($_POST['submit'])&&isset($_FILES['imagem'])){
        echo "Olá mundo";
    }else{
        header("Location: index.php");
    }


?>