<?php
session_start();

if(isset($_POST['submit'])){
    $_SESSION['username']=$_POST['username'];
    $_SESSION['email']=$_POST['email'];

    header('Location:Projektiwebfaqja2.php');
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="page2.php">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
    <input action="text" name="username" placeholder="username">
    <input action="text" name="email" placeholder="username">
    <input action="submit" name="submit" >
    </form>
</body>
</html>