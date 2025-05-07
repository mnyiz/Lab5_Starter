// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio")
  const slider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img")
  const button = document.querySelector("button")
  const confetti = new JSConfetti();
    hornSelect.addEventListener("change", () =>{
    const selected = hornSelect.value;
    image.src = `assets/images/${selected}.svg`;
    audio.src = `assets/audio/${selected}.mp3`;
});


slider.addEventListener("input", () =>{
    const volume = slider.value;
    audio.volume = volume / 100;


    if(volume == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if(volume < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
});

button.addEventListener("click", () => {
    audio.play();
    if(hornSelect.value == "party-horn"){
      confetti.addConfetti();
    }
  });
}

