"use strict";

//Add new date
function createCell(row, name, cssName) {
	let td = document.createElement('td');
	td.textContent = name;
	td.classList.add(cssName);
	row.append(td);
	return td;
};

//Add cost
function recountTotal() {
	let costs = table.querySelectorAll('.cost');
	total.textContent = '0';
	for (let cost of costs) {
		total.textContent = Number(total.textContent) + Number(cost.textContent);
	}
};

//Edit elem
function allowEdit(td) {
	td.addEventListener('dblclick', function() {
		let inp = document.createElement('input');
		inp.value = td.textContent;
		inp.focus();
		td.textContent = '';
		td.append(inp);

		inp.addEventListener('keypress', function(event) {
			if (event.key =='Enter') {
				td.textContent = inp.value;
				inp.remove();
				recountTotal();
				if (td.classList == 'price' || td.classList == 'amount') {
					let tr = td.parentElement;
					tr.getElementsByClassName('cost')[0].textContent = Number(tr.getElementsByClassName('price')[0].textContent) * Number(tr.getElementsByClassName('amount')[0].textContent);
					recountTotal();
				}
			}
		})
	})
};

let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	allowEdit(createCell(tr, name.value, 'name'));
	allowEdit(createCell(tr, price.value, 'price'));
	allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
		this.parentElement.remove();
		recountTotal();
	});
	table.append(tr);
	recountTotal();
	name.value = '';
	price.value = '';
	amount.value = '';
})