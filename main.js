song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("Imagine Dragons Beliver.mp3")
    song2 = loadSound("Devil - Barren Gates.mp3")
}

function setup() {
    canvas = createCanvas(600 , 500)
    canvas.center();

    video = createCanvas(VIDEO);
    video.hide;
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}

function play()
{
    song1.play();
    song2.play();
}