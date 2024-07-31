function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
  
    stroke("#6DBF0E") 
    fill("#E91E63") 
  
    if(mouseIsPressed)
    rect(mouseX, mouseY, 20, 35);
  }