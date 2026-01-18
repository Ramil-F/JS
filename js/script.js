"use strict";

//Редактирование
function edit_text() {
	let elem = this.closest('.block');
	let input = document.createElement('input');
	let label = elem.querySelector('label');
	let span_text = elem.querySelector('span');
	let check_inp = elem.querySelector('input');
	let obj_1 = JSON.parse(localStorage.getItem('date'));
			for (let key in obj_1) {
				if (obj_1[key] == span_text.textContent) {
					input.value = span_text.textContent;
					input.autofocus;
					input.setAttribute('class', 'text');
					label.prepend(input);
					span_text.classList.add('close');
					check_inp.classList.add('close');
//Добавление редактирования
					input.addEventListener('blur', function() {
						span_text.textContent = input.value;
						obj_1[key] = input.value;
						span_text.classList.remove('close');
						check_inp.classList.remove('close');
						localStorage.setItem('date', JSON.stringify(obj_1));
						input.remove();
					})
				}
			}
}
//Кнопка удаление
function delete_text() {
	let elem = this.closest('.block');
	let span_text = elem.querySelector('span');
	let obj_1 = JSON.parse(localStorage.getItem('date'));
			for (let key in obj_1) {
				if (obj_1[key] == span_text.textContent) {
					delete obj_1[key];
					localStorage.setItem('date', JSON.stringify(obj_1));
					elem.remove();
					break;
				}
			}
}

//Выделение сделанной работы
function do_text() {
	let elem = this.closest('.block');
	let span_text = elem.querySelector('span');
	let obj_1 = JSON.parse(localStorage.getItem('date'));
	for (let key in obj_1) {
		if (obj_1[key] == span_text.textContent) {
			let new_key = key + 'ok';
			delete obj_1[key];
			obj_1[new_key] = span_text.textContent;
			localStorage.setItem('date', JSON.stringify(obj_1));
			elem.classList.add('disabled-block');
			break;
		}
	}
}
//---------------------------------------------------
let add_text = document.querySelector('.add_text');
let text = add_text.querySelector('.text');
let add = add_text.querySelector('.add');
let check = document.querySelector('.check');
let date = localStorage.getItem('date');
let key = localStorage.getItem('key');
let obj = {};
//Проверка есть ли хранилище данных и вывод данных
if (!date) {
	localStorage.setItem('date', JSON.stringify(obj));
} else {
	let obj_1 = JSON.parse(localStorage.getItem('date'));
	for (let key in obj_1) {
		let checkbox = document.createElement('input');
		let block = document.createElement('div');
		let label = document.createElement('label');
		let span =document.createElement('span');
		let edit = document.createElement('button');
		let del = document.createElement('button');
		checkbox.setAttribute('type', 'checkbox');
		check.append(block);
		block.append(label);
		label.append(checkbox);
		label.append(span);
		label.append(edit);
		label.append(del);
		span.textContent = obj_1[key];
		edit.setAttribute('class', 'edit');
		edit.textContent = 'Edit';
		del.setAttribute('class', 'del');
		del.textContent = 'Delete'
		block.setAttribute('class', 'block');
		del.addEventListener('click', delete_text);
		edit.addEventListener('click', edit_text);
		checkbox.addEventListener('click', do_text);
//Проверка на выполненые задания
		if (key.endsWith('ok')) {
			block.classList.add('disabled-block');
		}
}
};
//Проверка есть ли хранилище счетчика
if (!key) {
	localStorage.setItem('key', 0);
};
//Добавление чекбоксов
add.addEventListener('click', function() {
	if (!text.value) {
		alert('Введите данные в строку ввода')
	} else {
		let obj_1 = JSON.parse(localStorage.getItem('date'));
		let i = Number(JSON.parse(localStorage.getItem('key')));
		let name = 'key' + i;
		obj_1[name] = text.value;
		i++;
		localStorage.setItem('date', JSON.stringify(obj_1));
		localStorage.setItem('key', i);
//Добавление чекбоксов, описания, кнопок редактировать и удалить
		let checkbox = document.createElement('input');
		let block = document.createElement('div');
		let label = document.createElement('label');
		let span =document.createElement('span');
		let edit = document.createElement('button');
		let del = document.createElement('button');
		checkbox.setAttribute('type', 'checkbox');
		check.append(block);
		block.append(label);
		label.append(checkbox);
		label.append(span);
		label.append(edit);
		label.append(del);
		span.textContent = text.value;
		text.value = '';
		edit.setAttribute('class', 'edit');
		edit.textContent = 'Edit';
		del.setAttribute('class', 'del');
		del.textContent = 'Delete'
		block.setAttribute('class', 'block');

		del.addEventListener('click', delete_text);

		edit.addEventListener('click', edit_text);

		checkbox.addEventListener('click', do_text);
	}
})