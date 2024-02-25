const menuIcon = document.querySelector('.hamburger-wrap')
const navDropdown = document.querySelector('.nav-dropdown')



menuIcon.addEventListener('click',(e)=>{
    const hamburgerWrap = e.target.parentElement.parentElement
    hamburgerWrap.classList.toggle('active')
    navDropdown.classList.toggle('active')
})