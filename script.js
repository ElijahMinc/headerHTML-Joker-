const linkStart = document.getElementById('start-link')

const linkExit = document.getElementById('exit-link')
const popap = document.querySelector('.popap')

linkStart.addEventListener('click', () => {
   popap.classList.add('start')
   popap.classList.remove('exit')
})

linkExit.addEventListener('click', () => {
   popap.classList.add('exit')
   popap.classList.remove('start')
})