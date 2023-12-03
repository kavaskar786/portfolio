const navMenu = document.getElementById('nav_bar'),
     toggleMenu = document.getElementById('toggle-icon')

toggleMenu.addEventListener('click', ()=>{
      navMenu.classList.toggle('show')
})


const nav = document.querySelectorAll('.navLink')
function takeaction (){
   
    navMenu.classList.remove('show')
}
nav.forEach(n =>n.addEventListener('click', takeaction))