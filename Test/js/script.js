"use strict";

let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];

let test = document.querySelector('#test');
let btn = document.querySelector('button');
let radioName = 1;
let arr = [];

for (let obj of questions) {
	let div = document.createElement('div');
	test.append(div);
	let p = document.createElement('p');
	p.textContent = obj['text'];
	div.append(p);
	arr[radioName - 1] = [];
//Added variants in input
	for (let elem of obj['variants']) {
		let label = document.createElement('label');
		div.append(label);
		let input = document.createElement('input');
		let span = document.createElement('span');
		input.type = 'radio';
		input.name = radioName;
		span.textContent = elem;
		arr[radioName - 1].push(input);
		label.append(input);
		label.append(span);
	};
	radioName++;
};
console.log(arr)

let labels = test.querySelectorAll('label');

btn.addEventListener('click', function() {
	for (let label of labels) {
		label.classList.remove('right');
		label.classList.remove('wrong');
	};

	let index = 0;
	for (let j = 0; j < arr.length; j++) {
		for (let i = 0; i < arr[j].length; i++) {
			if (arr[j][i].checked) {
				index = i;
				break;
			};
		};
		if (index == questions[j].right) {
			arr[j][index].parentElement.classList.add('right');
		} else {
			arr[j][index].parentElement.classList.add('wrong');
		}
	}
})




