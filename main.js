// darkmode
function toggleDarkMode() {
    let element = document.querySelectorAll(".unDarkMode");
    element.forEach((e) => {
        e.classList.toggle("dark-mode");
    })
}

// modalWeb
function modalWeb(){
    let modalWeb = document.getElementById("modalWeb");
    let overlay = document.getElementById("overlay");
    modalWeb.style.display = "block";
    overlay.style.display = "block";
}


function closeModalWeb(){
    let modalWeb = document.getElementById("modalWeb");
    let overlay = document.getElementById("overlay");
    modalWeb.style.display = "none";
    overlay.style.display = "none";
}

// modalDesign
function modalDesign(){
    let modalDesign = document.getElementById("modalDesign");
    let overlay = document.getElementById("overlay");
    modalDesign.style.display = "block";
    overlay.style.display = "block";
}

function closeModalDesign(){
    let modalDesign = document.getElementById("modalDesign");
    let overlay = document.getElementById("overlay");
    modalDesign.style.display = "none";
    overlay.style.display = "none";
}

// modalData
function modalData(){
    let modalData = document.getElementById("modalData");
    let overlay = document.getElementById("overlay");
    modalData.style.display = "block";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
}

function closeModalData(){
    let modalData = document.getElementById("modalData");
    let overlay = document.getElementById("overlay");
    modalData.style.display = "none";
    overlay.style.display = "none";
}

// modalReact
function modalReact(){
    let modalReact = document.getElementById("modalReact");
    let overlay = document.getElementById("overlay");
    modalReact.style.display = "block";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
}

function closeModalReact(){
    let modalReact = document.getElementById("modalReact");
    let overlay = document.getElementById("overlay");
    modalReact.style.display = "none";
    overlay.style.display = "none";
}

// modalCyber
function modalCyber(){
    let modalCyber = document.getElementById("modalCyber");
    let overlay = document.getElementById("overlay");
    modalCyber.style.display = "block";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
}

function closeModalCyber(){
    let modalCyber = document.getElementById("modalCyber");
    let overlay = document.getElementById("overlay");
    modalCyber.style.display = "none";
    overlay.style.display = "none";
}

// MODALUI/UX
function modalUiUx(){
    let modalUiUx = document.getElementById("modalUiUx");
    let overlay = document.getElementById("overlay");
    modalUiUx.style.display = "block";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
}

function closeModalUiUx(){
    let modalUiUx = document.getElementById("modalUiUx");
    let overlay = document.getElementById("overlay");
    modalUiUx.style.display = "none";
    overlay.style.display = "none";
}

// hamburber menu
function openNav() {
    document.getElementById("mySidebar").style.width = "275px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// reveal
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

  window.addEventListener("scroll", reveal);
  
//   slide-right
  function slideRight() {
    var slide_right = document.querySelectorAll(".slide-in-right");
  
    for (var i = 0; i < slide_right.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slide_right[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slide_right[i].classList.add("active");
      } else {
        slide_right[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", slideRight);

//   slide-left
  function slideLeft() {
    var slide_left = document.querySelectorAll(".slide-in-left");
  
    for (var i = 0; i < slide_left.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slide_left[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slide_left[i].classList.add("active");
      } else {
        slide_left[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", slideLeft);

  function fadeInBottom() {
    var fade_in_bottom = document.querySelectorAll(".fade-in-bottom");
  
    for (var i = 0; i < fade_in_bottom.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = fade_in_bottom[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        fade_in_bottom[i].classList.add("active");
      } else {
        fade_in_bottom[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", fadeInBottom);
  