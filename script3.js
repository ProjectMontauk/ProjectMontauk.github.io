const inputBox3 = document.getElementById("input-box3");
const listContainer3 = document.getElementById("list-container3");

function addTask3(){
	if(inputBox3.value === ''){
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox3.value;
		listContainer3.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox3.value = "";
	saveData3();
}

listContainer3.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData3();
	}
	else if(e.target.tagName === "SPAN") {
		e.target.parentElement.remove()
		saveData3();
	}
}, false);

function saveData3(){
	localStorage.setItem("data3", listContainer3.innerHTML);
}

function showTask(){
	listContainer3.innerHTML = localStorage.getItem("data3");
}

showTask();
