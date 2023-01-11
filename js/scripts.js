alert('per iniziare a giocare clicca su "play"')

const container = document.querySelector('.container');
console.log(container)

const play = document.querySelector('button')
play.addEventListener('click', function(){
    
    if(container.classList.contains('none')){
        container.classList.remove('none')
    }
    else{
        container.classList.add('none')
        console.log('cliccato sul numero: ', i)
    }
})
for(let i = 1; i <= 100; i++){
    
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = i
    container.append(newSquare)

    newSquare.addEventListener('click', function () {

        if(this.classList.contains('click')){
            this.classList.remove('click')
        }
        else{
            this.classList.add('click')
            console.log('cliccato sul numero: ', i)
        }
    })
}
