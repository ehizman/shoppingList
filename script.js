const input = document.getElementById('userinput');
const enterBtn = document.getElementById('enter');
const ul = document.querySelector("#shopping-list");
var li_Elements;
var input_values = [];


var createListElement = () => {
	var li = document.createElement("li"); //create li Element
	li.classList.add("listElement"); //add class
	//add text node as child to li
	if (!(input_values.includes(input.value))){
		li.appendChild(document.createTextNode(input.value));
		input_values.push(input.value);

		var doneBtn = document.createElement("button");
		doneBtn.classList.add("Purchased");
		doneBtn.appendChild(document.createTextNode("Purchased"));

		var delBtn = document.createElement("button");
		delBtn.classList.add("delBtn");
		delBtn.appendChild(document.createTextNode("Remove"));

		li.appendChild(doneBtn);
		li.appendChild(delBtn);
		ul.appendChild(li);
	}
	else alert('item already in list');
	input.value = "";
}

var inputLength = () => input.value.length;

var addListAfterClick = () => {
	if (inputLength() > 0){
		createListElement();
	}
}

var addListAfterKeypress = (e) => {
	if (inputLength() > 0 && e.keyCode === 13){
		createListElement();	
	}
}
// var delRemovedItem = value => 


//delete items
ul.addEventListener("click", function(e) {
	if (e.target.className == "delBtn"){
		var li = e.target.parentElement;
		input_values = input_values.filter(value => {
			value != li.firstChild;
		});
		ul.removeChild(li);
		li = null;
	}
});

enterBtn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);