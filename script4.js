const inputBox4 = document.getElementById("input-box4");
const listContainer4 = document.getElementById("list-container4");

function addTask4(){
	if(inputBox4.value === ''){
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox4.value;
		listContainer4.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox4.value = "";
	saveData4();
}

listContainer4.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData4();
	}
	else if(e.target.tagName === "SPAN") {
		e.target.parentElement.remove()
		saveData4();
	}
}, false);

function saveData4(){
	localStorage.setItem("data4", listContainer4.innerHTML);
}

function showTask(){
	listContainer4.innerHTML = localStorage.getItem("data4");
}

showTask();
