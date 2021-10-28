/*
      Assignment 03 - Photo Gallery

      Author: Hengameh Khajehpour 301122261

      Date:  February 2021

  */

"use strict"; 

var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
var figFilenameSmall = "images/IMG_0" + photoOrderArray[2] + "sm.jpg";

function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; 
   createEventListener();
}

function closeWin() {
   window.close();
}

function addToFavourites()
{
   if (window.opener.imgCounter <5)
   {
      window.opener.addImage(figFilenameSmall);
   }
   else
   {
      alert("You have reached the maximum number of added images. Remove at least one image.")
   }
}

function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }

   var photoAddToFav = document.getElementsByTagName("p")[1];
   if (photoAddToFav.addEventListener) {
     photoAddToFav.addEventListener("click", addToFavourites, false); 
   } else if (photoAddToFav.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", addToFavourites);
   }

}

window.onload = pageSetup;