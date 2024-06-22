const arrTodoList = [];

const listTodo = document.querySelector('.todo__list');
const addTodo = document.querySelector('.todo__add');

addTodo.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo__add-btn') && addTodo.querySelector('.todo__text').value !== '') {
        const addText = addTodo.querySelector('.todo__text').value;
        arrTodoList.push(addText);
        addTodo.querySelector('.todo__text').value = '';
        renderTodoList(arrTodoList);
    }
});

listTodo.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo__del-btn')) {
        const delIndexArr = event.target.closest('.todo__item').dataset.value;
        arrTodoList.splice(delIndexArr, 1);
        renderTodoList(arrTodoList);
    }
});

function renderTodoList(array) {
    listTodo.innerHTML = '';

    array.forEach((element, item) => {
        const itemTodo = document.createElement('li');
        
        itemTodo.classList.add('todo__item');
        itemTodo.dataset.value = item;

        const textTodo = document.createElement('p');
        const spanText = document.createElement('span')

        const divForDelTodoBtn = document.createElement('div');
        const delTodoBtn = document.createElement('button');

        delTodoBtn.classList.add('todo__del-btn');
        delTodoBtn.innerText = 'Видалити';
        divForDelTodoBtn.append(delTodoBtn);

        itemTodo.append(textTodo, divForDelTodoBtn);

        spanText.innerText = element;
        textTodo.innerText = `Завдання ${item + 1}: `;

        textTodo.append(spanText)
        listTodo.append(itemTodo);
    });
}