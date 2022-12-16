"use strict";var playBtn=document.querySelector(".bonus__main-wheel-btn"),main=document.querySelector(".bonus__main"),wheel=document.querySelector(".bonus__main-wheel-reel"),overlay=document.querySelector(".bonus__overlay"),popupFirst=document.querySelector(".bonus__firstWin"),popupFirstBtn=document.querySelector(".bonus__firstWin-btn"),popupSecond=document.querySelector(".bonus__secondWin"),overflow=document.querySelector("body"),wrapper=document.querySelector(".bonus"),wheelReel=document.querySelector(".bonus__main-wheel-reel"),musicBtn=document.querySelector(".bonus__music"),audio=document.querySelector(".audio");function musicOn(){musicBtn.classList.add("on"),musicBtn.querySelector("img").setAttribute("src","img/music-on.svg"),audio.play()}function musicOff(){musicBtn.classList.remove("on"),musicBtn.querySelector("img").setAttribute("src","img/music-off.svg"),audio.pause()}musicBtn.addEventListener("click",function(){(musicBtn.classList.contains("on")?musicOff:musicOn)()});var triesCounter=0;function runFirstRotation(){wheel.classList.add("reel-rotation-first"),playBtn.classList.remove("pulse-btn"),playBtn.style.cursor="default",wrapper.style.pointerEvents="none",setTimeout(function(){doAfterFirstRotation()},6e3),triesCounter++}function doAfterFirstRotation(){wheel.style.transform="rotate(992deg)",wheel.classList.remove("reel-rotation-first"),displayPopup(popupFirst),wrapper.style.pointerEvents="auto",overflow.style.overflow="hidden",setTimeout(function(){playBtn.classList.add("pulse-btn"),playBtn.style.cursor="pointer",wheelReel.classList.add("_secondRotate")},1200)}function runSecondRotation(){wheel.classList.add("reel-rotation-second"),playBtn.classList.remove("pulse-btn"),playBtn.style.cursor="default",overflow.style.overflow="hidden",wrapper.style.pointerEvents="none",setTimeout(function(){doAfterSecondRotation()},6e3),triesCounter++}function doAfterSecondRotation(){displayPopup(popupSecond),wrapper.style.pointerEvents="auto"}function displayPopup(e){overlay.classList.remove("opacity-overlay"),e.classList.remove("hide")}playBtn.addEventListener("click",function(){(0===triesCounter?(runFirstRotation(),musicOn):runSecondRotation)()}),popupFirstBtn.addEventListener("click",function(){overlay.classList.add("opacity-overlay"),popupFirst.classList.add("hide"),overflow.style.overflow="unset"});