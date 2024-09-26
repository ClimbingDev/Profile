$(document).ready(function () {
    localStorage.setItem("dark", "false")
    let header_text = document.querySelector(".main-heading").innerHTML;
    let header_text_length = header_text.length;
    localStorage.setItem("animate", "true")
    let i = 0;
    let reverse = false;
    setInterval(function() {
        if ((!reverse) && (localStorage.getItem("animate") == "true")) {
            i += 1;
            document.querySelector(".main-heading").innerHTML = header_text.slice(0, header_text_length - i) + "|";
            if (document.querySelector(".main-heading").innerHTML.length == 1) {
                reverse = true;
            }
        } else if ((reverse) && (localStorage.getItem("animate") == "true")) {
            i -= 1;
            document.querySelector(".main-heading").innerHTML = header_text.slice(0, header_text_length - i) + "|";      
            if (document.querySelector(".main-heading").innerHTML.length == header_text_length) {
                reverse = false;
            }
        }
    }, 300);
    jQuery('#vmap').vectorMap({ map: 'world_en', selectedRegions: ['ZA'], selectedColor: "red"});
});

document.querySelector(".main-heading").addEventListener("click", function() {
   if (localStorage.getItem("animate") == "true") {
       localStorage.setItem("animate", "false"); 
   } else {
       localStorage.setItem("animate", "true"); 
   }
});

document.querySelector(".theme").addEventListener("click", function() {
    console.log("clicked");
    if (localStorage.getItem("dark") === "false") {
        console.log("Dark mode activated");
        localStorage.setItem("dark", "true");
        document.querySelector("body").style.backgroundColor = "#1f1f1f";
        document.querySelector("body").style.color = "#F2F0EF";    
        [...document.querySelectorAll(".container-third")].map(item => { item.style.border = "0px solid #2c2c2c"; item.style.backgroundColor = "#171617"});         
        [...document.querySelectorAll(".container-2third")].map(item => { item.style.border = "0px solid #2c2c2c"; item.style.backgroundColor = "#171617"});  
        document.querySelector(".theme").innerHTML = "Jed W. | Dark";
        document.querySelector(".icon").style.filter = "invert(1)";
    } else {
        console.log("Light mode activated")
        localStorage.setItem("dark", "false");
        document.querySelector("body").style.backgroundColor = "#F2F0EF";
        document.querySelector("body").style.color = "#000";    
        [...document.querySelectorAll(".container-third")].map(item => { item.style.border = "0px solid #2c2c2c"; item.style.backgroundColor = "#fff"});   
        [...document.querySelectorAll(".container-2third")].map(item => { item.style.border = "0px solid #2c2c2c"; item.style.backgroundColor = "#fff"});  
        document.querySelector(".theme").innerHTML = "Jed W. | Lite";
        document.querySelector(".icon").style.filter = "invert(0)";
        //document.querySelector(".icon").style.filter = "";
    }
});

// Swiper.js code
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    loop: true
  },
  pagination: {
    el: ".swiper-pagination",
  },
});