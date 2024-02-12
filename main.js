let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

let data = [
  {
    text: "Task 1",
    date: "2024-2-06",
    description: "going to the gym to lose weight",
  },
  {
    text: "Task 2",
    date: "2024-2-06",
    description: "going to the gym to lose weight",
  },
];

let editTask = (e) => {
  // let selectedTask = e.parentElement.parentElement;

  // textInput.value = selectedTask.children[0].innerHTML;
  // dateInput.value = selectedTask.children[1].innerHTML;
  // textarea.value = selectedTask.children[2].innerHTML;

  // selectedTask.remove();
};

let deleteTask = (e) => {
  
};


const displayData = () => {
	tasks.innerHTML = '';
	for (let i = 0; i < data.length; i++) {
		tasks.innerHTML += `
		<div>
			<span class="fw-bold">${data[i].text} </span>
			<span class="small text secondary">${data[i].date} </span>
			<p>${data[i].description} </p>
	
				<span class="options">
						<i onClick =${editTask(
							this
						)} data-bs-toggle="modal" data-bs-target="form" class="fa fa-pencil-square-o"></i>
						<i onClick =${deleteTask(this)} class="fa fa-trash"></i>
				</span>
				</div>
		`;
	}
}

displayData();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", " ");
    })();
  }
};



let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  console.log(data);
	displayData();
	resetForm();
};




let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};
