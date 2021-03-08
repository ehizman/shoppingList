const input = document.getElementById('userinput');
const enterBtn = document.getElementById('enter');
const ul = document.querySelector("#shopping-list");
var li_Elements;
var input_values = [];
var test;

var createListElement = () => {
	var li = document.createElement("li"); //create li Element
	li.classList.add("listElement"); //add class
	//add text node as child to li
	if (!(input_values.includes(input.value))){
		var span = document.createElement("span");
		span.appendChild(document.createTextNode(input.value));
		li.appendChild(span);
		input_values.push(input.value);

		var quantityInput = document.createElement("input");
		quantityInput.setAttribute("id","quantityInput")
		quantityInput.setAttribute("type", "text");
		quantityInput.setAttribute("placeholder", "enter unit quantity of items");
		li.appendChild(quantityInput);

		var bagsRadio = document.createElement("input");
		bagsRadio.setAttribute("type","radio");
		bagsRadio.setAttribute("id","bagsRadio");
		bagsRadio.setAttribute("name","quantity");
		bagsRadio.setAttribute("value","bags");
		li.appendChild(bagsRadio);

		var labelBags = document.createElement("label");
		labelBags.setAttribute("for", "bagsRadio");
		labelBags.appendChild(document.createTextNode("bags"));
		li.appendChild(labelBags);

		var cartonsRadio = document.createElement("input");
		cartonsRadio.setAttribute("type","radio");
		cartonsRadio.setAttribute("id","cartonRadio");
		cartonsRadio.setAttribute("name","quantity");
		cartonsRadio.setAttribute("value","cartons");
		li.appendChild(cartonsRadio);

		var labelCartons = document.createElement("label");
		labelCartons.setAttribute("for", "cartonRadio");
		labelCartons.appendChild(document.createTextNode("cartons"));
		li.appendChild(labelCartons);
		
		var sachetsRadio = document.createElement("input");
		sachetsRadio.setAttribute("type","radio");
		sachetsRadio.setAttribute("id","sachetsRadio");
		sachetsRadio.setAttribute("name","quantity");
		sachetsRadio.setAttribute("value","sachets");
		li.appendChild(sachetsRadio);
		
		var labelSachets = document.createElement("label");
		labelSachets.setAttribute("for", "sachetsRadio");
		labelSachets.appendChild(document.createTextNode("sachets"));
		li.appendChild(labelSachets);

		var basketsRadio = document.createElement("input");
		basketsRadio.setAttribute("type","radio");
		basketsRadio.setAttribute("id","basketsRadio");
		basketsRadio.setAttribute("name","quantity");
		basketsRadio.setAttribute("value","baskets");
		li.appendChild(basketsRadio);

		var labelBaskets = document.createElement("label");
		labelBaskets.setAttribute("for", "basketsRadio");
		labelBaskets.appendChild(document.createTextNode("baskets"));
		li.appendChild(labelBaskets);
		
		var kgRadio = document.createElement("input");
		kgRadio.setAttribute("type","radio");
		kgRadio.setAttribute("id","kgRadio");
		kgRadio.setAttribute("name","quantity");
		kgRadio.setAttribute("value","baskets");
		li.appendChild(kgRadio);

		var labelKg = document.createElement("label");
		labelKg.setAttribute("for", "kgRadio");
		labelKg.appendChild(document.createTextNode("kg"));
		li.appendChild(labelKg);

		var cratesRadio = document.createElement("input");
		cratesRadio.setAttribute("type","radio");
		cratesRadio.setAttribute("id","cratesRadio");
		cratesRadio.setAttribute("name","quantity");
		cratesRadio.setAttribute("value","crates");
		li.appendChild(cratesRadio);
		
		var labelCrates = document.createElement("label");
		labelCrates.setAttribute("for", "cratesRadio");
		labelCrates.appendChild(document.createTextNode("crates"));
		li.appendChild(labelCrates);

		var unitsRadio = document.createElement("input");
		unitsRadio.setAttribute("type","radio");
		unitsRadio.setAttribute("id","unitsRadio");
		unitsRadio.setAttribute("name","quantity");
		unitsRadio.setAttribute("value","units");
		li.appendChild(unitsRadio);
		
		var labelUnits = document.createElement("label");
		labelUnits.setAttribute("for", "cratesRadio");
		labelUnits.appendChild(document.createTextNode("units"));
		li.appendChild(labelUnits);

		var priceInput = document.createElement("input");
		priceInput.setAttribute("id","quantityInput")
		priceInput.setAttribute("type", "text");
		priceInput.setAttribute("placeholder", "calculated price");
		li.appendChild(priceInput);

		var doneBtn = document.createElement("button");
		doneBtn.classList.add("purchased");
		doneBtn.appendChild(document.createTextNode("Purchased?"));
		li.appendChild(doneBtn);

		var delBtn = document.createElement("button");
		delBtn.classList.add("delBtn");
		delBtn.appendChild(document.createTextNode("Remove"));
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

//cross-off items when purchased 
ul.addEventListener("click", function(e) {
	if (e.target.className == "purchased"){
		var li = e.target.parentElement;
		test = li.firstChild.classList.toggle("done");
		if (test){
			e.target.innerText = "Not Purchased?";
		}
		else {e.target.innerText = "Purchased?";
		}	
	}
});

enterBtn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);