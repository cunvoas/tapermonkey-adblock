// ==UserScript==
// @name         Le Point
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.lepoint.fr
// @grant        none
// ==/UserScript==

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


$(document).ready(function () {
   // var article = getElementByXpath("//*[@id=\"site\"]/header/div[6]");
   // console.log(article);
   //  article[0].style.display = "none";

    // Your code here...
});
