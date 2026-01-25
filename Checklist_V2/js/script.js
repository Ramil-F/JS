"use strict";

let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
//Добавляем текс в список
		let task = document.createElement('span');
		task.textContent = input.value;
		li.append(task);
//Добавляем кноку "Удалить"
		let del = document.createElement('span');
		del.textContent = 'Удалить';
		del.classList.add('remove');
		li.append(del);
//Добавляем кнопку "Сделано"
		let mark = document.createElement('span');
		mark.textContent = 'Сделано';
		mark.classList.add('mark');
		li.append(mark);
		list.append(li);
		input.value = '';
//Remove our sticker
		del.addEventListener('click', function() {
			li.remove();
		});
//Mark our sticker
		mark.addEventListener('click', function() {
			li.firstElementChild.classList.add('done');
		});
//Edit our sticker
		task.addEventListener('dblclick', function() {
			let inp = document.createElement('input');
			inp.value = task.textContent;
			inp.classList.add('newInp');
			task.textContent = '';
			task.append(inp);
			inp.addEventListener('keypress', function(event) {
				if (event.key == 'Enter') {
					task.textContent = inp.value;
					inp.remove();
				}
			})
		})
	}
})