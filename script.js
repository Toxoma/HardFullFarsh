"use strict";

const todoControl = document.querySelector('.todo-control'),
   headerInput = document.querySelector('.header-input'),
   todoList = document.querySelector('.todo-list'),
   todoCompleted = document.querySelector('.todo-completed');

function saveStorage(mas) {
   localStorage.clear();
   mas.forEach(item => {
      localStorage[localStorage.length] = JSON.stringify(item);
   });
}

const render = function () {
   todoList.textContent = '';
   todoCompleted.textContent = '';
   let todoData = [];

   for (let i = 0; i < localStorage.length; i++) {
      todoData.push(JSON.parse(localStorage[i]));
   }

   todoData.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
         '<div class="todo-buttons">' +
         '<button class="todo-remove"></button>' +
         '<button class="todo-complete"></button>' +
         '</div>';

      if (item.completed) {
         todoCompleted.append(li);
      } else {
         todoList.append(li);
      }

      const todoCompletedBtn = li.querySelector('.todo-complete');
      todoCompletedBtn.addEventListener('click', () => {

         item.completed = !item.completed;

         saveStorage(todoData);
         render();
      });

      const todoRemoveBtn = li.querySelector('.todo-remove');
      todoRemoveBtn.addEventListener('click', () => {
         let search = todoData.findIndex(data => data.value === item.value);
         todoData.splice(search, 1);

         saveStorage(todoData);
         render();
      });

   });

};

todoControl.addEventListener('submit', e => {
   e.preventDefault();

   const newTodo = {
      value: headerInput.value,
      completed: false
   };
   headerInput.value = '';

   if (newTodo.value.trim() === '') {
      return;
   }

   localStorage[localStorage.length] = JSON.stringify(newTodo);

   render();
});

render();