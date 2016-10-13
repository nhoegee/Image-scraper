<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="author" content="Nigel Hoegee">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Image Scraper</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400">
    <link rel="stylesheet" href="..\bower_components\font-awesome\css\font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">

    <script src="js/app.js"></script>
  </head>
  <body>
    <?php
      $url = 'http://pixabay.com/';
      $html = file_get_contents( $url . 'nl/photos/?image_type=photo&cat=nature&min_height=320&colors=grayscale&min_width=480&order=popular' );
      preg_match_all( '/<img.*?src="(.*?)".*?>/i', $html, $srcMatches );
      preg_match_all( '/<img.*?alt="(.*?)".*?>/i', $html, $altMatches );
    ?>
    <div class="slider-container">
      <div class="slider">
        <?php foreach (range(1, 6) as $i): ?>
          <?php if ($i == 6): ?>
            <figure class="slide is-next">
              <img class="image" src="<?= $url . $srcMatches[1][$i] ?>" alt="<?= $altMatches[1][$i] ?>" />
              <figcaption>
                <span><?= $altMatches[1][$i] ?></span>
              </figcaption>
            </figure>
          <?php else: ?>
            <figure class="slide">
              <img class="image" src="<?= $url . $srcMatches[1][$i] ?>" alt="<?= $altMatches[1][$i] ?>" />
              <figcaption>
                <span><?= $altMatches[1][$i] ?></span>
              </figcaption>
            </figure>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
      <button class="previous" type="button" name="previous_slide">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </button>
      <button class="next" type="button" name="next_slide">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </button>
    </div>
  </body>
</html>
