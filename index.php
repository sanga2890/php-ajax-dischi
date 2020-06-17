<?php require 'db/dischi.php'; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="public/style.css">
        <title>Dischi PHP</title>
    </head>
    <body>
        <div class="container playlist">
            <?php foreach ($dischi as $value) { ?>
                <div class="scheda">
                    <img src="<?php echo $value['poster'] ?>" alt="<?php echo $value['title'] ?>">
                    <h1><?php echo $value['title'] ?></h1>
                    <h2><?php echo $value['author'] ?></h2>
                    <p><?php echo $value['year'] ?></p>
                    <p><?php echo $value['genre'] ?></p>
                </div>
            <?php } ?>
        </div>
    </body>
</html>
