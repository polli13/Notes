//var input = document.getElementById('input');
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");

function deleteTodo() { 
	for (let span of spans) {
		span.addEventListener('click', function() { 
			span.parentElement.remove()
		})
	}
}

function loadTodo() {
	if (localStorage.getItem('todoList')){
		ul.innerHTML = localStorage.getItem('todoList')
	}
}

loadTodo()




console.log(input)
input.addEventListener('keypress', function(keyPressed) { 
	if(keyPressed.which === 13) {
		var li = document.createElement('li')
		//var button = document.createElement('button')
		var spanElement = document.createElement('span')
		var icon = document.createElement('i')
		var newTodo = input.value 
		input.value = ''

		icon.classList.add('fas', 'fa-trash-alt')
		spanElement.append(icon)

		ul.appendChild(li).append(spanElement, newTodo) 

		deleteTodo()
	}
})

saveBtn.addEventListener('click', function() {
	localStorage.setItem('todoList', ul.innerHTML)
})

clearBtn.addEventListener('click', function() {
	ul.innerHTML = ''
	localStorage.removeItem('todoList', ul.innerHTML)
})

ul.addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
	}
})

