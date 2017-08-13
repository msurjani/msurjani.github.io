var dImageArray = new Array (6);

for (i=0; i < dImageArray.length; i++)
{
  dImageArray[i] = "logos/d" + (i+1) + ".png";
}

var dImageCounter = 0;
function rotate()
{
  var dImageObject = document.getElementById('daigou');
  dImageObject.src = dImageArray[dImageCounter];
  ++dImageCounter;
  if(dImageCounter == 6)
  {
    dImageCounter = 0;
  }
}

function startRotation()
{
  document.getElementById('daigou').src = dImageArray[5];
  setInterval('rotate()', 3000);
}
