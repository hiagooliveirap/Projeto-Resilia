let button = document.querySelector('.button')

button.addEventListener('click', function(){
    let resposta = prompt('Qual das 3 opções você escolheu?')    

    if(resposta == 3){
        window.location = 'm3.html'
    }else{
        alert('Infelizmente você ainda não se recuperou completamente, ou digitou errado, volte e tente novamente')
        window.location = '/index.html'
    }
})