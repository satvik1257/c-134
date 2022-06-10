objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  video.size(380,380);
  video.hide();  
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(video, 0, 0, 380, 380;

      if(status != "")
      {
        r = random(255);
        g = random(255)
        b = random(255)
        objectDetector.detect(video,gotResult)
        for (var i = 0; i < objects.length; i++) {
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + object.length;
          document.getElementById("status").innerHTML = "Status : Object Detected";
    
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}
for (i = 0; i < objects.length; i++)
{
  document.getElementById("status").innerHTML  = "Status : Object Detected";
  fill("#FF0000");
  percent = floor(objects[i].confidence * 100);
  text(objects[i.label + " " + percent + "%" , objects[i].x, objects[i].y]);
  noFill();
  stroke(#FF0000)
  rect(object[i].x, objects[i].width, objects[i].height);
}