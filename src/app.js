const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li')


burger.addEventListener('click', () => {

        nav.classList.toggle('nav_active')
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })

        burger.classList.toggle('toggle');
    })

}

navSlide()

window.addEventListener('scroll', function() {
    var nav = document.querySelector("nav")
    nav.classList.toggle('sticky',window.scrollY > 0);
})


const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})