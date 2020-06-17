<?php require 'db/dischi.php'; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <?php foreach ($dischi as $value) { ?>
            <h1><?php echo $value['title'] ?></h1>
        <?php } ?>
    </body>
</html>
