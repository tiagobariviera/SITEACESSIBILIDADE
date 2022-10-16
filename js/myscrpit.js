var todasTags = document.querySelectorAll('*');

function contrasteBranco() {
    todasTags.forEach(function(elemento){
        if(elemento.nodeName == 'BUTTON') {
            elemento.style.backgroundColor = 'black'
            elemento.style.color = 'white'
        } else{
            elemento.style.backgroundColor = 'white'
            elemento.style.color = 'black'
        }
    })
}

contrastew.addEventListener('click', contrasteBranco)

function contrastePreto() {
    todasTags.forEach(function(elemento){
        if(elemento.nodeName == 'BUTTON') {
            elemento.style.backgroundColor = 'white'
            elemento.style.color = 'black'
        } else{
            elemento.style.backgroundColor = 'black'
            elemento.style.color = 'white'
        }
    })
}

contrasteb.addEventListener('click', contrastePreto)

console.log(document.button.nodeName);