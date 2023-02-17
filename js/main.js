const amountInp = document.querySelector('.amount')
const divMain = document.querySelector('.main')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (ev) => {

    const render = () => {
        divMain.innerHTML = '';
        for(i = 1; i <= amountInp.value; i++){
            divMain.innerHTML += `<div class="tets">${i}</div>`
        }
        return divMain.innerHTML;
    }
    render()
    const numberShow = () => {
        const div = document.querySelectorAll('.tets')
        for(let i = 0; i < div.length; i++){
            div[i].addEventListener('click', () =>{ div[i].classList.toggle('on') })
        }
    }
    numberShow()
})
    

