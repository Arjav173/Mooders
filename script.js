var main = document.querySelector("#main");
var nav = document.querySelector("nav");
var h1 = document.querySelector(".main-box h1")
var mainBox = document.querySelector(".main-box");
var video = document.querySelector("video");
var mooders = document.querySelector(".mooders")
var body = document.querySelector("body")

const videoSources = {
    cartier: "cartier-time-project-2.mp4",
    unreck: "URWERK-Intro-3.mp4",
    riotGames: "RR-4xTiming-short.mp4",
    salomon: "tudor-dinner-explore-2.mp4",
    composition: "DB-Intro-copie.mp4",
};




Object.keys(videoSources).forEach((key) => {
    var element = document.querySelector(`.${key}`);
    if (element) {
        element.addEventListener("mouseover", function () {
            video.style.display = "initial";
            video.setAttribute("src", videoSources[key]);
            video.play();
            mainBox.style.borderColor = "white" 
            nav.style.borderColor ="white"
            nav.style.color = "white"
            h1.style.color = "white"
            mooders.style.color = "white"
        });

        element.addEventListener("mouseleave", function () {
            video.style.display = "none";
            video.pause();
            video.removeAttribute("src");
            mainBox.style.borderColor = "black" 
            nav.style.borderColor ="black"
            nav.style.color = "black" 
            h1.style.color = "black"
            mooders.style.color = "black"
        });
    }
});
