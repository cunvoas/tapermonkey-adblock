// ==UserScript==
// @name         Figaro CSS Script
// @version      0.1
// @description  Modify CSS
// @author       cunvoas
// @match        http://www.lefigaro.fr/*
// @grant        none
// ==/UserScript==

//window.addEventListener('load', function () {

$(document).ready(function () {
	var article = document.getElementsByClassName("fig-article-body");
     console.log("nb="+ article.length);
	for (i = 0; i < article.length; i++) {
        console.log("fig-article-body "+article[i].style.textShadow);
		article[i].style.textShadow = "rgb(0, 0, 0) 0px 0px 0px";
        console.log("fig-article-body "+article[i].style.textShadow);
	}
});
