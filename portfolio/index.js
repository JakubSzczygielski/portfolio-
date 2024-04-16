const paragraphs = document.querySelectorAll(".paragraphs");
const contents = document.querySelectorAll(".content");

function makeActive(elId) {
  for (paragraph of paragraphs) {
    paragraph.classList.remove("active-link");
  }
  for (content of contents) {
    content.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(elId).classList.add("active-content");
}

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0px";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby9jPaWsOdwyZa8rgfPvE61uMgbYMCeUAj63-mbe7yq5BDDwAon2Cqh6V_YMu4wVOxt/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerText = 'Message sent succesfully'
      setTimeout(()=>{
        msg.innerText=''
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

