// Assign the calendar functions to the textBox variables

function submit(){
  // Iterate through 1-20 Calendar add
  for (let i=1; i < 21; i++) {
    calendar = "calendar" + i;
    textBox = document.getElementById(calendar);
    saveCal(calendar);
  }
}

function saveCal(calendar){
	localStorage.setItem(calendar, document.getElementById(calendar).value);
}

function showCal(){
  // console.log(localStorage.getItem(calendar));
  for (let i=1; i < 21; i++) {
    calendar = "calendar" + i;
    console.log(localStorage.getItem(calendar));
    document.getElementById(calendar).value = localStorage.getItem(calendar);
    //textBox = document.getElementById(calendar);
  }
}

showCal();
