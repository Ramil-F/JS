"use strict";

//Добавление стикера
function addText() {
	let objData = JSON.parse(localStorage.getItem('data'));
//Создание стикеров для визуала
	let block = document.createElement('div');
	let blockStik = document.createElement('p');
	let edit = document.createElement('button');
	let del = document.createElement('button');
	block.setAttribute('class', 'block');
	stiker.append(block);
	blockStik.textContent = textArea.value;
	block.append(blockStik);
	edit.textContent = 'Edit';
	block.append(edit);
	del.textContent = 'Delete';
	block.append(del);
//Проверка на редактироварие стикера
	if (objKey != '') {
		objData[objKey] = textArea.value;
		objKey = '';
	} else {
		let i = Number(localStorage.getItem('key'));
	   let newKey = 'key' + i++;
	   objData[newKey] = textArea.value;
	   localStorage.setItem('key', i);
	}
//Запись в localStorage
	textArea.value = '';
	localStorage.setItem('data', JSON.stringify(objData));

	edit.addEventListener('click', editText);
	del.addEventListener('click', deleteText);
}

//Редактирование стикера
function editText() {
	let objData = JSON.parse(localStorage.getItem('data'));
	let elem = this.parentElement;
	let p = elem.firstElementChild;
	for (let key in objData) {
		if (objData[key] == p.textContent) {
			textArea.value = p.textContent;
			objKey = key;
			elem.remove();
			break;
		}
	}
}

//Удаление стикера
function deleteText() {
	let objData = JSON.parse(localStorage.getItem('data'));
	let elem = this.parentElement;
	let p = elem.querySelector('p');
	for (let key in objData) {
		if (objData[key] == p.textContent) {
			delete objData[key];
			localStorage.setItem('data', JSON.stringify(objData));
			elem.remove();
			break;
		}
	}
}


let data = localStorage.getItem('data');
let key = localStorage.getItem('key');
let obj = {};
let add = document.querySelector('.add');
let textArea = document.querySelector('textarea');
let stiker = document.querySelector('.stiker');
let objKey = '';

//Проверка хранилища с ключами
if (!key) {
	localStorage.setItem('key', 0);
};

//Проверка хранилища с данными
if (!data) {
	localStorage.setItem('data', JSON.stringify(obj));
} else {
	let objData = JSON.parse(localStorage.getItem('data'));
	for (let key in objData) {
		let block = document.createElement('div');
		let blockStik = document.createElement('p');
		let edit = document.createElement('button');
		let del = document.createElement('button');
		block.setAttribute('class', 'block');
		stiker.append(block);
		blockStik.textContent = objData[key];
		block.append(blockStik);
		edit.textContent = 'Edit';
		block.append(edit);
		del.textContent = 'Delete';
		block.append(del);
		edit.addEventListener('click', editText);
		del.addEventListener('click', deleteText);
	}
};

add.addEventListener('click', addText);



