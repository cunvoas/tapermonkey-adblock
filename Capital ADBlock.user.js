// ==UserScript==
// @name         Capital ADBlock
// @namespace    http://www.capital.fr/
// @version      0.1
// @description  adblock killer
// @author       You
// @match        http://www.capital.fr/*
// @grant        none
// ==/UserScript==

//$(document).ready(function () {
$(window).load(function () {
    console.log("ADBlock tapermonkey");    
//    console.log(document.childNodes[1].childNodes[1].tagName );
    document.childNodes[1].childNodes[1].childNodes[0].style.display='none';
    
});
