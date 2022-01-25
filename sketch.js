var x = 100;
var y = 100;
let player;
let sampler;
let isPlaying;
let son01,
  son02,
  son03,
  son04,
  son05,
  son06,
  son07,
  son08,
  son09,
  son10,
  son11,
  son12,
  son13,
  son14,
  son15,
  son16,
  son17,
  son18,
  son19,
  son20;
// let e = son01;
let sequence = [
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
];

const arrayOfLines = [[]]
let arrayOfPointsToPlayOnMouseReleased = []
// let sonsNoir;
// let sonsBlanc;
// let sonsNoir = [
//   (son01 = loadSound("assets/01.mp3")),
//   (son02 = loadSound("assets/02.mp3")),
//   (son03 = loadSound("assets/03.mp3")),
//   (son04 = loadSound("assets/04.mp3")),
//   (son05 = loadSound("assets/05.mp3")),
//   (son06 = loadSound("assets/06.mp3")),
//   (son07 = loadSound("assets/07.mp3")),
//   (son08 = loadSound("assets/08.mp3")),
//   (son09 = loadSound("assets/09.mp3")),
//   (son10 = loadSound("assets/10.mp3")),
// ];

// let sonsBlanc = [
//   (son11 = loadSound("assets/11.mp3")),
//   (son12 = loadSound("assets/12.mp3")),
//   (son13 = loadSound("assets/13.mp3")),
//   (son14 = loadSound("assets/14.mp3")),
//   (son15 = loadSound("assets/15.mp3")),
//   (son16 = loadSound("assets/16.mp3")),
//   (son17 = loadSound("assets/17.mp3")),
//   (son18 = loadSound("assets/18.mp3")),
//   (son19 = loadSound("assets/19.mp3")),
//   (son20 = loadSound("assets/20.mp3")),
// ];
// let sonNoir = ["son01", "son02", "son03", "son04"];
function preload() {
  // soundFormats("mp3");
  son01 = loadSound("assets/01.mp3");
  son02 = loadSound("assets/02.mp3");
  son03 = loadSound("assets/03.mp3");
  son04 = loadSound("assets/04.mp3");
  son05 = loadSound("assets/05.mp3");
  son06 = loadSound("assets/06.mp3");
  son07 = loadSound("assets/07.mp3");
  son08 = loadSound("assets/08.mp3");
  son09 = loadSound("assets/09.mp3");
  son10 = loadSound("assets/10.mp3");
  son11 = loadSound("assets/11.mp3");
  son12 = loadSound("assets/12.mp3");
  son13 = loadSound("assets/13.mp3");
  son14 = loadSound("assets/14.mp3");
  son15 = loadSound("assets/15.mp3");
  son16 = loadSound("assets/16.mp3");
  son17 = loadSound("assets/17.mp3");
  son18 = loadSound("assets/18.mp3");
  son19 = loadSound("assets/19.mp3");
  son20 = loadSound("assets/20.mp3");

  sonsNoir = [
    son01,
    son02,
    son03,
    son04,
    son05,
    son06,
    son07,
    son08,
    son09,
    son10,
  ];
  sonsBlanc = [
    son11,
    son12,
    son13,
    son14,
    son15,
    son16,
    son17,
    son18,
    son19,
    son20,
  ];
}

function setup() {


  createCanvas(window.innerWidth, window.innerHeight);

  // initSampler();
  isPlaying = false;
  player = new MidiPlayer.Player((event) => {});
  player.on("midiEvent", (e) => {
    playSound(e);
  });
  player.on("playing", (currentTick) => {});
  player.on("fileLoaded", (e) => {
    console.log("loaded", e);
  });
}

let widthGrid = 10;
let heightGrid = 7;
let espaces = 100;
let offsetX = 140;
let offsetY = 80;
let size = 30;

function draw() {
  background(134, 176, 184);

  for (var j = 0; j < heightGrid; j++) {
    for (var i = 0; i < widthGrid; i++) {
      let index = i + j * widthGrid;
      // console.log(index);
      if (sequence[index % sequence.length]) {
        noStroke();
        fill(255, 172, 146);
        size = 27.5;
      } else {
        size = 30;
        noFill();
        strokeWeight(2);
        stroke(255, 238, 126);
      }

      ellipse(i * espaces + offsetX, j * espaces + offsetY, size, size);
    }
    stroke(255, 238, 126);

    for(const lineToDraw of arrayOfLines) {
      drawLine(lineToDraw)
    }
  }

  if(mouseIsPressed) onMousePressed()

}

function drawLine(lineToDraw) {
  for (let i = 0; i < lineToDraw.length; i++) {
    if (lineToDraw[i + 1]) {
      line(lineToDraw[i].x, lineToDraw[i].y, lineToDraw[i + 1].x, lineToDraw[i + 1].y);
    } else {
      //line(lineToDraw[i].x, lineToDraw[i].y, mouseX, mouseY);
    }
  }

}

function playAccordingSound(_x, _y) {

  let index = _x + _y * widthGrid;
  // console.log(_x, _y, index);

  if (sequence[index]) {
    //play this
    //sonsNoirs[x].play();

    sonsNoir[_x].play();
  } else {
    // son11[x].play();
    //play that
    sonsBlanc[_x].play();
  }
}

function mousePressed() { arrayOfPointsToPlayOnMouseReleased = [] }

function onMousePressed() {

  const currentLine = arrayOfLines[arrayOfLines.length - 1]

  let coorX = constrain(
      round((mouseX - offsetX) / espaces),
      0,
      widthGrid - 1
  );
  let posX = coorX * espaces + offsetX;

  let coorY = constrain(
      round((mouseY - offsetY) / espaces),
      0,
      heightGrid - 1
  );
  let posY = coorY * espaces + offsetY;

  let distancePosToMouse = dist(posX, posY, mouseX, mouseY);

  const canAddPoint = (()=> {
    if (currentLine.length === 0) return true
    else if (posX !== currentLine[currentLine.length - 1].x || posY !== currentLine[currentLine.length - 1].y) return true
    return false
  })()

  if (
      distancePosToMouse < size &&
      canAddPoint
  ) {
    currentLine.push(createVector(posX, posY))
    arrayOfPointsToPlayOnMouseReleased.push( {coorX: coorX, coorY: coorY} )
    console.log(arrayOfPointsToPlayOnMouseReleased)

    if (currentLine.length > 10) {
      currentLine.splice(0, 1)
      arrayOfPointsToPlayOnMouseReleased.splice(0, 1)
    }

    playAccordingSound(coorX, coorY);
  }

  console.log("mouse pressed")
}

function mouseReleased() {
  console.log("released")
  arrayOfLines.push([])
  playAllLines()
  console.log( arrayOfLines )
}

function loadBuffer(url) {
  fetch(url)
    .then((data) => data.blob())
    .then((blob) => blob.arrayBuffer())
    .then((buffer) => {
      player.loadArrayBuffer(buffer);
    });
}

function playAllLines(i = 0) {
  if(i >= arrayOfPointsToPlayOnMouseReleased.length) return
  playAccordingSound(
      arrayOfPointsToPlayOnMouseReleased[i].coorX,
      arrayOfPointsToPlayOnMouseReleased[i].coorY,
  )
  setTimeout(() => {playAllLines(i + 1)}, 500)
}

//////////// prevent zooming

document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

document.addEventListener("gesturechange", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});

document.addEventListener("gestureend", function (e) {
  e.preventDefault();
  // special hack to prevent zoom-to-tabs gesture in safari
  document.body.style.zoom = 0.99;
});
