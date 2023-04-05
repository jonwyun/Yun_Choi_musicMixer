Error 1. My anchor tag doesn't work:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>On-the-Road Music Mixer</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
    <div id="hero" class="full-width-grid-con">
        <img src="images/bg.jpg" alt="road background" id="hero-main">
        <section class="grid-con">
            <div id="title">
                <h1>On-the-Road</h1>
            </div>
            <div id="subtitle">
                <p>Music Mixer</p>
            </div>
            <div id="instruction">
                <ol>
                    <li>Instruction</li>
                    <li>1. Choose Your Car.</li>
                    <li>2. Drag & drop it onto the place.</li>
                    <li>3. Then, music will start.</li>
                </ol>
            </div>

            <a href="play.html" id="play">PLAY</a>

        </section>
    </div>
    
</body>
</html>

==> Solution 1. Get the anchor tag out of 'hero' div tag. Then it works, but don't know why.
==> Solution 2. set z-index: 2; in CSS
