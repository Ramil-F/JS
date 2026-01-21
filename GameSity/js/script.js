"use strict";

function searchSity(){

};

let field = document.querySelector('#field');
let text = document.querySelector('.text');
let message = document.querySelector('#message');
let arr = [];
let str = '';


field.addEventListener('keypress', function func(event) {
	if (event.key == 'Enter') {
		let bool = false;
//Проверка массива, есть ли там значения введенных городов
		if (arr[0] == undefined) {
			str = field.value.substr(-1);
			arr.push(field.value);
			text.textContent = 'Введите город на букву - "' + str + '"';
			message.textContent = 'Последний введенный город - ' + field.value;
			field.value = '';
		} else if (str == field.value.slice(0, 1)) {
//Проверяем был ли введен город раньше и начинается ли новый город с правильной буквы
			for (let elem of arr) {
				if (elem == field.value) {
					message.textContent = 'Этот город уже вводили';
					field.value = '';
					bool = true;
					break;
				}
			}
			if (bool != true) {
					str = field.value.substr(-1);
					arr.push(field.value);
					text.textContent = 'Введите город на букву - "' + str + '"';
					message.textContent = 'Последний введенный город - ' + field.value;
					field.value = '';
			} 
		} else {
			message.textContent = 'Ввели город не с правильной буквы';
			field.value = '';
		}
//---------------------

	};
});