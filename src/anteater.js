var antImageArray = new Array (3);

for (i=0; i < antImageArray.length; i++)
{
  antImageArray[i] = "logos/ac" + (i+1) + ".png";
}

var antImageCounter = 0;
function rotate()
{
  var antImageObject = document.getElementById('ant');
  antImageObject.src = antImageArray[antImageCounter];
  ++antImageCounter;
  if(antImageCounter == 3)
  {
    antImageCounter = 0;
  }
}

function startRotation()
{
  document.getElementById('ant').src = antImageArray[2];
  setInterval('rotate()', 3000);
}
