const contents = document.querySelectorAll('.content');

checkBoxes()

window.addEventListener('scroll', checkBoxes)


function checkBoxes(){
    const granica =window.innerHeight /5*4

    contents.forEach(content=>{
        const contentTop = content.getBoundingClientRect().top
            
        if (contentTop<=granica) {

            content.classList.add('active')
        }
        if (contentTop>granica) {

            content.classList.remove('active')
        }
    })

    
}