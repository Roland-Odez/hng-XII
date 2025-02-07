
const btns = document.querySelectorAll('.colorOption button')
const colorBox = document.querySelector('.colorBox')
const score = document.querySelector('.score')
const resetButton = document.querySelector('.newGameButton')
const statusBox = document.querySelector('.gameStatus')


const gameStatus = ['You Guess Wrong 😞', 'Yeyy You Guess Right 😀🎉']
let scoreValue = 0
let targetColor = ''

function generateRandomColors(count = 6) {
    const colors = new Set();

    while (colors.size < count) {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        colors.add(randomColor);
    }

    return Array.from(colors);
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
}




const startGame = () => {
    const colors = generateRandomColors()
    targetColor = colors[Math.floor(Math.random() * 6)]
    colorBox.style.backgroundColor = targetColor

    btns.forEach((btn, index) => {
        
        btn.style.backgroundColor = colors[index]
    
    })
    
}

startGame()

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.style.backgroundColor === hexToRgb(targetColor)){
            scoreValue = scoreValue + 1
            score.innerHTML = scoreValue
            statusBox.innerHTML = gameStatus[1]
            statusBox.classList.remove('wrong')
            statusBox.classList.add('right')
            setTimeout(() => statusBox.classList.remove('right'), 1500)
            startGame()
        }else{
            statusBox.classList.remove('right')
            statusBox.innerHTML = gameStatus[0]
            statusBox.classList.add('wrong')
            setTimeout(() => statusBox.classList.remove('wrong'), 1500)
        }
    })
})


resetButton.addEventListener('click', () => {
    scoreValue = 0
    score.innerHTML = scoreValue
    startGame()
})