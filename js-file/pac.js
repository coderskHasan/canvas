
 const navbarIcon = document.querySelector('.menu-icon')
 const navbar = document.querySelector('.manu')

 let thisBtn = false

 navbarIcon.addEventListener('click', ()=>{
    navbar.classList.toggle('activeAdd')

    if(thisBtn){
        navbarIcon.innerHTML = `<i class="fas fa-bars"></i>`
        thisBtn = false
    }else{
        navbarIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        thisBtn = true
    }
 })