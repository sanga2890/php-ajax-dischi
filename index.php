<?php require 'versione-php/db/dischi.php'; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="public/style.css">
        <title>Dischi PHP</title>
    </head>
    <body>
        <header>
            <div class="header container">
                <img src="img/logo.png" alt="">
                <select class="artist" name="artist">
                    <option value="">Artist</option>
                </select>
            </div>
        </header>
        <main>
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
        </main>
    </body>
</html>
