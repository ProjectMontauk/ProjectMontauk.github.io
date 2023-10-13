const inputBox2 = document.getElementById("input-box2");
const listContainer2 = document.getElementById("list-container2");

function addTask2(){
	if(inputBox2.value === ''){
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox2.value;
		listContainer2.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox2.value = "";
	saveData2();
}

listContainer2.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData2();
	}
	else if(e.target.tagName === "SPAN") {
		e.target.parentElement.remove()
		saveData2();
	}
}, false);

function saveData2(){
	localStorage.setItem("data2", listContainer2.innerHTML);
}

function showTask(){
	listContainer2.innerHTML = localStorage.getItem("data2");
}

showTask();
