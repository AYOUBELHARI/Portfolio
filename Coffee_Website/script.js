
const navToggle = document.querySelector('.nav-toggle')
const primaryNav = document.querySelector('#primary-navigation')

const navLinks = document.querySelectorAll('#primary-navigation a')

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('is-open')

    const isOpen = primaryNav.classList.contains('is-open')

    navToggle.setAttribute('aria-expanded', String(isOpen))

    const label = isOpen ? 'Fermer le menu' : 'Ouvrir le menu'

    navToggle.setAttribute('aria-label', label)
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open')

        navToggle.setAttribute('aria-expanded', 'false')
        navToggle.setAttribute('aria-label', 'Ouvrir le menu')
    })
})
