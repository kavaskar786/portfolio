const navbar = document.getElementById('nav-bar')
const toggleBtn = document.getElementById('toggleIcon')

toggleBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('show')
})
   
const nav = document.querySelectorAll('.navBar')
function takeAction (){
    navbar.classList.remove('show')
}
nav.forEach(n =>n.addEventListener('click', takeAction))






const subIm = document.getElementsByClassName('subImg');
const gallery = document.getElementById('gallery');

const images = new Array(
    "./img/haurache5.jpg",
    "./img/haurache1.jpg",
    "./img/haurache2.jpg",
    "./img/haurache3.jpg"
);

for(let i=0; i<subIm.length; i++){
    subIm[i].onclick = function()
    {
        gallery.src = images[i]; 
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += ' active'; 
    };
}




