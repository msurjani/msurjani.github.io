var rmImageArray = new Array (5);

for (i=0; i < rmImageArray.length; i++)
{
  rmImageArray[i] = "logos/rm" + (i+1) + ".png";
}

var rmImageCounter = 0;
function rotate()
{
  var rmImageObject = document.getElementById('rm');
  rmImageObject.src = rmImageArray[rmImageCounter];
  ++rmImageCounter;
  if(rmImageCounter == 5)
  {
    rmImageCounter = 0;
  }
}

function startRotation()
{
  document.getElementById('rm').src = rmImageArray[4];
  setInterval('rotate()', 3000);
}
