const searchBtn = document.querySelector('.search-btn')
const input = document.querySelector('.input')

    searchBtn.addEventListener('click', () => {
        input.classList.add('active')
    })

    document.body.addEventListener('click', (el) => {
        if(!el.target.classList.contains('input') &&
        !el.target.classList.contains('search-btn') &&
        !el.target.classList.contains('fa-search') &&
        !input.value.trim().length > 0) {
            input.classList.remove('active')
        }
    })