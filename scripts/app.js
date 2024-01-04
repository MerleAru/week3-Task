let moviePoster = document.querySelector('.movie-poster')

let modal = document.querySelector('#myModal')
console.log(modal)

let closebtn = document.querySelector('.closebtn')

let modalImage = document.querySelector('.movie-poster-modal')

moviePoster.addEventListener('click', ()=> {
    modal.style.display = 'block'
    modalImage.src = moviePoster.src
})

closebtn.addEventListener('click', ()=> {
    modal.style.display = 'none'
})

window.addEventListener('click', (event)=> {
    if(event.target === modal) {
        modal.style.display = 'none'
    }
})