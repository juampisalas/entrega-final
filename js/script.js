const imgContainer = document.getElementsByClassName("imageCasaMarContainer")[0]
if (imgContainer) {
    imgContainer.onmouseenter = () => {
        const img = document.getElementsByClassName('imageCasaMar')[0]
        img.classList.add('active')
    }
    
    imgContainer.onmouseleave = () => {
        const img = document.getElementsByClassName('imageCasaMar')[0]
        img.classList.remove('active')
    }
}