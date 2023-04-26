const selectLevel = document.querySelector('#play');
const grid = document.querySelector('.big-square');
const title = document.querySelector('.intro');

// bottone evento
const btnPlay = document.querySelector('.btn');
btnPlay.addEventListener('click', 
function () {
    //fare lo switch tra il titolo e la griglia del gioco
    title.classList.add('hidden');
    grid.classList.remove('hidden');

    //valore del dropdown menù
    const nCells = parseInt(selectLevel.value);

    //stile griglia
    grid.style.setProperty('--sideSquare', Math.sqrt(nCells));

    // creare celle
    createCell(nCells, grid);

    //aggiunto switch per far cambiare il colore
    const listCells = document.querySelectorAll('.cell');
    for (let i = 1; i < listCells.length; i++) {
        const cells = listCells[i];
        cells.addEventListener('click',
            function() {
            this.classList.toggle('clicked');
        })
    }
});


// FUNZIONI 

function createCell (nCells, grid){

    grid.innerHTML = '';

    for (i = 1; i <= nCells; i++) {
        grid.innerHTML += `<div class= "cell"> ${i}</div>`;
    }
}

const arrRandom = [];
const mineFieldBombs = randomNumbombs (1, 16, arrRandom);
arrRandom.push(mineFieldBombs)

function randomNumbombs (min, max, arrRandom) {
    let random;

    do{
        random = Math.floor(Math.random() * (max - min + 1) ) + min;
    } while (arrRandom.includes(random))

    return random;
}