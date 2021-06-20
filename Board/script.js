const board = document.querySelector('#board') //the board is created in html file. in html, there is nothing in the div for the board, however looking into the code of the page of this project, there will be the amount of elements that was requested in "const SQU = 700"
const colors = ['#0565ff', '#c505ff', '#00ff44', '#ffc400', '#ff1100', '#cfc98a', '#8acfc4', '#cf8ac0', '#accf8a']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square)) //mouseover = the element which the mouse is on will have color

  square.addEventListener('mouseleave', () => removeColor(square)) //mousleave = the element which the cursor just left will remove its color

  board.append(square) //append = puts the square.addEventListener in the square
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length) //Chooses the color from const = colors
  return colors[index]
}

//the animation of colors removing is made in the CSS file, transition: 2s ease. ease is for animation that starts slowly, then speeds up, finally slows down again
