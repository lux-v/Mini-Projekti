const search = document.querySelector('.search')
const ikona = document.querySelector('.ikona')
const unos = document.querySelector('.unos')

ikona.addEventListener('click',()=>{
    search.classList.toggle('active')


    unos.focus()

})