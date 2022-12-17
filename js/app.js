
const reveal = () => {
    const cards = document.querySelectorAll('.box-card')

    for (let i = 0; i < cards.length; i++) {
        //window height
        const windowHeight = window.innerHeight;
        //card top
        const cardTop = cards[i].getBoundingClientRect().top
        // card proint
        const revealPoint = 150
        if (cardTop < windowHeight - revealPoint) {
            cards[i].classList.add('show')
        } else {
            cards[i].classList.remove('show')
        }
    }

}
window.addEventListener('scroll', reveal)