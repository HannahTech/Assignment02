function loadJsonFile()
{
   var client = new XMLHttpRequest();
   client.open("GET", "Proxy.php", true);
   client.send();
   client.onreadystatechange = function () {
      if (client.readyState == 4) {
         if(client.status === 200) { 
          imageArray(client.responseText);
        } else {
            alert('An error occurred during your request: ' +  client.status + ' ' + client.statusText);
        } 
      };
   };
}

var jsonImages = {};
function imageArray (jsonRecall){
  jsonImages = JSON.parse(jsonRecall);
  showSlides(jsonRecall);
}

var newHop;
var currentIndex = -1;

function showSlides(arrImage) 
{     
   fadeOut()

   if ( !arrImage && arrImage !== undefined)
   {
      currentIndex -= 1;

      if(currentIndex < 0)
      {
         currentIndex = jsonImages.ImageList.length + currentIndex;
      }
   }

   else 
   {
      if (currentIndex === (jsonImages.ImageList.length - 1))
      {
         currentIndex = 0 ;
      }
      else {

         currentIndex++;
      }
   }           
   
   setTimeout(function () 
   {
      var hopTime;
      fadeIn();      
      var currentFigure = jsonImages.ImageList[currentIndex];
      document.getElementById("image").src = currentFigure.name;
      document.getElementById("fileName").innerText = currentFigure.number;
      hopTime = 2000 ;
      
      clearInterval(newHop);
      newHop = setInterval(rightAdvance,hopTime);
   }, 1000);   
}


function rightAdvance() {   
   showSlides(true);
}


function setUpPage() {
   loadJsonFile();   
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}

function updateBtn() 
{
   currentIndex = -1;
   clearInterval(newHop);
   loadJsonFile();
}

function fadeIn() {
   document.getElementById("image").classList.remove('imgFadeOut');
   document.getElementById("image").classList.add('imgFadeIn');
}

function fadeOut() {
   document.getElementById("image").classList.remove('imgFadeIn');
   document.getElementById("image").classList.add('imgFadeOut');
}