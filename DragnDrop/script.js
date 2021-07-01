const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)//attaches an event handler to the specified element.
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) { //вызвана функция
  event.target.classList.add('hold') //event. target – это исходный элемент, на котором произошло событие, в процессе всплытия он неизменен
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
  event.target.className = 'item'
}

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}
