const grid = document.querySelector('.big-square');
const selectLevel = document.querySelector('#play');
const title = document.querySelector('.intro')


const btnPlay = document.querySelector('.btn');
btnPlay.addEventListener('click', 
function () {
    const nCells = parseInt(selectLevel.value);

    switch (selectLevel.value) {
		case 'easy':
			createCell(100, grid);
			break;
		case 'hard':
			createCell(81, grid);
			break;
		case 'crazy':
			createCell(49, grid);
			break;
	}
    
    createCell(nCells, grid);
    const listCells = document.querySelectorAll('.cell');
    for (let i = 1; i < listCells.length; i++) {
        const cells = listCells[i];
        cells.addEventListener('click',
            function() {
            this.classList.toggle('clicked');
        })
    }

    title.remove();
});


// FUNZIONI 

function createCell (nCells, grid){

    grid.innerHTML = '';

    for (i = 1; i < nCells; i++) {
        grid.innerHTML += `<div class= "cell"> ${i}</div>`;
    }
}