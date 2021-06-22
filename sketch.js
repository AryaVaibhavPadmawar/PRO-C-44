var singingchild;
var singingchildImg;
var maaybhavanisound;
var obj1;



function preload(){
  singingchildImg = loadImage("singingboy.jpg");
  
}
function setup() {
  createCanvas(800,400);;
  
  this.button = createButton('MardMaratha');
  this.button.position(150,350);
  this.button = createButton('JaiJaiShivShankar');
  this.button.position(250,350);
  this.button = createButton('MaayBhavani');
  this.button.position(380,350);
  this.button = createButton('OmMangalamMissionMaangalam');
  this.button.position(480,350);
  this.button = createButton('JaiJaiShivShankar');
  this.button.position(225,380);
  this.button = createButton('TeriMitti');
  this.button.position(355,380);
  this.button = createButton('Ghungroo');
  this.button.position(425,380);
  this.button = createButton('ChogadaTara');
  this.button.position(505,380);

  singingchild = createSprite(400, 200, 50, 50);
  obj1 = createSprite(425,360);

}

function draw() {
  background(255);
  singingchild.addImage("singingchild", singingchildImg);
  singingchild.scale = "3";
  obj1.scale = "0.2";
  
  drawSprites();
}