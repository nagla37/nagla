let btn = document.getElementById("btn")
let div = document.querySelector(".birthday")
let audio = new Audio("./اغنية حبيبة قلبي كبرت سنة❤️حالات واتساب 🥰.mp3")
const showBirthday = () => {
  div.style.opacity = 1 
  audio.play();
}
btn.addEventListener("click",showBirthday)