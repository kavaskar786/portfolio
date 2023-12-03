//This code was for toggle in and out the nav bar

const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
   nav = document.getElementById(navId);

  if(toggle && nav){
      toggle.addEventListener('click',()=>{
          nav.classList.toggle('show')
      })
  }
}

showMenu('toggle-icon','nav_bar')

//Let us write a code to take out menu when each item is selected.

const nav = document.querySelectorAll('.navLink')

function takeout (){
    const menu = document.getElementById('nav_bar')
    menu.classList.remove('show')
}
nav.forEach(n =>n.addEventListener('click', takeout))