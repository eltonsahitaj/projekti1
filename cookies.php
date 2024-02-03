<?php

setcookie('emri','Elton');

if(isset($_COOKIE['emri'])){
    echo "cookie qe u krijua :".$_COOKIE['emri'];
}else{
   echo "cookie nuk u gjend";
}

?>