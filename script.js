
let size = 16;
let color = "black"
let click = false;

function sketch(size, color) {

    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.style.borderStyle = 'solid';

        square.addEventListener('mouseover', () => {
            if (click === true) {
                let symbols = "0123456789ABCDEF";
                let colors = '#'
                for (let i = 0; i < 6; i++) {
                    colors = colors + symbols[Math.floor(Math.random() * 16)];
                }
                color = colors;
            }
            square.style.backgroundColor = color;
        });

        board.insertAdjacentElement("beforeend", square);
    }
}


document.getElementById("reset").onclick = function(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => (div.style.backgroundColor = "white"));
    click = false;
    color = "black";
}

document.getElementById("sizeButton").onclick = function(){
    size = document.getElementById("myText").value;
    if(size > 50) {
        size = 50;
    }   else if (size <=0) {
        size = 1;
    }
    sketch(size, color);
}

document.getElementById("partyBtn").onclick = function(){
    click = false;
    let symbols = "0123456789ABCDEF";
    let colors = '#'
    for (let i = 0; i < 6; i++) {
        colors = colors + symbols[Math.floor(Math.random() * 16)];
    }
    color = colors;
    sketch(size, color);
}

document.getElementById("party").onclick = function(){
    if (click === true) {
        click = false;  
    } else if (click === false) {
        click = true;
    }
    
}

sketch(size, color);