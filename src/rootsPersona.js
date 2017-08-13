var rpImageArray = new Array (6);

for (i=0; i < rpImageArray.length; i++)
{
  rpImageArray[i] = "logos/rp" + (i+1) + ".png";
}

var rpImageCounter = 0;
function rotate()
{
  var rpImageObject = document.getElementById('rp');
  rpImageObject.src = rpImageArray[rpImageCounter];
  ++rpImageCounter;
  if(rpImageCounter == 6)
  {
    rpImageCounter = 0;
  }
}

function startRotation()
{
  document.getElementById('rp').src = rpImageArray[5];
  setInterval('rotate()', 3000);
}
