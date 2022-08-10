const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["Client", "Model"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});