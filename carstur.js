function abrirModal(){

    const modal = document.getElementById('modal-1')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar' || e.target.id == 'modal-1'){
            modal.classList.remove('abrir')
        }
    })
}


function abrirModal2(){

    const modal = document.getElementById('modal-2')
    modal.classList.add('abrir2')

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar2' || e.target.id == 'modal-2'){
            modal.classList.remove('abrir2')
        }
    })
}

function abrirModal3(){

    const modal = document.getElementById('modal-3')
    modal.classList.add('abrir3')

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'fechar3' || e.target.id == 'modal-3'){
            modal.classList.remove('abrir3')
        }
    })
}