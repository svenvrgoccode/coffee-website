const accords = document.querySelectorAll('.accord')
const cards = document.querySelectorAll('.accord .content .card')
const accordClicks = document.querySelectorAll('.accord-click')
const accordHeading = document.querySelectorAll('.accord .heading')
const contents = document.querySelectorAll('.accord .content')
const angles =  document.querySelectorAll('.accord .fa-angle-down') 







cards.forEach((card)=> {
    card.addEventListener('click',(e)=>{
        const content = e.target.parentElement.closest('.content')
        const contentCards = content.querySelectorAll('.card')

        contentCards.forEach((card)=>{
            card.classList.remove('active')
        })

        if(!card.classList.contains('active')){
           card.classList.add('active')
        }else{
           card.classList.remove('active')
        }
    })
})


accords.forEach((accord,index)=>{
    accord.addEventListener('click',(e)=>{
        const content = accord.querySelector('.content')
        const angle = accord.querySelector('.fa-angle-down')


         
        const heading = accord.querySelector('.heading')
        if(e.target === heading ){
            content.classList.toggle('active')
            angle.classList.toggle('active')
            accordClicks[index].classList.toggle('active')
        }
    })
})

accordClicks.forEach((accordHeading,index)=>{
    accordHeading.addEventListener('click',(e)=>{
        accordHeading.classList.toggle('active')
        contents[index].classList.toggle('active')
        angles[index].classList.toggle('active')
    })
})