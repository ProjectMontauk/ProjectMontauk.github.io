const inputBox1 = document.getElementById("input-box1");
const listContainer1 = document.getElementById("list-container1");

function addTask1(){
	if(inputBox1.value === ''){
		alert("You must write something1!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox1.value;
		listContainer1.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox1.value = "";
	saveData1();
}

listContainer1.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData1();
	}
	else if(e.target.tagName === "SPAN") {
		e.target.parentElement.remove()
		saveData1();
	}
}, false);

function saveData1(){
	localStorage.setItem("data1", listContainer1.innerHTML);
}

function showTask(){
	listContainer1.innerHTML = localStorage.getItem("data1");
}

showTask();
