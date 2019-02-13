"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Anthony S,A Gradillas
   Date:   2.12.19

*/

/* Declares the variable thisTime containing the date object with February 3,2018 at 3:15:28, but deleting the "February 3, 2018 at 3:15:28" allows the time to go to default of the current time. The toLocaleString method is to save the text of the thisTime variable in the timeStr variable. Changes the innerHtml code of the page element of the ID timestamp to the value of the timeStr variable.  */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

/* First, a thisHour variable was created, using the getHours() method to be able to extract the hour value from the thisTime variable. Likewise, for thisMonth just instead of thisHour it will be thisMonth and using the getMonth() method to extract the month value from the thisTime variable. */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

/* The # of the map to use with the given hour and month is calculated with the formula "(2 * thisMonth + thisHour) % 24", where the stored value of the formula in the mapNum variable. The HTML code for the inline element shows the sky image to use in the web page. A variable named imgStr stores the following text string "<img src='sd_sky.png'/>" where map is the value of the mapNum variable. */
var mapNum = (2 * thisMonth + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* For the page element with the ID planisphere, the insertAdjacentHTML() will insert the value of the imgStr variable directly after the element's opening tag. */
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);