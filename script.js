//your code here
let input = document.querySelector('#newTodoInput')
let addBtn = document.querySelector('#addTodoBtn')
let ol = document.querySelector('#todoList')

addBtn.addEventListener("click",()=>{
	if(input.value.trim() !== ""){
		let li = document.createElement('li');
		li.innerText = input.value;
		ol.appendChild(li)
		input.value = ""
	}
	
})
