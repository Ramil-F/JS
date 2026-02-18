"use strict";
//выбор случайного цвета
function getColor(arr) {
	return arr[Math.floor(Math.random() * ((+arr.length - 1) - 0 + 1)) + 0];
}
//замена текущего цвена на следующий
function getNewColor(arr, nowElem) {
	let index = arr.indexOf(nowElem);
	if (index == (arr.length - 1)) {
		return arr[0];
	} else {
		return arr[index + 1];
	}
}

let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let table = document.querySelector('#field');
let p = document.querySelector('p');
let count = 0;
for (let i = 1; i <= rows; i++) {
	p.textContent = 'Кол-во ходов:' + count;
	let tr = document.createElement('tr');
	table.append(tr);
	for (let j = 1; j <= cols; j++) {
		let td = document.createElement('td');
		td.classList.add(getColor(colors));
		tr.append(td);

// добавление клика
		td.addEventListener('click', function() {
			count++;
			p.textContent = 'Кол-во ходов:' + count;
			let color = this.classList.value;
			this.classList.remove(color);
			this.classList.add(getNewColor(colors, color));
			let elems = table.querySelectorAll('td');
			let isAllElem = true;
			for (let elem of elems) {
				if (elem.classList.value != this.classList.value) {
					isAllElem = false;
					break;
				};
			}

			if (isAllElem) {
				alert('You win');
			}
		})
	}
}

