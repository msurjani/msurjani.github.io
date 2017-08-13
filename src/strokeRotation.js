var strokeImageArray = new Array (3);

for (i=0; i < strokeImageArray.length; i++)
{
  strokeImageArray[i] = "logos/sp" + (i+1) + ".png";
}

var strokeImageCounter = 0;
function rotate()
{
  var strokeImageObject = document.getElementById('stroke');
  strokeImageObject.src = strokeImageArray[strokeImageCounter];
  ++strokeImageCounter;
  if(strokeImageCounter == 3)
  {
    strokeImageCounter = 0;
  }
}

function startRotation()
{
  document.getElementById('stroke').src = strokeImageArray[2];
  setInterval('rotate()', 3000);
}
