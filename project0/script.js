const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const node = document.createElement("LI")
  node.setAttribute('class','todo-container')
  const textnode = document.createElement("INPUT")
  textnode.setAttribute('class', 'todo-text')
  textnode.setAttribute('type', 'text')
  textnode.setAttribute('value', 'new Todo')
  const checkboxnode = document.createElement('INPUT')
  checkboxnode.setAttribute('type','checkbox')
  checkboxnode.setAttribute('class','todo-checkbox')
  checkboxnode.addEventListener("click", function(){onClick(this)})
  const delete_btn = document.createElement('BUTTON')
  delete_btn.setAttribute('class', 'todo-delete')
  delete_btn.innerHTML = 'del'
  delete_btn.addEventListener("click", function(){delNode(this)})

  node.appendChild(textnode)
  node.appendChild(checkboxnode)
  node.appendChild(delete_btn)
  list.appendChild(node)

  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) +1
}

function onClick(id){
  if (id.checked) {
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) +1
  } else {
    uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) -1
  }
}
function delNode(id){
  list.removeChild(id.parentNode)
}
