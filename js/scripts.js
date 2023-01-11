const container = document.getElementById('container');
console.log(container)

const play = document.querySelector('button')

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
