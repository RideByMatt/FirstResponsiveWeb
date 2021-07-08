// DODALIŚMY FUNKCJĘ UNIWERSALNĄ - ŚCIEMNIANIE PASKA NAWIGACJI

document.addEventListener ('DOMContentLoaded', function(){
const nav = document.querySelector ('.navbar')

// zmienne poniżej dotyczą likwidacji interakcji paska menu - ma nie zasłaniać sekcji po kliknięciu na nią
const allNavItems = document.querySelector ('.nav-link')
const navList = document.querySelector ('.nav-collapse')

function addShadow () {

    if(window.scrollY >= 10) {
        nav.classList.add('shadow-bg')
    } else {
        nav.classList.remove('shadow-bg')
    }
}

    // allNavItems.forEach(item => item.addEventListener ('click', () => navList.classList.remove('show')))









window.addEventListener('scroll',addShadow)
})

