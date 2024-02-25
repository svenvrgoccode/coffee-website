const howBtn = document.querySelector('.how-index .btn')
const howCircles = document.querySelectorAll('.how-index .circle')


howBtn.addEventListener('mouseenter',(e)=>{
    e.preventDefault();
    howCircles.forEach((circle)=>{
        circle.classList.add('active')
    })
})
howBtn.addEventListener('mouseleave',(e)=>{
    e.preventDefault();
    howCircles.forEach((circle)=>{
        circle.classList.remove('active')
    })
})






