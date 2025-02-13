const playBtn = document.querySelector("#btn1");
const cdElement = document.querySelector(".cd");
const song = document.getElementById("song");
const progress = document.getElementById("progress");
const playBtn2 = document.querySelector("#btn1").classList;
// Load metadata
song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Play/Pause Button (index 1)
document.querySelectorAll("button")[1].addEventListener("click", function() {
  const isAnimating = cdElement.classList.toggle("animation");
document.body.style.backgroundImage="url('./images/baby3.jpg')";
document.body.style.backgroundSize = "cover"; 


document.body.style.backgroundRepeat = "no-repeat";

 
  
  // Play click sound
  new Audio(isAnimating ? "./click/old.mp3" : "./click/pick.mp3").play().catch(() => {});

  if (isAnimating) {
    song.play().catch(() => {});
    playBtn.classList.replace("ri-play-large-fill", "ri-pause-large-fill");
    setTimeout(() => new Audio("./disk/disk.mp3").play().catch(() => {}), 1000);
   

  } else {
    song.pause();
    playBtn.classList.replace("ri-pause-large-fill", "ri-play-large-fill");
   
  }
});

// Button sound effects
document.querySelectorAll(".btns").forEach(btn => {
  btn.addEventListener("click", function() {
    new Audio("./click/old.mp3").play().catch(() => {});
  });
});

// Progress update
let updateInterval;
song.addEventListener("play", () => {
  updateInterval = setInterval(() => {
    progress.value = song.currentTime;
  }, 100);
});

song.addEventListener("pause", () => clearInterval(updateInterval));

// Seek functionality
progress.oninput = () => {
  song.currentTime = progress.value;
  if (song.paused) song.play().catch(() => {});
};
const heartCreate = () =>{
const heart=document.createElement('div');
heart.classList.add('heart');
heart.innerText="❤️";
heart.style.left=Math.random()*100+'vw';
heart.style.animationDuration=Math.random()*2+3+'s';

     
document.body.appendChild(heart);
    


}
setInterval(heartCreate,300)
const kissCreate = () =>{
  const kiss=document.createElement('div');
  kiss.classList.add('heart');
  kiss.innerText="😘";
  kiss.style.left=Math.random()*100+'vw';
  kiss.style.animationDuration=Math.random()*2+3+'s';
  
       
  document.body.appendChild(kiss);
      
  
  
  }
  setInterval(kissCreate,500)